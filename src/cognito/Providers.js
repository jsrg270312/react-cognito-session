import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import userPool from "./userPool";

export const loginWithEmailAndPassword = (email, password) => {
  const authDetails = new AuthenticationDetails({
    Username: email,
    Password: password,
  });

  const cognitoUser = new CognitoUser({
    Username: email,
    Pool: userPool,
  });

  return new Promise((resolve, reject) => {
    cognitoUser.authenticateUser(authDetails, {
      onSuccess: (session) => {
        const { email, email_verified, sub } = session.getIdToken().payload;
        resolve({ email, email_verified, sub });
      },
      onFailure: (err) => reject(err),
    });
  });
};

export const logout = async () => {
  const cognitoUser = getCognitoUser();
  await cognitoUser.signOut();
};

export const getUserInformation = () => {
  const cognitoUser = getCognitoUser();
  return new Promise((resolve, reject) => {
    cognitoUser.getSession((err, session) => {
      if (err) reject(err);
      const { email, email_verified, sub } = session.getIdToken().payload;
      resolve({ email, email_verified, sub });
    });
  });
};

const getCognitoUser = () => {
  const cognitoUser = userPool.getCurrentUser();
  if (!cognitoUser) throw new Error("User is not authenticated");
  return cognitoUser;
};
