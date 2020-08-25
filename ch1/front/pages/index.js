import React, { useEffect, useState } from 'react'; // next에선 원래 안써도 됨
import { useDispatch, useSelector } from 'react-redux';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS } from '../reducers/user';

// const dummy = { 리덕스 state가 가지고 있으므로 필요 없음.
//     isLoggedIn: true,
//     imagePaths: [],
//     mainPosts: [
//         {
//             User: {
//                 id: 1,
//                 nickname: '제로초',
//             },
//             content: '첫 번째 게시글',
//             img: '',
//         },
//     ],
// };

const Home = () => {
    // hooks
    const dispatch = useDispatch();

    // useState가 useSelector로 바뀌었다 생각하면 되고, setState가 dispatch라 보면 됨.
    const { isLoggedIn, me } = useSelector((state) => state.user); // 첫 state는 전체 state 안에는 user와 isloggedin이 들어있음
    const { mainPosts } = useSelector((state) => state.post);
    console.log(isLoggedIn, me);

    return (
        // user도 훅스로 가져올 수 있음
        <>
            <div>
                {me ? <div>로그인 했습니다 : {me.nickname}</div> : <div>로그아웃 했습니다.</div>}
                {isLoggedIn && <PostForm />}
                {mainPosts.map((c) => {
                    return <PostCard key={c} post={c} />;
                })}
            </div>
        </>
    );
};

export default Home;

// useEffect(async () => {
//     dispatch({
//         type: LOG_IN_REQUEST,
//     });
//     await axios.post('/login');
//     dispatch({
//         type: LOG_IN_SUCCESS,
//     }); // 이런식으로 짜도 됨. 그러나 로그인이 중복이 되어 안됨.

//로그인 로그아웃 그냥 테스트용
// dispatch({
//     type: 'HELLO_SAGA',
// });
// dispatch({
//     type: 'HELLO_SAGA',
// });
// dispatch({
//     type: 'HELLO_SAGA',
// });

// 3번 dispatch하면 3번 될꺼라 생각하지만, helloSaga가 이미 중단 되었기 때문에
// 안됨.
// }, []);

//     dispatch({
//         type: LOG_OUT,
//     });
//     dispatch(loginAction);
//     // dispatch(logoutAction);
// }, []);
