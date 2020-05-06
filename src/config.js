export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-tutorial-uploading-bucket",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://s94cwbwkg0.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_6Djvj5Tq9",
    APP_CLIENT_ID: "5jnhtp1a57mj337tpsrojicqpu",
    IDENTITY_POOL_ID: "us-east-1:9465fe33-4eae-4b86-bb44-716c534097cd",
  },
  STRIPE_KEY: "pk_test_axeL169Nb9skE466nxPh5tUy00LduCuMZ7",
};
