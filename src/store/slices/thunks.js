import {
  loginFailure,
  loginSuccess,
  logoutSuccess,
  startLoading,
} from "./authSlice";
import {
  getUserInformation,
  loginWithEmailAndPassword,
  logout,
} from "../../cognito/Providers";

export const startLoginWithEmailAndPassword = (email, password) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const payload = await loginWithEmailAndPassword(email, password);
      dispatch(loginSuccess(payload));
    } catch (error) {
      console.log("entra al error login");
      dispatch(loginFailure(error));
    }
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    try {
      await logout();
      dispatch(logoutSuccess());
    } catch (error) {
      console.log(error, "error startLogout");
      dispatch(loginFailure(error));
    }
  };
};

export const startSessionValidate = () => {
  return async (dispatch) => {
    try {
      const payload = await getUserInformation();
      dispatch(loginSuccess(payload));
    } catch (error) {
      console.log("entra al error startSessionValidate");
      dispatch(loginFailure(error));
    }
  };
};
