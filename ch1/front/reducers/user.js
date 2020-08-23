const dummyUser = {
    nickname: '제로초',
    Post: [],
    Followings: [],
    Followers: [],
    siginUpData: [],
};

// 리덕스는 동기화로 작용함. 비동기로 하기 위해선 사가라는 미들웨어를 넣어야함.
// 원래는 서버 쪽에 data가 전달되고, 서버가 로그인 성공이라는 응답을 보내주고, 그걸 다시 받아 로그인 함.
// 서버가 맞는 응답을 보내주는 과정이 필요함. 그래서 필요한 것이 미들웨어.

export const initialState = {
    // 초기 값 , 리액트의 state라 보면 됨
    isLoggedIn: false,
    user: {
        nickname: null,
    },
    siginUpData: {
        id: '',
        nick: '',
        password: '',
    },
};

// 로그인 동작할 때,
// 서버에 요청을 보낸다 -> request -> 비동기로 LOG_IN_SUCCESS or LOG_IN_FAILURE 선택> LOG_IN 동작
export const LOG_IN = 'LOG_IN'; // 액션의 이름
export const LOG_SUCCESS = 'LOG_SUCCESS'; // 액션의 이름
export const LOG_FAILURE = 'LOG_FAILURE'; // 액션의 이름
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
// export const SIGN_UP_ID = 'SIGN_UP_ID';
// export const SIGN_UP_NICK = 'SIGN_UP_NICK';
// export const SIGN_UP_PASSWORD = 'SIGN_UP_PASSWORD';
// 원래는 이렇게 해줘야함.

// 아래는 set State라 보면됨. Action과 reducer로 분리됨.
export const signUpSuccess = {
    type: SIGN_UP_SUCCESS,
};

export const signUpAction = (data) => {
    // 동적 데이터는 함수?
    return {
        type: SIGN_UP,
        data: data,
    };
};

export const loginAction = {
    type: LOG_IN,
};

export const logoutAction = {
    type: LOG_OUT,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN: {
            return {
                ...state, // 다음 state들 할 행동
                isLoggedIn: true,
                user: dummyUser,
            };
        }
        case LOG_OUT: {
            return {
                ...state, // 스프레드 문법: 새로운 객체나 배열을 생성하는 문법 매번 다 쓰고 있음
                isLoggedIn: false,
                user: null,
            };
        }
        case SIGN_UP: {
            return {
                ...state,
                signUpData: action.data,
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
