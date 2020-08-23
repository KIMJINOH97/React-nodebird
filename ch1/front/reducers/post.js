export const initialState = {
    mainPosts: [
        {
            User: {
                id: 1,
                nickname: '제로초',
            },
            content: '첫 번째 게시글',
            img: '',
        },
    ],
    imagePath: [],
};

const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

const addPost = {
    type: ADD_POST,
};
const adddummy = {
    type: ADD_DUMMY,
    data: {
        content: 'Hello',
        UserId: 1,
        User: {
            nickname: '제로초',
        },
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
            };
        }
        case ADD_DUMMY: {
            return {
                ...state, // 만약 지나치게 많이쓰면 해독 난해 함
                mainPosts: [action.data, ...state.mainPosts],
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
