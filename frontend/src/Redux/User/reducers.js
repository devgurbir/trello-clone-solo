import getBearerToken from "../../Utils/GetBearerToken";
import { actionConstants } from "./actions";

const initState = {
    isLoading: false,
    isError: false,
    user: {},
    isAuthenticated: null
}

const userReducer = (state = initState, action) => {
    switch(action.type){
        case actionConstants.GET_USER_REQUEST: 
            return {
                ...state,
                isLoading: true,
            }
        case actionConstants.GET_USER_SUCCESS: 
            console.log(action.payload.data.user)
            return {
                ...state,
                isLoading: false,
                isError: false,
                isAuthenticated: true,
                user: action.payload.data.user
            }
        case actionConstants.GET_USER_FAILURE: 
        return {
            ...state,
            isLoading: false,
            isError: true,
            isAuthenticated: false
        }
        default: 
            return state;
    }
}

export default userReducer