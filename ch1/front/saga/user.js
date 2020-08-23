import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user';

function loginAPI() {
    // 서버에 요청을 보내는 동작
}

function* login() {
    try {
        // 로그인 함수가 동작하면 서버에 먼저 요청을 보내고
        yield call(loginAPI);
        yield put({
            // 성공하면 이 부분 동작한다.
            type: LOG_IN_SUCCESS,
        });
    } catch (e) {
        // loginAPI 실패
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE,
        });
    }
}

function* watchLogin() {
    yield takeLatest(LOG_IN, login); // 로그인 액선이 들어오면 login함수를 실행
}

export default function* userSaga() {
    yield all([fork(watchLogin)]);
}
