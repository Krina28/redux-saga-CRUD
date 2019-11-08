import * as ACTION_TYPES from './actionTypes'

//get all users action
export const getAllUsers = () => {
    return {
        type: ACTION_TYPES.GET_ALL_USERS,
    }
}

//add user action
export const addUser = (data) => {
    return {
        type: ACTION_TYPES.ADD_USER,
        data
    }
}

//update user action
export const updateUser = (data) => {
    return {
        type: ACTION_TYPES.UPDATE_USER,
        data
    }
}

//delete user action
export const deleteUser = () => {
    return {
        type: ACTION_TYPES.DELETE_USER
    }
}

export const SUCCESS = {
    type: ACTION_TYPES.SUCCESS
}

export const FAILURE = {
    type: ACTION_TYPES.FAILURE
}
