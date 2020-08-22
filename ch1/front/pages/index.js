import React from 'react'; // next에선 원래 안써도 됨
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';

const dummy = {
    isLoggedIn: true,
    imagePaths: [],
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
};

const Home = () => {
    // hooks 문법
    return (
        <>
            <div>
                {dummy.isLoggedIn && <PostForm />}
                {dummy.mainPosts.map((c) => {
                    return <PostCard key={c} post={c} />;
                })}
            </div>
        </>
    );
};

export default Home;
