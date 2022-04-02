import axios from "axios";

// action constants
export const actionConstants = {
  GET_BOARD_REQUEST: "GET_BOARD_REQUEST",
  GET_BOARD_SUCCESS: "GET_BOARD_SUCCESS",
  GET_BOARD_FAILURE: "GET_BOARD_FAILURE",
  CREATE_LIST_REQUEST: "CREATE_LIST_REQUEST",
  CREATE_LIST_SUCCESS: "CREATE_LIST_SUCCESS",
  CREATE_LIST_FAILURE: "CREATE_LIST_FAILURE",
  CREATE_CARD_REQUEST: "CREATE_CARD_REQUEST",
  CREATE_CARD_SUCCESS: "CREATE_CARD_SUCCESS",
  CREATE_CARD_FAILURE: "CREATE_CARD_FAILURE",
};

// action creators

// create card
const createCardRequest = () => {
  return {
    type: actionConstants.CREATE_CARD_REQUEST,
  };
};

const createCardSuccess = (payload) => {
  return {
    type: actionConstants.CREATE_CARD_SUCCESS,
    payload: payload,
  };
};

const createCardFailure = (err) => {
  return {
    type: actionConstants.CREATE_CARD_FAILURE,
    payload: err,
  };
};

const getBoardRequest = () => {
  return {
    type: actionConstants.GET_BOARD_REQUEST,
  };
};

const getBoardSuccess = (payload) => {
  return {
    type: actionConstants.GET_BOARD_SUCCESS,
    payload: payload,
  };
};

const getBoardFailure = () => {
  return {
    type: actionConstants.GET_BOARD_FAILURE,
  };
};

const createListRequest = () => {
  return {
    type: actionConstants.CREATE_LIST_REQUEST,
  };
};

const createListSuccess = (payload) => {
  return {
    type: actionConstants.CREATE_LIST_SUCCESS,
    payload: payload,
  };
};

const createListFailure = () => {
  return {
    type: actionConstants.CREATE_LIST_FAILURE,
  };
};

// thunks
export const getBoard = (board_id) => async (dispatch) => {
  try {
    dispatch(getBoardRequest());
    const board = await axios.get(
      `${process.env.REACT_APP_FRONTEND_ROOT}/board/${board_id}`
    );

    // console.log(board.data);

    dispatch(getBoardSuccess(board.data));
  } catch (error) {
    dispatch(getBoardFailure());
  }
};

export const createList = (title, board, token) => async (dispatch) => {
  try {
    dispatch(createListRequest());
    const list = await axios.post(
      `${process.env.REACT_APP_BACKEND_ROOT}/list/create`,
      {
        title,
        board,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    dispatch(createListSuccess(list.data));
  } catch (error) {
    dispatch(createListFailure());
  }
};

export const createCard = (title, list, token) => async (dispatch) => {
  try {
    dispatch(createCardRequest());

    const card = await axios.post(
      `${process.env.REACT_APP_BACKEND_ROOT}/card/create`,
      {
        title,
        list,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log("Card: ", card.data);
    dispatch(createCardSuccess(card.data.list));
  } catch (error) {
    dispatch(createCardFailure());
  }
};
