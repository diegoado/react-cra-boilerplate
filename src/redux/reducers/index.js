import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router'

const createRootReducer = history => combineReducers({
    router: connectRouter(history)
});

export default createRootReducer;