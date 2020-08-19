import React from 'react';
import Link from 'next/link';
import { Menu, Input, Button } from 'antd';

const AppLayout = ({ children }) => {
    return (
        // link 안 a테그 넣어줘야함
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
            {children}
        </div>
    );
};

export default AppLayout;
