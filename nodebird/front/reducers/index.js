import { combineReducers } from 'redux';
import user from './user';
import post from './post';

const rootReducer = combineReducers({
    // 리듀서들을 묶어 버림.
    user,
    post,
});

export default rootReducer;
