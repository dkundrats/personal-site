pub mod handlers;
pub mod state;
pub mod config;
use axum::{
    routing::get,
    Router,
};
use handlers::profile_picture_handler::get_profile_picture;
use state::AppState;
use dotenv::dotenv;
use std::sync::Arc;
use crate::handlers::{profile_picture_handler, resume_handler};

#[tokio::main]
async fn main() {
    dotenv().ok();
    
    // init app state with s3 client
    let app_state = match AppState::new().await {
	Ok(state) =>Arc::new(state),
	Err(e) => {
	    eprint!("Failed to initalize AppState: {}", e);
	    std::process::exit(1); 
	} 
    }; 
    // build out app with routes
    let app = Router::new()
 	.route("/", get(|| async { "Hello, World!" }))
	.route("/pfp", get(get_profile_picture))
	.with_state(app_state);
    
    // run our app with hyper, listening globally on port 3000
    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    println!("Listening on 127.0.0.1:3000");
    axum::serve(listener, app).await.unwrap();
}
