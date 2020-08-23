import React, { useCallback } from 'react';
import { Avatar, Card, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../reducers/user';
// const dummy = {
//     // 이 데이터를 통해 front end 는 back end가 완성되지 않아도 코드를 확인 할 수 있다.
//     nickname: '제로초',
//     Post: [],
//     Following: [],
//     Followers: [],
//     isLoggedIn: false,
// };

const UserProfile = () => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const onLogout = useCallback(() => {
        dispatch(logoutAction);
    }, []);
    console.log(user);
    return (
        <Card
            actions={[
                <div key="twit">
                    짹짹
                    <br />
                    {user.Post.length}
                </div>,
                <div key="following">
                    팔로잉
                    <br />
                    {user.Followings.length}
                </div>,
                <div key="follower">
                    팔로우
                    <br />
                    {user.Followers.length}
                </div>,
            ]}
        >
            <Card.Meta avatar={<Avatar>{user.nickname[0]}</Avatar>} title={user.nickname} />
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;
