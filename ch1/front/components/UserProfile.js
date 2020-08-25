import React, { useCallback } from 'react';
import { Avatar, Card, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';
// const dummy = {
//     // 이 데이터를 통해 front end 는 back end가 완성되지 않아도 코드를 확인 할 수 있다.
//     nickname: '제로초',
//     Post: [],
//     Following: [],
//     Followers: [],
//     isLoggedIn: false,
// };

const UserProfile = () => {
    const { me } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const onLogout = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST,
        });
    }, []);
    console.log(me);
    return (
        <Card
            actions={[
                <div key="twit">
                    짹짹
                    <br />
                    {me.Post.length}
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
            <Card.Meta avatar={<Avatar>{me.nickname[0]}</Avatar>} title={me.nickname} />
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;
