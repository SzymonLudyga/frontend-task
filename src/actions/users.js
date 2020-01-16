import apiCall from '../api';

export const USER_LIST_RECEIVED = 'USER_LIST_RECEIVED';

const _usersReceived = userList => {
    return {
        type: USER_LIST_RECEIVED,
        userList,
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