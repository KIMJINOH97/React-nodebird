import { all, fork, takeLatest, takeEvery, call, put, take, delay } from 'redux-saga/effects';
import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_FAILURE,
    LOG_OUT_SUCCESS,
    LOAD_USER_REQUEST,
    LOAD_USER_FAILURE,
    LOAD_USER_SUCCESS,
} from '../reducers/user';
import axios from 'axios';

function loginAPI(logindata) {
    // 서버에 요청을 보내는 동작
    return axios.post('/user/login', logindata, {
        withCredentials: true, // 쿠키를 주고 받을 수 있다 서버에서도 설정해야함 cors가 담당.
    }); // 3번째 axios 설정 할 수 있다.
}

function* login(action) {
    // 제너레이터는 async await보다 할 수 있는것이 많다.
    // try, catch 는 실패할 수 있는 코드에서 보호하기 위해 사용.
    try {
        // 로그인 함수가 동작하면 서버에 먼저 요청을 보내고
        // yield fork(logger); // logger는 내 기록을 로깅하는 함수, 10초걸림.
        // 만약 call로 하면 10초 기다렸다가 밑의 함수 실행. 이런 경우는 fork씀.
        const result = yield call(loginAPI, action.data); // fork를 하면 서버 요청을 보내고 신경 안쓴 뒤 put을 한다.
        // fork는 문제가 생긴다. call일 때는 loginAPI가 오류나면 error로 넘어가 오류처리.
        // yield delay(1000);
        yield put({
            // 성공하면 이 부분 동작한다.
            type: LOG_IN_SUCCESS,
            data: result.data, // 정보를 서버로부터 받아옴.
        });
        // 사용자 정보는 서버의 세션에, 프론트에는 세션을 조회할 수 있는 쿠키를 전달한다.
    } catch (e) {
        // loginAPI 실패
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE,
        });
    }
}

function* watchLogin() {
    yield takeEvery(LOG_IN_REQUEST, login);
}

// while(true) = takeEvery와 비슷하게 작용.
// takeLatest 와 takeEvery는 동작은 비슷함. 이전 요청 중 끝나지 않은게 있다면 이전 요청 취소해줌.
// 그러나 delay가 들어가면 다름. HELLOSAGA 3번하면 1번만 뜸. 가장 최신의 것만 받았다 친다?임. 동시에 여러번 하면 그 중 마지막만 받는다.
function* watchHello() {
    yield takeLatest(HELLO_SAGA, function* () {
        yield delay(1000);
        yield put({
            type: 'BYE_SAGA',
        });
    });
}

function signUpAPI(signUpdata) {
    // 서버요청
    return axios.post('/user/', signUpdata);
}

function* signUp(action) {
    // action에 id password nick이 들어있음
    try {
        yield call(signUpAPI, action.data); // 서버요청 보냄, 두번째는 인자signUpAPI의 인자로 전달.
        //yield delay(2000);
        //throw new Error('에러임');
        yield put({
            type: SIGN_UP_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: SIGN_UP_FAILURE,
            error: e,
        });
    }
}

function logoutAPI() {
    // 로그아웃은 data 필요 x 쿠키만 보내주면됨
    return axios.post(
        '/user/logout',
        {},
        {
            withCredentials: true, // 쿠키 보내기 위함.
        }
    );
}

function* watchSignUp() {
    yield takeEvery(SIGN_UP_REQUEST, signUp);
}

function* logout() {
    try {
        yield call(logoutAPI);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: LOG_OUT_FAILURE,
            error: e,
        });
    }
}

function* watchLogout() {
    yield takeEvery(LOG_OUT_REQUEST, logout);
}

function loaduserAPI(userId) {
    // loadOthers해서 따로 만들어도 됨
    return axios.get(userId ? `/user/${userId}` : '/user/', {
        withCredentials: true,
    });
}

function* loaduser(action) {
    try {
        console.log('시발시발', action.data);
        const result = yield call(loaduserAPI, action.data);
        yield put({
            type: LOAD_USER_SUCCESS,
            data: result.data,
            me: !action.data, // 구별하기 위해서 나의 것과 타인의 것
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: LOAD_USER_FAILURE,
            error: e,
        });
    }
}

function* watchLoadUser() {
    yield takeEvery(LOAD_USER_REQUEST, loaduser);
}

export default function* userSaga() {
    yield all([fork(watchLogin), fork(watchSignUp), fork(watchLogout), fork(watchLoadUser)]); // 시작점
    // all은 여러 이펙트를 동시에 실행 할 수 있게끔함.
    // fork, call 비슷함. 공통점: 기본적으로 함수를 실행함
    // call은 동기호출, fork는 비동기 호출임. fork는 비동기라 동시 실행 가능.
}

// function* watchLogin() {
//     console.log('before log_in');
//     while (true) {
//         yield take(LOG_IN); // take(LOG_IN, login)로그인 액선이 들어오면 login함수를 실행
//         yield delay(2000); // 2초뒤에 success가 실행
//         yield put({
//             type: LOG_IN_SUCCESS, // saga의 dispatch와 같다보면됨.
//         });
//         console.log('sdjf');
//     }
// }

// function* watchHello() {
//     console.log('before saga');
//     while (true) {
//         yield take(HELLO_SAGA);
//         console.log('hello saga');
//         console.log('hello saga');
//         console.log('hello saga');
//         // 리덕스의 동작을 방해하진 않는다.
//     } // take가 HELLO_SAGA를 기다리겠다는 거임. next가 오면 실행하겠다는 거임.
//     // take함수 안에 next가 있음. 알아서 해줌. 언제 재게가 되냐면 HELLO_SAGA라는 action이 올 때까지
//     // 즉 HELLO_SAGA action이 들어오면 중단 품.
//     // 비동기 요청해도 되고, 타이머 넣어도 됨.
// }
