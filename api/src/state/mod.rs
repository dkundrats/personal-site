use aws_sdk_s3::Client as S3Client;
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;

#[derive(Clone)]
pub struct AppState {
    pub s3_client: Arc<S3Client>,
    pub cache: Arc<RwLock<HashMap<String, String>>>,
}

impl AppState {
    pub async fn new() -> Result<Self, String> {
        // Load config from environment variables (which should now include those from .env)
        let config = aws_config::from_env().load().await;
        let s3_client = Arc::new(S3Client::new(&config));
        
        let cache = Arc::new(RwLock::new(HashMap::new()));
         
        Ok(Self {
            s3_client,
            cache
        })
    }
}
