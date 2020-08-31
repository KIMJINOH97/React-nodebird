import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import PostCard from '../components/PostCard';
import { LOAD_USER_POSTS_REQUEST } from '../reducers/post';
import { Card, Avatar } from 'antd';
import { LOAD_USER_REQUEST } from '../reducers/user';

const User = ({ id }) => {
    console.log(id);
    const dispatch = useDispatch();
    const { mainPosts } = useSelector((state) => state.post);
    const { userInfo } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch({
            type: LOAD_USER_REQUEST,
            data: id,
        });
        dispatch({
            type: LOAD_USER_POSTS_REQUEST,
            data: id,
        });
    }, []);
    return (
        // 남의 정보 알려주는 것.
        <div>
            {userInfo ? (
                <Card
                    actions={[
                        <div key="twit">
                            짹짹
                            <br />
                            {me.Posts.length}
                        </div>,
                        <div key="following">
                            팔로잉
                            <br />
                            {me.Followings.length}
                        </div>,
                        <div key="follower">
                            팔로우
                            <br />
                            {me.Followers.length}
                        </div>,
                    ]}
                >
                    <Card.meta avatar={<Avatar>{userInfo.nickname[0]}</Avatar>} title={userInfo.nickname} />
                </Card>
            ) : null}
            {mainPosts.map((c) => {
                <PostCard key={+c.createdAt} post={c}></PostCard>;
            })}
        </div>
    );
};

User.propTypes = {
    id: PropTypes.number.isRequired,
};

User.getInitialProps = async (context) => {
    // 서버에서도 프론트에서도 실행됨 젤 먼저 실행됨.
    console.log('User getInitialProps', context.query.id);
    return { id: parseInt(context.query.id, 10) }; // component props로 내려 보낼 수 있음숫자라 파싱
};

export default User;
