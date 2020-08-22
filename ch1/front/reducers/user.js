export const initialState = {
    // 초기 값 , 리액트의 state라 보면 됨
    isLoggedIn: false,
    user: {},
};

const LOG_IN = 'LOG_IN'; // 액션의 이름
const LOG_OUT = 'LOG_OUT';

// 아래는 set State라 보면됨. Action과 reducer로 분리됨.
const loginAction = {
    type: LOG_IN,
    data: {
        nickname: '제로초',
    },
};

const logoutAction = {
    type: LOG_OUT,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN: {
            return {
                ...state, // 다음 state들 할 행동
                isLoggedIn: true,
                user: action.data,
            };
        }
        case LOG_OUT: {
            return {
                ...state, // 스프레드 문법: 새로운 객체나 배열을 생성하는 문법 매번 다 쓰고 있음
                isLoggedIn: false,
                user: null,
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
