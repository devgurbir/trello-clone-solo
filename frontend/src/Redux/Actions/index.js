/** @format */

import { createNewRow, fetchBoardDetails, updateColumnTitle } from "../../Api";

export const getBoardDetails = (board_id) => async (dispatch) => {
  try {
    const { results } = await fetchBoardDetails(board_id);
    return dispatch({
      type: "GET_BOARD_DETAILS",
      payload: results,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addNewColumnAction = (board_id, payload) => async (dispatch) => {
  try {
    await dispatch({
      type: "ADD_NEW_COLUMN",
      payload,
    });
    await getBoardDetails(board_id)(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const addNewRowAction =
  (payload, board_id, token) => async (dispatch) => {
    try {
      const result = await createNewRow(payload, token);
      getBoardDetails(board_id)(dispatch);
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
