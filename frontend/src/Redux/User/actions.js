import axios from "axios";
import { API_ROOT } from "../../Utils/constents";

// action constants

export const actionConstants = {
  GET_USER_REQUEST: "GET_USER_REQUEST",
  GET_USER_SUCCESS: "GET_USER_SUCCESS",
  GET_USER_FAILURE: "GET_USER_FAILURE",
};

// action creators

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

// thunks

export const getUser = (token) => async (dispatch) => {
  try {
    dispatch(getUserRequest());
    const user = await axios.get(
      `${process.env.REACT_APP_FRONTEND_ROOT}/api/user`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
        withCredentials: true,
      }
    );
    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFailure(error));
  }
};
