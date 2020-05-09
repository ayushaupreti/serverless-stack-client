const dev = {
  // STRIPE_KEY: "pk_test_axeL169Nb9skE466nxPh5tUy00LduCuMZ7",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-3-api-dev-attachmentsbucket-ffx8ukgp2ch9",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://r7v94yy9v5.execute-api.us-east-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_LoL3VSFYu",
    APP_CLIENT_ID: "12qvjq3jhlaocru83aabqp33tu",
    IDENTITY_POOL_ID: "us-east-1:dc956c62-39e6-408d-8523-55af98aa269e",
  },
};

const prod = {
  // STRIPE_KEY: "pk_test_axeL169Nb9skE466nxPh5tUy00LduCuMZ7",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-3-api-prod-attachmentsbucket-1asq2n7cis7ep",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://tuvl89rtdk.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ENyqBOslG",
    APP_CLIENT_ID: "3h1ade46fs3drp98h98n55k2m9",
    IDENTITY_POOL_ID: "us-east-1:07ac927e-de96-489e-983a-e6d645da6d2f",
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
