use aws_sdk_s3::Client as S3Client;
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;
use std::env;

#[derive(Clone)]
pub struct AppState {
    pub s3_client: Arc<S3Client>,
    pub cache: Arc<RwLock<HashMap<String, String>>>,
    pub bucket_name: String
}

impl AppState {
    pub async fn new() -> Result<Self, String> {
        let config = aws_config::load_from_env().await;
        let s3_client = Arc::new(S3Client::new(&config));
        
        let cache = Arc::new(RwLock::new(HashMap::new()));
	 let bucket_name = env::var("S3_BUCKET_NAME")
            .map_err(|_| "S3_BUCKET_NAME environment variable not set".to_string())?;

	Ok(Self {
            s3_client,
            cache,
	    bucket_name
        })
    }
}
