import apiCall from '../api';

export const USER_LIST_RECEIVED = 'USER_LIST_RECEIVED';
export const USER_DETAILS_RECEIVED = 'USER_DETAILS_RECEIVED';
export const TOTAL_NUMBER_RECEIVED = 'TOTAL_NUMBER_RECEIVED';

const _usersReceived = userList => {
    return {
        type: USER_LIST_RECEIVED,
        userList,
    };
}

const _usersDetails = userDetails => {
    return {
        type: USER_DETAILS_RECEIVED,
        userDetails,
    };
}

const _totalNumberOfUsersReceived = total => {
    return {
        type: TOTAL_NUMBER_RECEIVED,
        total,
    };
}

export const clearDetails = () => {
    return dispatch => {
        dispatch(_usersDetails(null));
    };
}

export const fetchUsers = (length) => {
    return async (dispatch, getState) => {
        try {
            const res = await apiCall('GET', `search?length=${length}`);
            dispatch(_usersReceived(res.data.items));
            if(!getState().users.total) {
                dispatch(_totalNumberOfUsersReceived(res.data.total))
            }
        } catch (e) {
            // handle error
            console.log(e);
        }
    };
}

export const fetchDetails = id => {
    return async dispatch => {
        try {
            const res = await apiCall('GET', `profiles?ids=${id}`);
            dispatch(_usersDetails(res.data[0]));
        } catch (e) {
            // handle error
            console.log(e);
        }
    };
}