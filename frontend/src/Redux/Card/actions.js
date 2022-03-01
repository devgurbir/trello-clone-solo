export const actionConstants = {
    CREATE_CARD_REQUEST: "CREATE_CARD_REQUEST",
    CREATE_CARD_SUCCESS: "CREATE_CARD_SUCCESS",
    CREATE_CARD_FAILURE: "CREATE_CARD_FAILURE",
}

// action creators

// create card

const createCardRequest = () => {
    return {
        type: actionConstants.CREATE_CARD_REQUEST,
        // payload: any payload
    }
}

// similarly, create action creators for all actions.

// thunks

// create card thunk

export const createCard = () => async (dispatch) => {
    // dispatch(createCardRequest())
        // do something if needed
    // dispatch(createCardSuccess())   
        // do something if needed
    // dispatch(createCardFailure())     
}