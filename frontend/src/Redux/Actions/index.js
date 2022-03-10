/** @format */

import {
  createNewColumn,
  createNewRow,
  fetchBoardDetails,
  updateColumnTitle,
} from "../../Api";

export const getBoardDetails = () => async (dispatch) => {
  try {
    const { results } = await fetchBoardDetails("622a3f7c073a6507ccef5dcf");
    console.log(results);
    return dispatch({
      type: "GET_BOARD_DETAILS",
      payload: results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addNewColumnAction = (payload) => async (dispatch) => {
  try {
    const result = await createNewColumn(payload);
    getBoardDetails()(dispatch);
    return dispatch({
      type: "ADD_NEW_COLUMN",
      payload: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addNewRowAction = (payload) => async (dispatch) => {
  try {
    const result = await createNewRow(payload);
    console.log(result);
    getBoardDetails()(dispatch);
    return dispatch({
      type: "ADD_NEW_ROW",
      payload: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateColumnTitleAction = (id, data) => async (dispatch) => {
  try {
    const result = await updateColumnTitle(id, data);
    getBoardDetails()(dispatch);
    return dispatch({
      type: "UPDATE_NEW_COLUMN_TITLE",
      payload: result,
    });
  } catch (error) {
    console.log(error);
  }
};
//
//
//
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
