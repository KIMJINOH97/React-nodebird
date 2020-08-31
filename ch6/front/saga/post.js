import { all, fork, call, takeLatest, put, takeEvery } from 'redux-saga/effects';
import {
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    ADD_POST_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE,
    LOAD_MAIN_POSTS_REQUEST,
    LOAD_MAIN_POSTS_FAILURE,
    LOAD_MAIN_POSTS_SUCCESS,
} from '../reducers/post';
import axios from 'axios';

function addPostAPI(postData) {
    return axios.post('/post/', postData, {
        withCredentials: true,
    });
}

function* addPost(action) {
    try {
        // yield delay(2000);
        const result = yield call(addPostAPI, action.data);
        console.log('서버에서 받은 data', result.data);
        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data,
        });
    } catch (e) {
        console.log('시발', e);
        yield put({
            type: ADD_POST_FAILURE,
            error: e,
        });
    }
}
function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost); // 게시글 여러번 눌러도 작성 한번!.
}

function addCommentAPI() {}

function* addComment(action) {
    // ADD_POST_REQUEST 에서 받은 자료, data:{}
    // request에대한 action
    // yield delay(2000);

    try {
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

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function loadMainPostsAPI() {
    return axios.get('/posts'); // 크리덴셜 ㄱㅊ 왜냐면 로그인 안 한 사람도 볼 수 있게
}

function* loadMainPosts() {
    try {
        const result = yield call(loadMainPostsAPI); // 서버의 응답이 result에 들었음.
        yield put({
            type: LOAD_MAIN_POSTS_SUCCESS,
            data: result.data,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: LOAD_MAIN_POSTS_FAILURE,
            error: e,
        });
    }
}

function* watchLoadPosts() {
    yield takeEvery(LOAD_MAIN_POSTS_REQUEST, loadMainPosts);
}

export default function* postSaga() {
    yield all([fork(watchAddPost), fork(watchAddComment), fork(watchLoadPosts)]);
}
