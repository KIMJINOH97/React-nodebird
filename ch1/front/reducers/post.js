export const initialState = {
    mainPosts: [
        {
            id: 1,
            User: {
                id: 1,
                nickname: '제로초',
            },
            content: '첫 번째 게시글',
            img: '',
        }, // 화면의 포스트 들
    ],
    imagePath: [], // 미리보기 이미지 경로
    addPostError: false, // 포스트 업로드 실패 사유
    isAddingPost: false, // 포스트 업로드 중
    postAdded: false, // 포스트 업로드 성공
    addCommentError: '',
    isAddingComment: false,
    commentAdded: false,
};

const dummyPost = {
    id: 2,
    User: {
        id: 1,
        nickname: '제로초',
    },
    content: '나는 더미 입니다.',
    Comments: [],
};

const dummyComment = {
    id: 1,
    User: {
        id: 1,
        nickname: '제로초',
    },
    createdAt: new Date(),
    content: '더미 댓글 입니다.',
};

export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';

export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';

export const LOAD_IMAGES_POSTS_REQUEST = 'LOAD_IMAGES_POSTS_REQUEST';
export const LOAD_IMAGES_POSTS_SUCCESS = 'LOAD_IMAGES_POSTS_SUCCESS';
export const LOAD_IMAGES_POSTS_FAILURE = 'LOAD_IMAGES_POSTS_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';

export const RETWEET_REQUEST = 'RETWEET_REQUEST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST: {
            return {
                ...state,
                isAddingPost: true,
            };
        }
        case ADD_POST_SUCCESS: {
            return {
                ...state,
                isAddingPost: false,
                postAdded: true,
                mainPosts: [dummyPost, ...state.mainPosts], // 더미 포스트가 기존 포스터 앞에 들어감
            };
        }
        case ADD_POST_FAILURE: {
            return {
                ...state,
                isAddingPost: false,
                addPostError: action.error, // 포스트 업로드 실패 사유
            };
        }
        case ADD_COMMENT_REQUEST: {
            return {
                ...state,
                isAddingComment: true,
            };
        }
        case ADD_COMMENT_SUCCESS: {
            const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
            // 성공에 대한 action
            const post = state.mainPosts[postIndex];
            const Comments = [...post.Comments, dummyComment];
            const mainPosts = [...state.mainPosts]; // 모든 것은 불변성때문임.
            mainPosts[postIndex] = { ...post, Comments };
            return {
                ...state,
                isAddingComment: false,
                mainPosts,
                commentAdded: true,
                // dummyComment,
            };
        }
        case ADD_COMMENT_FAILURE: {
            return {
                ...state,
                commentAdded: false,
                addCommentError: action.error,
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
