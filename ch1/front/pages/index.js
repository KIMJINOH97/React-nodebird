import React, { useEffect, useState } from 'react'; // next에선 원래 안써도 됨
import { useDispatch, useSelector } from 'react-redux';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { LOG_IN, LOG_OUT, loginAction, logoutAction } from '../reducers/user';

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
    const { isLoggedIn, user } = useSelector((state) => state.user); // 첫 state는 전체 state 안에는 user와 isloggedin이 들어있음
    const { mainPosts } = useSelector((state) => state.post);
    console.log(isLoggedIn, user);
    // useEffect(() => {
    //     // 로그인 로그아웃 그냥 테스트용
    //     dispatch({
    //         type: LOG_IN,
    //         data: {
    //             nickname: '제로초',
    //         },
    //     });
    //     dispatch({
    //         type: LOG_OUT,
    //     });
    //     dispatch(loginAction);
    //     // dispatch(logoutAction);
    // }, []);

    return (
        // user도 훅스로 가져올 수 있음
        <>
            <div>
                {user ? <div>로그인 했습니다 : {user.nickname}</div> : <div>로그아웃 했습니다.</div>}
                {isLoggedIn && <PostForm />}
                {mainPosts.map((c) => {
                    return <PostCard key={c} post={c} />;
                })}
            </div>
        </>
    );
};

export default Home;
