pub mod handlers;
pub mod state;
use axum::{routing::get, Router};
use dotenv::dotenv;
use handlers::profile_picture_handler::get_profile_picture;
use handlers::resume_handler::get_resume;
use state::AppState;
use std::sync::Arc;

#[tokio::main]
async fn main() {
    dotenv().ok();
    // init app state with s3 client
    let app_state = match AppState::new().await {
        Ok(state) => Arc::new(state),
        Err(e) => {
            eprint!("Failed to initalize AppState: {}", e);
            std::process::exit(1);
        }
    };
    // build out app with routes
    let app = Router::new()
        .route("/", get(|| async { "Hello, World!" }))
        .route("/pfp", get(get_profile_picture))
        .route("/resume", get(get_resume))
        .with_state(app_state);

    // run our app with hyper, listening globally on port 3000
    let listener = tokio::net::TcpListener::bind("127.0.0.1:3000")
        .await
        .unwrap();
    println!("Listening on 127.0.0.1:3000");
    axum::serve(listener, app).await.unwrap();
}
