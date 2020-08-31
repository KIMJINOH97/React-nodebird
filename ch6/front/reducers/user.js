const dummyUser = {
    nickname: '제로초',
    Post: [],
    Followings: [],
    Followers: [],
    id: 1,
};

// 리덕스는 동기화로 작용함. 비동기로 하기 위해선 사가라는 미들웨어를 넣어야함.
// 원래는 서버 쪽에 data가 전달되고, 서버가 로그인 성공이라는 응답을 보내주고, 그걸 다시 받아 로그인 함.
// 서버가 맞는 응답을 보내주는 과정이 필요함. 그래서 필요한 것이 미들웨어.

export const initialState = {
    // 초기 값 , 리액트의 state라 보면 됨
    // isLoggedIn: false, // 로그인 여부 me가 있다는것은 로그인 되었다는 뜻
    isLoggingOut: false, // 로그아웃 시도중
    isLoggingIn: false, // 로그인 시도중
    loginErrorReason: '', // 로그인 에러 사유
    signedUp: false, // 회원가입 여부
    isSigningUp: false, // 회원가입 시도중
    signUpErrorReason: '', // 회원가입 실패 사유
    me: null,
    followingList: [], // 팔로잉 리스트
    followerList: [], // 팔로우 리스트
    userInfo: null, // 남의 정보
    data: {},
};

// 로그인 동작할 때,
// 서버에 요청을 보낸다 -> request -> 비동기로 LOG_IN_SUCCESS or LOG_IN_FAILURE 선택> LOG_IN 동작
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS'; // 액션의 이름
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE'; // 액션의 이름

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; // 비동기 요청 서버에 갔다 와야하는!

export const LOAD_FOLLOW_REQUEST = 'LOAD_FOLLOW_REQUEST';
export const LOAD_FOLLOW_SUCCESS = 'LOAD_FOLLOW_SUCCESS'; // 액션의 이름
export const LOAD_FOLLOW_FAILURE = 'LOAD_FOLLOW_FAILURE'; // 액션의 이름

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS'; // 액션의 이름
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE'; // 액션의 이름

export const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
export const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS'; // 액션의 이름
export const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE'; // 액션의 이름

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';

// export const SIGN_UP_ID = 'SIGN_UP_ID';
// export const SIGN_UP_NICK = 'SIGN_UP_NICK';
// export const SIGN_UP_PASSWORD = 'SIGN_UP_PASSWORD';
// 원래는 이렇게 해줘야함.

// 아래는 set State라 보면됨. Action과 reducer로 분리됨.
// export const signUpSuccess = {
//     type: SIGN_UP_SUCCESS,
// };

// export const loginRequestAction = (data) => ({
//     type: LOG_IN_REQUEST,
//     data,
// });

// export const logoutRequestAction = {
//     type: LOG_OUT_REQUEST,
//     data,
// };

// export const signUpRequestAction = (data) => ({
//     type: SIGN_UP_REQUEST,
//     data,
// }); // 바로 리턴

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST: {
            return {
                ...state, // 다음 state들 할 행동
                isLoading: true,
                loginErrorReason: '',
            };
        }
        case LOG_IN_SUCCESS: {
            return {
                ...state,
                isLoggingIn: false,
                me: action.data,
                isLoading: false,
            };
        }
        case LOG_IN_FAILURE: {
            return {
                ...state,
                isLoggingIn: false,
                loginErrorReason: action.error,
                me: null,
            };
        }
        case LOG_OUT_REQUEST: {
            return {
                ...state, // 스프레드 문법: 새로운 객체나 배열을 생성하는 문법 매번 다 쓰고 있음
                isLoggingOut: true,
            };
        }
        case LOG_OUT_SUCCESS: {
            return {
                ...state, // 스프레드 문법: 새로운 객체나 배열을 생성하는 문법 매번 다 쓰고 있음
                isLoggingOut: false,
                me: null,
            };
        }
        case LOG_OUT_FAILURE: {
            return {
                ...state, // 스프레드 문법: 새로운 객체나 배열을 생성하는 문법 매번 다 쓰고 있음
                me: null,
            };
        }
        case SIGN_UP_REQUEST: {
            return {
                ...state,
                signedUp: false, // 회원가입 여부
                isSigningUp: true, // 회원가입 시도중
            };
        }
        case SIGN_UP_SUCCESS: {
            return {
                ...state,
                signedUp: true, // 회원가입 여부
                isSigningUp: false, // 회원가입 시도중
            };
        }
        case SIGN_UP_FAILURE: {
            return {
                ...state,
                signedUp: false, // 회원가입 여부
                isSigningUp: false, // 회원가입 시도중
                signUpErrorReason: action.error, // 회원가입 실패 사유
            };
        }
        case LOAD_USER_REQUEST: {
            return {
                ...state, // 스프레드 문법: 새로운 객체나 배열을 생성하는 문법 매번 다 쓰고 있음
            };
        }
        case LOAD_USER_SUCCESS: {
            return {
                ...state, // 스프레드 문법: 새로운 객체나 배열을 생성하는 문법 매번 다 쓰고 있음
                me: action.data,
            };
        }
        case LOAD_USER_FAILURE: {
            return {
                ...state, // 스프레드 문법: 새로운 객체나 배열을 생성하는 문법 매번 다 쓰고 있음
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default reducer;
// setState((prevState)=>{ 옛날 스테이트와 같아졌는지 확인하기 때문에 새로 생성 해줘야함.
//     return {
//         field: { ...prevState.field},
//     }
// })

// function* generator() {
//     // 제너레이터 라고 *는 무한의 개념 제너레이터는 함수 실행을 중간에 멈출 수 있고 원할 때 재개 가능
// }
