/** @format */

export const addNewColumnAction = (payload) => (dispatch) => {
  return dispatch({
    type: "ADD_NEWCOLUMN",
    payload,
  });
};

export const addNewFormColumnName = (payload) => (dispatch) => {
  return dispatch({
    type: "ADD_NEWCOLUMN_FORMNAME",
    payload,
  });
};

export const addNewFormTitle = (payload) => (dispatch) => {
  return dispatch({
    type: "ADD_NEW_FORMTITLE",
    payload,
  });
};

export const deletColumnAndUpdate = (payload) => (dispatch) => {
  return dispatch({
    type: "DEL_COLUMN_UPDATE",
    payload,
  });
};
