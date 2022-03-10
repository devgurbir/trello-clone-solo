import { actionConstants } from "./actions";

const initState = {
    isLoading: false,
    isError: false,
    card: {}
}

const singleCardReducer = (state = initState, action) => {
    switch(action.type){
        case actionConstants.GET_CARD_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actionConstants.GET_CARD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                card: action.payload
            }
        case actionConstants.GET_CARD_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        // Update Desc
        case actionConstants.UPDATE_CARD_DESC_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actionConstants.UPDATE_CARD_DESC_SUCCESS:
            return {
                ...state,
                isLoading: false,
                card: action.payload.data.card
            }
        case actionConstants.UPDATE_CARD_DESC_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        // Update Cover
        case actionConstants.UPDATE_CARD_COVER_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actionConstants.UPDATE_CARD_COVER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                card: action.payload.data.card
            }
        case actionConstants.UPDATE_CARD_COVER_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        // Update Labels
        case actionConstants.UPDATE_CARD_LABELS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actionConstants.UPDATE_CARD_LABELS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                card: action.payload.data.card
            }
        case actionConstants.UPDATE_CARD_LABELS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        // add checklist
        case actionConstants.ADD_CHECKLIST_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actionConstants.ADD_CHECKLIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                card: action.payload.data.card
            }
        case actionConstants.ADD_CHECKLIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}

export default singleCardReducer