import axios from "axios";
import { API_ROOT } from "../../Utils/constents";
import { useHistory } from "react-router-dom";

// action constants

export const actionConstants = {
  GET_USER_REQUEST: "GET_USER_REQUEST",
  GET_USER_SUCCESS: "GET_USER_SUCCESS",
  GET_USER_FAILURE: "GET_USER_FAILURE",
  CREATE_USER_REQUEST: "CREATE_USER_REQUEST",
  CREATE_USER_SUCCESS: "CREATE_USER_SUCCESS",
  CREATE_USER_FAILURE: "CREATE_USER_FAILURE",
  LOGIN_USER_REQUEST: "LOGIN_USER_REQUEST",
  LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
  LOGIN_USER_FAILURE: "LOGIN_USER_FAILURE",
};

// action creators

// login user
const loginUserRequest = () => {
  return {
    type: actionConstants.LOGIN_USER_REQUEST,
  };
};

const loginUserSuccess = (payload) => {
  return {
    type: actionConstants.LOGIN_USER_SUCCESS,
    payload: payload,
  };
};

const loginUserFailure = (err) => {
  return {
    type: actionConstants.LOGIN_USER_FAILURE,
    payload: err,
  };
};

// get single card
const getUserRequest = () => {
  return {
    type: actionConstants.GET_USER_REQUEST,
  };
};

const getUserSuccess = (payload) => {
  return {
    type: actionConstants.GET_USER_SUCCESS,
    payload: payload,
  };
};

const getUserFailure = (err) => {
  return {
    type: actionConstants.GET_USER_FAILURE,
    payload: err,
  };
};

// create user
const createUserRequest = () => {
  return {
    type: actionConstants.GET_USER_REQUEST,
  };
};

const createUserSuccess = (payload) => {
  return {
    type: actionConstants.GET_USER_SUCCESS,
    payload: payload,
  };
};

const createUserFailure = (err) => {
  return {
    type: actionConstants.GET_USER_FAILURE,
    payload: err,
  };
};

// thunks

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch(loginUserRequest());
    const user = await axios.post(
      `${process.env.REACT_APP_BACKEND_ROOT}/user/signin`,
      { email, password }
    );
    // const token = user.data.token;
    // document.cookie = `access_token=Bearer%20${token};max-age=604800;`;

    dispatch(loginUserSuccess(user.data.user));
  } catch (error) {
    dispatch(loginUserFailure(error));
  }
};

export const createUser = (email, password) => async (dispatch) => {
  try {
    dispatch(createUserRequest());
    const user = await axios.post(
      `${process.env.REACT_APP_BACKEND_ROOT}/user/create`,
      { email, password }
    );
    const token = user.data.token;
    document.cookie = `access_token=Bearer%20${token};max-age=604800;`;

    dispatch(createUserSuccess(user.data.user));
  } catch (error) {
    dispatch(createUserFailure(error));
  }
};

export const getUser = (token) => async (dispatch) => {
  try {
    dispatch(getUserRequest());
    const user = await axios.get(`${process.env.REACT_APP_BACKEND_ROOT}/user`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFailure(error));
  }
};
