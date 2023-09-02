import axios from "../../api/axios";
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../constants/user";

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });

  try {
    const response = await axios.post("/auth", { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: response.data });
    localStorage.setItem("userInfo", JSON.stringify(response.data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register =
  (name, email, password, confirmPassword) => async (dispatch) => {
    dispatch({
      type: USER_SIGNUP_REQUEST,
      payload: { name, email, password, confirmPassword },
    });

    try {
      const response = await axios.post("/register", {
        name,
        email,
        password,
        confirmPassword,
      });
      dispatch({ type: USER_SIGNUP_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({
        type: USER_SIGNUP_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  dispatch({ type: USER_SIGNOUT });
};
