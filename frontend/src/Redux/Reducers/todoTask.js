/** @format */

const initalData = {
  boards: {
    columns: [],
  },
};

export const boardsReducer = (state = initalData, action) => {
  switch (action.type) {
    case "GET_BOARD_DETAILS": {
      return { ...state, boards: action.payload };
    }
    case "ADD_NEW_COLUMN": {
      // console.log(action.payload);
      return { boards: [action.payload] };
    }
    case "ADD_NEW_ROW": {
      console.log(action.payload, "reducer");
      return { boards: [action.payload] };
    }
    case "UPDATE_NEW_COLUMN_TITLE": {
      return { boards: action.payload };
    }
    default:
      return state;
  }
};
