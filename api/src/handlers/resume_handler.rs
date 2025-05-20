use crate::state::AppState;
use axum::{
    extract::State,
    http::{header, StatusCode},
    response::IntoResponse,
};
use std::env;
use std::sync::Arc;

pub async fn get_resume(State(state): State<Arc<AppState>>) -> impl IntoResponse {
    let key = match env::var("RESUME_NAME") {
        Ok(name) => name,
        Err(_) => {
            return (
                StatusCode::INTERNAL_SERVER_ERROR,
                "Missing resume title env var\n",
            )
                .into_response()
        }
    };
    let bucket_name = match env::var("BUCKET_NAME") {
        Ok(name) => name,
        Err(_) => {
            return (
                StatusCode::INTERNAL_SERVER_ERROR,
                "Missing bucket name env var",
            )
                .into_response()
        }
    };
    match state
        .s3_client
        .get_object()
        .bucket(bucket_name)
        .key(key)
        .send()
        .await
    {
        Ok(response) => {
            let data = response.body.collect().await;
            match data {
                Ok(data) => {
                    let bytes = data.into_bytes();
                    let content_type = response.content_type.unwrap_or_else(|| "pdf".to_string());
                    ([(header::CONTENT_TYPE, content_type)], bytes).into_response()
                }
                Err(err) => (
                    StatusCode::INTERNAL_SERVER_ERROR,
                    format!("Failed to collect data {}\n", err),
                )
                    .into_response(),
            }
        }
        Err(err) => (
            StatusCode::NOT_FOUND,
            format!("Could not retrieve resume: {}\n", err),
        )
            .into_response(),
    }
}
