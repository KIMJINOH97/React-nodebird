import { all, fork, call, takeLatest, put, delay } from 'redux-saga/effects';
import {
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    ADD_POST_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE,
} from '../reducers/post';

function addPostAPI() {}

function addCommentAPI() {}

function* addPost() {
    try {
        yield delay(2000);
        yield put({
            type: ADD_POST_SUCCESS,
        });
    } catch (e) {
        console.log('시발', e);
        yield put({
            type: ADD_POST_FAILURE,
            error: e,
        });
    }
}

function* addComment(action) {
    // ADD_POST_REQUEST 에서 받은 자료, data:{}
    // request에대한 action
    try {
        yield delay(2000);
        console.log('기다려기다려기다려', action.data.postId);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: {
                postId: action.data.postId,
            },
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: e,
        });
    }
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost); // 게시글 여러번 눌러도 작성 한번!.
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
    yield all([fork(watchAddPost), fork(watchAddComment)]);
}
