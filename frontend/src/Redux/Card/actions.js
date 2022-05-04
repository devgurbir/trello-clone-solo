import axios from "axios";
import axios_wc from "../../Utils/axios_wc_instance";


export const actionConstants = {
  GET_CARD_REQUEST: "GET_CARD_REQUEST",
  GET_CARD_SUCCESS: "GET_CARD_SUCCESS",
  GET_CARD_FAILURE: "GET_CARD_FAILURE",
  UPDATE_CARD_DESC_REQUEST: "UPDATE_CARD_DESC_REQUEST",
  UPDATE_CARD_DESC_SUCCESS: "UPDATE_CARD_DESC_SUCCESS",
  UPDATE_CARD_DESC_FAILURE: "UPDATE_CARD_DESC_FAILURE",
  UPDATE_CARD_TITLE_REQUEST: "UPDATE_CARD_TITLE_REQUEST",
  UPDATE_CARD_TITLE_SUCCESS: "UPDATE_CARD_TITLE_SUCCESS",
  UPDATE_CARD_TITLE_FAILURE: "UPDATE_CARD_TITLE_FAILURE",
  UPDATE_CARD_COVER_REQUEST: "UPDATE_CARD_COVER_REQUEST",
  UPDATE_CARD_COVER_SUCCESS: "UPDATE_CARD_COVER_SUCCESS",
  UPDATE_CARD_COVER_FAILURE: "UPDATE_CARD_COVER_FAILURE",
  UPDATE_CARD_LABELS_REQUEST: "UPDATE_CARD_LABELS_REQUEST",
  UPDATE_CARD_LABELS_SUCCESS: "UPDATE_CARD_LABELS_SUCCESS",
  UPDATE_CARD_LABELS_FAILURE: "UPDATE_CARD_LABELS_FAILURE",
  ADD_CHECKLIST_REQUEST: "ADD_CHECKLIST_REQUEST",
  ADD_CHECKLIST_SUCCESS: "ADD_CHECKLIST_SUCCESS",
  ADD_CHECKLIST_FAILURE: "ADD_CHECKLIST_FAILURE",
  ADD_ITEM_CHECKLIST_REQUEST: "ADD_CHECKLIST_REQUEST",
  ADD_ITEM_CHECKLIST_SUCCESS: "ADD_ITEM_CHECKLIST_SUCCESS",
  ADD_ITEM_CHECKLIST_FAILURE: "ADD_ITEM_CHECKLIST_FAILURE",
  UPDATE_CHECKLIST_ITEM_REQUEST: "UPDATE_CHECKLIST_ITEM_REQUEST",
  UPDATE_CHECKLIST_ITEM_SUCCESS: "UPDATE_CHECKLIST_ITEM_SUCCESS",
  UPDATE_CHECKLIST_ITEM_FAILURE: "UPDATE_CHECKLIST_ITEM_FAILURE",
  FILE_UPLOAD_REQUEST: "FILE_UPLOAD_REQUEST",
  FILE_UPLOAD_SUCCESS: "FILE_UPLOAD_SUCCESS",
  FILE_UPLOAD_FAILURE: "FILE_UPLOAD_FAILURE",
  DELETE_CHECKLIST_REQUEST: "DELETE_CHECKLIST_REQUEST",
  DELETE_CHECKLIST_SUCCESS: "DELETE_CHECKLIST_SUCCESS",
  DELETE_CHECKLIST_FAILURE: "DELETE_CHECKLIST_FAILURE",
};

// action creators

// get single card
const getCardRequest = () => {
  return {
    type: actionConstants.GET_CARD_REQUEST,
  };
};

const getCardSuccess = (payload) => {
  return {
    type: actionConstants.GET_CARD_SUCCESS,
    payload: payload,
  };
};

const getCardFailure = (err) => {
  return {
    type: actionConstants.GET_CARD_FAILURE,
    payload: err,
  };
};

// update description of card
const updateCardDescRequest = () => {
  return {
    type: actionConstants.UPDATE_CARD_DESC_REQUEST,
  };
};

const updateCardDescSuccess = (payload) => {
  return {
    type: actionConstants.UPDATE_CARD_DESC_SUCCESS,
    payload: payload,
  };
};

const updateCardDescFailure = (err) => {
  return {
    type: actionConstants.UPDATE_CARD_DESC_FAILURE,
    payload: err,
  };
};

