/** @format */

const initalData = {
  boards: {},
};

export const boardsReducer = (state = initalData, action) => {
  switch (action.type) {
    case "GET_BOARD_DETAILS": {
      return { boards: action.payload };
    }
    case "ADD_NEW_COLUMN": {
      return { boards: action.payload };
    }
    case "ADD_NEW_ROW": {
      return { boards: action.payload };
    }
    case "UPDATE_NEW_COLUMN_TITLE": {
      return { boards: action.payload };
    }

    case "DEL_COLUMN_UPDATE": {
      console.log(action);
      return {
        ...state,
        // boards: [{ columns: [...state, action.payload] }],
      };
    }

    case "ADD_NEW_FORMTITLE": {
      console.log(action);
      return {
        ...state,
        // boards: [{ columns: [...state, action.payload] }],
      };
    }
    case "ADD_NEWCOLUMN_FORMNAME": {
      console.log(action);
      return {
        ...state,
        // boards: [{ columns: [...state, action.payload] }],
      };
    }
    default:
      return state;
  }
};
