import axios from 'axios'
import { useHistory } from 'react-router-dom'

// action constants

export const actionConstants = {
    CREATE_WORKSPACE_REQUEST: "CREATE_WORKSPACE_REQUEST",
    CREATE_WORKSPACE_SUCCESS: "CREATE_WORKSPACE_SUCCESS",
    CREATE_WORKSPACE_FAILURE: "CREATE_WORKSPACE_FAILURE",
    GET_WORKSPACE_REQUEST: "GET_WORKSPACE_REQUEST",
    GET_WORKSPACE_SUCCESS: "GET_WORKSPACE_SUCCESS",
    GET_WORKSPACE_FAILURE: "GET_WORKSPACE_FAILURE"
}

// create workspace
const createWorkspaceRequest = () => {
    return {
        type: actionConstants.CREATE_WORKSPACE_REQUEST
    }
}

const createWorkspaceSuccess = (payload) => {
    return {
        type: actionConstants.CREATE_WORKSPACE_SUCCESS,
        payload: payload
    }
}

const createWorkspaceFailure = (err) => {
    return {
        type: actionConstants.CREATE_WORKSPACE_FAILURE,
        payload: err
    }
}

// get workspace
const getWorkspaceRequest = () => {
    return {
        type: actionConstants.GET_WORKSPACE_REQUEST
    }
}

const getWorkspaceSuccess = (payload) => {
    return {
        type: actionConstants.GET_WORKSPACE_SUCCESS,
        payload: payload
    }
}

const getWorkspaceFailure = (err) => {
    return {
        type: actionConstants.GET_WORKSPACE_FAILURE,
        payload: err
    }
}

// thunk
export const createWorkspace = (title, token) => async (dispatch) => {
    try {
        dispatch(createWorkspaceRequest())
    // replace with card_id
        const workspace = await axios.post(`http://localhost:8000/workspace/create`, {title}, {
            headers: {
                'Authorization': "Bearer " + token
            } 
        }) 
        console.log(workspace.data)
        dispatch(createWorkspaceSuccess(workspace.data.workspace));
        window.location.href = `/workspace/${workspace.data.workspace._id}`
    } catch (error) {
        dispatch(createWorkspaceFailure(error))
    }
}

export const getWorkspace = (workspace_id, token) => async (dispatch) => {
    try {
        dispatch(getWorkspaceRequest())
    // replace with card_id
        const workspace = await axios.get(`http://localhost:8000/workspace/${workspace_id}`, {
            headers: {
                'Authorization': "Bearer " + token
            } 
        }) 
        dispatch(getWorkspaceSuccess(workspace.data.workspace));
    } catch (error) {
        dispatch(getWorkspaceFailure(error))
    }
}