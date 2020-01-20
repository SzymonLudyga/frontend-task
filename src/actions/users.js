import apiCall from '../api';

export const USER_LIST_RECEIVED = 'USER_LIST_RECEIVED';
export const USER_DETAILS = 'USER_DETAILS';

const _usersReceived = userList => {
    return {
        type: USER_LIST_RECEIVED,
        userList,
    };
}

const _usersDetails = userDetails => {
    return {
        type: USER_DETAILS,
        userDetails,
    };
}

export const fetchUsers = () => {
    return async dispatch => {
        const length = 100;
        try {
            const res = await apiCall('GET', `search?length=${length}`);
            dispatch(_usersReceived(res.data.items));
        } catch (e) {
            console.log(e);
        }
    };
}

export const fetchDetails = id => {
    return async dispatch => {
        try {
            const res = await apiCall('GET', `profiles?ids=${id}`);
            console.log(res.data)
            dispatch(_usersDetails(res.data[0]));
        } catch (e) {
            console.log(e);
        }
    };
}