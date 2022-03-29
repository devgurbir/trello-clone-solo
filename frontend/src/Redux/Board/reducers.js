import { actionConstants } from "./actions";

const initState = {
  isLoading: false,
  isError: false,
  board: {},
  lists: [],
};

const boardReducer = (state = initState, action) => {
  switch (action.type) {
    case actionConstants.CREATE_CARD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstants.CREATE_CARD_SUCCESS:
      console.log("Line 18", action.payload);
      return {
        ...state,
        lists: state.lists.map((list) =>
          list._id == action.payload._id ? action.payload : { ...list }
        ),
      };
    case actionConstants.CREATE_CARD_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case actionConstants.GET_BOARD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstants.GET_BOARD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        board: action.payload.board,
        lists: action.payload.listData,
      };
    case actionConstants.GET_BOARD_FAILURE:
      return {
        ...state,
        isError: false,
      };
    case actionConstants.CREATE_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstants.CREATE_LIST_SUCCESS:
      console.log(action.payload.list._id);
      return {
        ...state,
        isLoading: false,
        isError: false,
        board: { ...action.payload.board },
        lists: [...state.lists, action.payload.list],
      };
    case actionConstants.CREATE_LIST_FAILURE:
      return {
        ...state,
        isError: false,
      };
    default:
      return state;
  }
};

export default boardReducer;
