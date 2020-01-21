import {
    USER_LIST_RECEIVED, USER_DETAILS_RECEIVED, TOTAL_NUMBER_RECEIVED
} from '../actions/users';

const initialState = {
    userList: [],
    detailed: null,
    total: null
};

export default function users(state = initialState, action) {
    if (action.type === USER_LIST_RECEIVED) {
        return {
            ...state,
            userList: action.userList
        };
    }
    if (action.type === USER_DETAILS_RECEIVED) {
        return {
            ...state,
            detailed: action.userDetails
        };
    }
    if (action.type === TOTAL_NUMBER_RECEIVED) {
        return {
            ...state,
            total: action.total
        };
    }
    return state;
}
