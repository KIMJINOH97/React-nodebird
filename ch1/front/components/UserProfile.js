import React from 'react';
import { Avatar, Card } from 'antd';

const dummy = {
    // 이 데이터를 통해 front end 는 back end가 완성되지 않아도 코드를 확인 할 수 있다.
    nickname: '제로초',
    Post: [],
    Following: [],
    Followers: [],
    isLoggedIn: false,
};

const UserProfile = () => {
    return (
        <Card
            actions={[
                <div key="twit">
                    짹짹
                    <br />
                    {dummy.Post.length}
                </div>,
                <div key="following">
                    팔로잉
                    <br />
                    {dummy.Post.length}
                </div>,
                <div key="follower">
                    팔로우
                    <br />
                    {dummy.Post.length}
                </div>,
            ]}
        >
            <Card.Meta avatar={<Avatar>{dummy.nickname[0]}</Avatar>} title={dummy.nickname} />
        </Card>
    );
};

export default UserProfile;
