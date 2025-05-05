use axum::{
    extract::{State},
    http::{header, StatusCode},
    response::IntoResponse,  
};
use std::sync::Arc;
use crate::state::AppState;
use std::env;

async fn get_profile_picture(
    State(state): State<Arc<AppState>>,
) -> impl IntoResponse {
    let key = match  env::var("PROFILE_JPG_NAME") {
	Ok(name) => name,
	Err(_) => return (StatusCode::INTERNAL_SERVER_ERROR, "Missing profile picture env var").into_response(), 
    };
    let bucket_name = match env::var("BUCKET_NAME") {
	Ok(bucket) => bucket,
	Err(_) => return (StatusCode::INTERNAL_SERVER_ERROR, "Missing bucket env var").into_response()
    }; 

    match state.s3_client.get_object()
        .bucket(bucket_name)
        .key(key)
        .send()
        .await {
	    Ok(response) => {
		let data = response.body.collect().await;
		match data {
		    Ok(data) => {
			let bytes = data.into_bytes();
			let content_type = response.content_type.unwrap_or_else(|| "image/jpeg".to_string());
			(
			    [(header::CONTENT_TYPE, content_type)],
			    bytes
			    ).into_response()
		    },
		    Err(err) => {
			(StatusCode::INTERNAL_SERVER_ERROR, format!("Failed to collect data: {}", err)).into_response()
		    } 
		}
	    },
	    Err(err) => {
		(StatusCode::NOT_FOUND, format!("Image not found: {}", err)).into_response()
		 
	    }
	} 
}
