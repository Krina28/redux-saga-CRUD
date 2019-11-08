import * as ACTION_TYPES from '../actions/actionTypes';

export const initialState = {
    users: [],
    loading: false,
    removedUser: null,
}

export function UsersReducer(state = initialState, action) {
    console.log('action in reducer', action)
    switch (action.type) {
        case ACTION_TYPES.GET_ALL_USERS:
            return {
                ...state
            }
        case ACTION_TYPES.GET_ALL_USERS_REQUEST:
            return {
                ...state,
                users: action.users
            }
        case ACTION_TYPES.ADD_USER:
            return {
                ...state,
                users: action.users
            }
        case ACTION_TYPES.ADD_USER_REQUEST:
            return {
                ...state,
            }
        case ACTION_TYPES.DELETE_USER:
            return {
                ...state,
                removedUser: state.users.find(p => p.id === action.id)
            }
        default:
            return state
    }
}