// update title of card
const updateCardTitleRequest = () => {
  return {
    type: actionConstants.UPDATE_CARD_TITLE_REQUEST,
  };
};

const updateCardTitleSuccess = (payload) => {
  return {
    type: actionConstants.UPDATE_CARD_TITLE_SUCCESS,
    payload: payload,
  };
};

const updateCardTitleFailure = (err) => {
  return {
    type: actionConstants.UPDATE_CARD_TITLE_FAILURE,
    payload: err,
  };
};

// update cover of card
const updateCardCoverRequest = () => {
  return {
    type: actionConstants.UPDATE_CARD_COVER_REQUEST,
  };
};

const updateCardCoverSuccess = (payload) => {
  return {
    type: actionConstants.UPDATE_CARD_COVER_SUCCESS,
    payload: payload,
  };
};

const updateCardCoverFailure = (err) => {
  return {
    type: actionConstants.UPDATE_CARD_COVER_FAILURE,
    payload: err,
  };
};

// update labels of card
const updateCardLabelsRequest = () => {
  return {
    type: actionConstants.UPDATE_CARD_LABELS_REQUEST,
  };
};

const updateCardLabelsSuccess = (payload) => {
  return {
    type: actionConstants.UPDATE_CARD_LABELS_SUCCESS,
    payload: payload,
  };
};

const updateCardLabelsFailure = (err) => {
  return {
    type: actionConstants.UPDATE_CARD_LABELS_FAILURE,
    payload: err,
  };
};

// add checklist
const addChecklistRequest = () => {
  return {
    type: actionConstants.ADD_CHECKLIST_REQUEST,
  };
};

const addChecklistSuccess = (payload) => {
  return {
    type: actionConstants.ADD_CHECKLIST_SUCCESS,
    payload: payload,
  };
};

const addChecklistFailure = (err) => {
  return {
    type: actionConstants.ADD_CHECKLIST_FAILURE,
    payload: err,
  };
};

// add item to checklist
const addItemChecklistRequest = () => {
  return {
    type: actionConstants.ADD_ITEM_CHECKLIST_REQUEST,
  };
};

const addItemChecklistSuccess = (payload) => {
  return {
    type: actionConstants.ADD_ITEM_CHECKLIST_SUCCESS,
    payload: payload,
  };
};

const addItemChecklistFailure = (err) => {
  return {
    type: actionConstants.ADD_ITEM_CHECKLIST_FAILURE,
    payload: err,
  };
};

// add checklist
const updateChecklistItemRequest = () => {
  return {
    type: actionConstants.UPDATE_CHECKLIST_ITEM_REQUEST,
  };
};

const updateChecklistItemSuccess = (payload) => {
  return {
    type: actionConstants.UPDATE_CHECKLIST_ITEM_SUCCESS,
    payload: payload,
  };
};

const updateChecklistItemFailure = (err) => {
  return {
    type: actionConstants.UPDATE_CHECKLIST_ITEM_FAILURE,
    payload: err,
  };
};

const fileUploadRequest = () => {
  return {
    type: actionConstants.FILE_UPLOAD_REQUEST,
  };
};

const fileUploadSuccess = (payload) => {
  return {
    type: actionConstants.FILE_UPLOAD_SUCCESS,
    
  };
};

const fileUploadFailure = (err) => {
  return {
    type: actionConstants.FILE_UPLOAD_FAILURE,
    payload: err,
  };
};

// add checklist
const deleteChecklistRequest = () => {
  return {
    type: actionConstants.DELETE_CHECKLIST_REQUEST,
  };
};

const deleteChecklistSuccess = (payload) => {
  return {
    type: actionConstants.DELETE_CHECKLIST_SUCCESS,
    payload: payload,
  };
};

const deleteChecklistFailure = (err) => {
  return {
    type: actionConstants.DELETE_CHECKLIST_FAILURE,
    payload: err,
  };
};

// thunks

// export const fileUploadThunk = (file) => async (dispatch) => {
//   try {
//     dispatch(fileUploadRequest())
//   // upload file to s3
      
//     ReactS3Client
//     .uploadFile(file, "newFileName")
//     .then(data => console.log(data))
//     .catch(err => console.error(err))

//     dispatch(fileUploadSuccess())
//   } catch (error) {
//     dispatch(fileUploadFailure(error))
//   }
// }

