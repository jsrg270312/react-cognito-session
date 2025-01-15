import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_IrVpMkUsh",
  ClientId: "70v7v78g3be9ru8uuodl8fn3c0",
};

export default new CognitoUserPool(poolData);
