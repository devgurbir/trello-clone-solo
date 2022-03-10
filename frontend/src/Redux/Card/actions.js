import axios from 'axios'

// action constants

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
    ADD_ITEM_CHECKLIST_FAILURE: "ADD_ITEM_CHECKLIST_FAILURE"
}

// action creators

// get single card
const getCardRequest = () => {
    return {
        type: actionConstants.GET_CARD_REQUEST
    }
}

const getCardSuccess = (payload) => {
    return {
        type: actionConstants.GET_CARD_SUCCESS,
        payload: payload
    }
}

const getCardFailure = (err) => {
    return {
        type: actionConstants.GET_CARD_FAILURE,
        payload: err
    }
}

// update description of card
const updateCardDescRequest = () => {
    return {
        type: actionConstants.UPDATE_CARD_DESC_REQUEST
    }
}

const updateCardDescSuccess = (payload) => {
    return {
        type: actionConstants.UPDATE_CARD_DESC_SUCCESS,
        payload: payload
    }
}

const updateCardDescFailure = (err) => {
    return {
        type: actionConstants.UPDATE_CARD_DESC_FAILURE,
        payload: err
    }
}

// update title of card
const updateCardTitleRequest = () => {
    return {
        type: actionConstants.UPDATE_CARD_TITLE_REQUEST
    }
}

const updateCardTitleSuccess = (payload) => {
    return {
        type: actionConstants.UPDATE_CARD_TITLE_SUCCESS,
        payload: payload
    }
}

const updateCardTitleFailure = (err) => {
    return {
        type: actionConstants.UPDATE_CARD_TITLE_FAILURE,
        payload: err
    }
}

// update cover of card
const updateCardCoverRequest = () => {
    return {
        type: actionConstants.UPDATE_CARD_COVER_REQUEST
    }
}

const updateCardCoverSuccess = (payload) => {
    return {
        type: actionConstants.UPDATE_CARD_COVER_SUCCESS,
        payload: payload
    }
}

const updateCardCoverFailure = (err) => {
    return {
        type: actionConstants.UPDATE_CARD_COVER_FAILURE,
        payload: err
    }
}

// update labels of card
const updateCardLabelsRequest = () => {
    return {
        type: actionConstants.UPDATE_CARD_LABELS_REQUEST
    }
}

const updateCardLabelsSuccess = (payload) => {
    return {
        type: actionConstants.UPDATE_CARD_LABELS_SUCCESS,
        payload: payload
    }
}

const updateCardLabelsFailure = (err) => {
    return {
        type: actionConstants.UPDATE_CARD_LABELS_FAILURE,
        payload: err
    }
}

// add checklist
const addChecklistRequest = () => {
    return {
        type: actionConstants.ADD_CHECKLIST_REQUEST
    }
}

const addChecklistSuccess = (payload) => {
    return {
        type: actionConstants.ADD_CHECKLIST_SUCCESS,
        payload: payload
    }
}

const addChecklistFailure = (err) => {
    return {
        type: actionConstants.ADD_CHECKLIST_FAILURE,
        payload: err
    }
}

// add item to checklist
const addItemChecklistRequest = () => {
    return {
        type: actionConstants.ADD_ITEM_CHECKLIST_REQUEST
    }
}

const addItemChecklistSuccess = (payload) => {
    return {
        type: actionConstants.ADD_ITEM_CHECKLIST_SUCCESS,
        payload: payload
    }
}

const addItemChecklistFailure = (err) => {
    return {
        type: actionConstants.ADD_ITEM_CHECKLIST_FAILURE,
        payload: err
    }
}

// thunks

export const getCard = (card_id, token) => async (dispatch) => {
    try {
        dispatch(getCardRequest())
    // replace with card_id
        const card = await axios.get(`http://localhost:8000/card/${card_id}`, {
            headers: {
                'Authorization': "Bearer " + token
            } 
        }) 
        console.log(card)
        dispatch(getCardSuccess(card.data.card));
    } catch (error) {
        dispatch(getCardFailure(error))
    }
}

export const updateDesc = (card_id, description) => async (dispatch) => {
    try {
        dispatch(updateCardDescRequest());
        const desc = await axios.patch(`http://localhost:8000/card/${card_id}/description`,
        {description})
        dispatch(updateCardDescSuccess(desc))
    } catch (error) {
        dispatch(updateCardDescFailure(error))
    }
}

export const updateTitle = (card_id, title) => async (dispatch) => {
    try {
        dispatch(updateCardTitleRequest());
        const res = await axios.patch(`http://localhost:8000/card/${card_id}/title`,
        {title})
        dispatch(updateCardTitleSuccess(res))
    } catch (error) {
        dispatch(updateCardTitleFailure(error))
    }
}

export const updateCover = (card_id, cover) => async (dispatch) => {
    try {
        dispatch(updateCardCoverRequest());
        const res = await axios.patch(`http://localhost:8000/card/${card_id}/cover`,
        {cover})
        dispatch(updateCardCoverSuccess(res))
    } catch (error) {
        dispatch(updateCardCoverFailure(error))
    }
}

export const updateLabels = (card_id, labels) => async (dispatch) => {
    try {
        dispatch(updateCardLabelsRequest());
        const res = await axios.patch(`http://localhost:8000/card/${card_id}/labels`,
        {labels})
        dispatch(updateCardLabelsSuccess(res))
    } catch (error) {
        dispatch(updateCardLabelsFailure(error))
    }
}

export const addChecklist = (card_id, title) => async (dispatch) => {
    try {
        dispatch(addChecklistRequest());
        const data = await axios.post(`http://localhost:8000/card/${card_id}/add-checklist`,
        {title})
        dispatch(addChecklistSuccess(data))
        // dispatch(getCard(card_id))
    } catch (error) {
        dispatch(addChecklistFailure(error))
    }
}

export const addItemChecklist = (card_id, id, title) => async (dispatch) => {
    try {
        dispatch(addItemChecklistRequest());
        const data = await axios.post(`http://localhost:8000/card/${card_id}/checklist/addItem`,
        {id, title})
        dispatch(addItemChecklistSuccess(data))
        dispatch(getCard(card_id))
    } catch (error) {
        dispatch(addItemChecklistFailure(error))
    }
}
