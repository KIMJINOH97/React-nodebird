import React from 'react';
import Link from 'next/link';
import { Menu, Input, Button, Row, Col, Card, Avatar, Form } from 'antd';
import Proptypes from 'prop-types';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const dummy = {
    // 이 데이터를 통해 front end 는 back end가 완성되지 않아도 코드를 확인 할 수 있다.
    nickname: '제로초',
    Post: [],
    Following: [],
    Followers: [],
    isLoggedIn: false,
};

const AppLayout = ({ children }) => {
    return (
        // link 안 a테그 넣어줘야함 , gutter는 Row간의 간격
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link href="/">
                        <a>Nodebird</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="profile">
                    <Link href="/profile">
                        <a>Profile</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
                </Menu.Item>
            </Menu>
            <Link href="/signup">
                <a>
                    <Button>회원가입</Button>
                </a>
            </Link>
            <Row gutter={10}>
                {/*얘네들 간의 간격 벌려줌*/}
                <Col xs={24} md={6}>
                    {dummy.isLoggedIn ? ( //3항 연산자 로그인 하면 폼 보여주고 아니면 밑에꺼
                        <UserProfile />
                    ) : (
                        <LoginForm></LoginForm>
                    )}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>

                <Col xs={24} md={6}></Col>
            </Row>
        </div>
    ); // xs: 모바일, sm 작은 화면, md 중간화면, lg 큰 화면 24gird 시스템임. 반응형 디자인 할 때!
    // 어느정도 커지면 md 적용 더 커지면 lg ... 등
};

AppLayout.proptypes = {
    children: Proptypes.node.isRequired,
};
export default AppLayout;
