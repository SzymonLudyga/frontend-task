import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import users from './users';

export default function createRootReducer(history) {
    return combineReducers({
        router: connectRouter(history),
        users
    });
}
