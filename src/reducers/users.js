import {
    USER_LIST_RECEIVED
} from '../actions/users';

const initialState = {
    userList: []
};

export default function users(state = initialState, action) {
    if (action.type === USER_LIST_RECEIVED) {
        return {
            ...state,
            userList: action.userList
        };
    }
    return state;
}
