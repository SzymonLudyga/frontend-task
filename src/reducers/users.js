import {
    USER_LIST_RECEIVED, USER_DETAILS
} from '../actions/users';

const initialState = {
    userList: [],
    detailed: null
};

export default function users(state = initialState, action) {
    if (action.type === USER_LIST_RECEIVED) {
        return {
            ...state,
            userList: action.userList
        };
    }
    if (action.type === USER_DETAILS) {
        return {
            ...state,
            detailed: action.userDetails
        };
    }
    return state;
}