export const getCard = (card_id) => async (dispatch) => {
  try {
    dispatch(getCardRequest());

    

    // replace with card_id
    const card = await axios.get(
      `${process.env.REACT_APP_BACKEND_ROOT}/card/${card_id}`
    );
    console.log(card);
    dispatch(getCardSuccess(card.data));
  } catch (error) {
    dispatch(getCardFailure(error));
  }
};

export const updateDesc = (card_id, description) => async (dispatch) => {
  try {
    dispatch(updateCardDescRequest());
    const desc = await axios.patch(
      `${process.env.REACT_APP_BACKEND_ROOT}/card/${card_id}/description`,
      {
        description,
      }
    );
    setTimeout( () => dispatch(updateCardDescSuccess(desc)), 1000);
  } catch (error) {
    dispatch(updateCardDescFailure(error));
  }
};

export const updateTitle = (card_id, title) => async (dispatch) => {
  try {
    dispatch(updateCardTitleRequest());
    const res = await axios.patch(
      `${process.env.REACT_APP_BACKEND_ROOT}/card/${card_id}/title`,
      {
        title,
      }
    );
    dispatch(updateCardTitleSuccess(res));
  } catch (error) {
    dispatch(updateCardTitleFailure(error));
  }
};

export const updateCover = (card_id, cover) => async (dispatch) => {
  try {
    dispatch(updateCardCoverRequest());
    const res = await axios.patch(
      `${process.env.REACT_APP_BACKEND_ROOT}/card/${card_id}/cover`,
      {
        cover,
      }
    );
    dispatch(updateCardCoverSuccess(res));
  } catch (error) {
    dispatch(updateCardCoverFailure(error));
  }
};

export const updateLabels = (card_id, labels) => async (dispatch) => {
  try {
    dispatch(updateCardLabelsRequest());
    const res = await axios.patch(
      `${process.env.REACT_APP_BACKEND_ROOT}/card/${card_id}/labels`,
      {
        labels,
      }
    );
    dispatch(updateCardLabelsSuccess(res));
  } catch (error) {
    dispatch(updateCardLabelsFailure(error));
  }
};

export const addChecklist = (card_id, title) => async (dispatch) => {
  try {
    dispatch(addChecklistRequest());
    const data = await axios.post(
      `${process.env.REACT_APP_BACKEND_ROOT}/card/${card_id}/add-checklist`,
      {
        title,
      }
    );
    console.log("Data from add checklist", data.data);
    dispatch(addChecklistSuccess(data.data));
    // dispatch(getCard(card_id))
  } catch (error) {
    dispatch(addChecklistFailure(error));
  }
};

export const addItemChecklist =
  (card_id, checklist_id, title) => async (dispatch) => {
    try {
      dispatch(addItemChecklistRequest());
      const data = await axios.post(
        `${process.env.REACT_APP_BACKEND_ROOT}/card/${card_id}/checklist/addItem`,
        { checklist_id, title }
      );
      console.log("Data from add checklist", data);

      dispatch(addItemChecklistSuccess(data.data));
      // dispatch(getCard(card_id));
    } catch (error) {
      dispatch(addItemChecklistFailure(error));
    }
  };

export const updateChecklistItem =
  (card_id, checklist_id, item_id, complete) => async (dispatch) => {
    try {
      dispatch(updateChecklistItemRequest());
      const data = await axios.patch(
        `${process.env.REACT_APP_BACKEND_ROOT}/card/${card_id}/toggleItem`,
        { checklist_id, item_id, complete }
      );
      console.log(data.data);
      dispatch(updateChecklistItemSuccess(data.data.newChecklist));
      // dispatch(getCard(card_id));
    } catch (error) {
      dispatch(updateChecklistItemFailure(error));
    }
  };

  export const deleteChecklist =
  (card_id, checklist_id) => async (dispatch) => {
    try {
      dispatch(deleteChecklistRequest());
      const data = await axios_wc.delete(
        `${process.env.REACT_APP_BACKEND_ROOT}/card/${card_id}/deleteChecklist`,
        { data: { checklist_id: checklist_id } }
      );
      
      console.log(data.data)
      dispatch(deleteChecklistSuccess(data.data));
      // dispatch(getCard(card_id));
    } catch (error) {
      dispatch(deleteChecklistFailure(error));
    }
  };