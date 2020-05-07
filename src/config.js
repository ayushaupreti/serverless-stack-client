export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "uploads--bucket-notes-app",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://8g2koyc0q0.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_mBd1jgg03",
    APP_CLIENT_ID: "5b9grv16kijffh86lnvul1kt4l",
    IDENTITY_POOL_ID: "us-east-1:bdc26a1c-f1d4-40e5-a020-53e2b95e14ef",
  },
  STRIPE_KEY: "pk_test_axeL169Nb9skE466nxPh5tUy00LduCuMZ7",
};
