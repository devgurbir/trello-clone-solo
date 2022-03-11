import { actionConstants } from "./actions";

const initState = {
    isLoading: false,
    isError: false,
    workspace: {}
}

const workspaceReducer = (state = initState, action) => {
    switch(action.type){
        case actionConstants.CREATE_WORKSPACE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actionConstants.CREATE_WORKSPACE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                workspace: {...action.payload}
            }
        case actionConstants.CREATE_WORKSPACE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case actionConstants.GET_WORKSPACE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actionConstants.GET_WORKSPACE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                workspace: action.payload
            }
        case actionConstants.GET_WORKSPACE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case actionConstants.CREATE_BOARD_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actionConstants.CREATE_BOARD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                board: {...action.payload}
            }
        case actionConstants.CREATE_BOARD_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}

export default workspaceReducer