import { all, call } from 'redux-saga/effects';
import user from './user';
import post from './post';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3065/api'; // 기본적으로 깔려있음, 한번 불러온 모듈은 캐싱이 됨. 다른 데도 적용 ㅇㅇ

export default function* rootSaga() {
    yield all([call(user), call(post)]);
}
// 루트 사가
