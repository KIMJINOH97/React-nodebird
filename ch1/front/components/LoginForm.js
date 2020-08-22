import React, { useState, useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import { useInput } from '../pages/signup';

const LoginForm = () => {
    const [id, onChangeId] = useInput(''); // signup의 커스텀 훅 재사용
    const [password, onChangePassword] = useInput('');
    const onSubmitForm = useCallback((e) => {
        // 자식 컴포넌트로 넣어주는 것은 무조건 useCallback으로 감싸준다.
        e.preventDefault;
        console.log({
            id,
            password,
        });
    });

    return (
        <Form style={{ padding: 10 }} onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <Input name="user-id" value={id} required onChange={onChangeId}></Input>
            </div>
            <div>
                <label htmlFor="user-password">패스워드</label>
                <Input name="user-password" value={password} required onChange={onChangePassword} type="password"></Input>
            </div>
            <div style={{ marginTop: '10px' }}>
                <Button type="primary" htmlType="submit" loading={false}>
                    로그인
                </Button>
                <Link href="/signup">
                    <a>
                        <Button>회원가입</Button>
                    </a>
                </Link>
            </div>
        </Form>
    );
};

export default LoginForm;
