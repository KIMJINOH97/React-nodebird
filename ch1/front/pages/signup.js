import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import { Button, Form, Input, Checkbox } from 'antd';

import AppLayout from '../components/AppLayout';

const Signup = () => {
    // 훅스 사용 실무 input은 항상 value랑 onchange가 짝을 이뤄야한다.
    const [id, setId] = useState('');
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    const onSubmit = useCallback((e) => {
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return termError(true);
        }
        console.log({
            id,
            nick,
            password,
            passwordCheck,
            term,
        });
    }, deps[(password, passwordCheck, term)]);
    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, deps[password]);
    const onChangeNick = (e) => {
        setNick(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onChangePasswordCheck = (e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    };
    const onChangeTerm = (e) => {
        setTermError(false);
        setTerm(e.target.checked);
    };
    return (
        // onSubmit > onFinish로 변경됨 antd 문법
        <>
            <Head>
                <title>Node bird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js" />
            </Head>
            <AppLayout>
                <Form onFinish={onSubmit} style={{ padding: 10 }}>
                    <div>
                        <label htmlFor="user-id">아이디</label>
                        <br />
                        <Input name="user-id" value={id} required onChange={onChangeId} />
                    </div>
                    <div>
                        <label htmlFor="user-nick">닉네임</label>
                        <br />
                        <Input name="user-nick" value={nick} required onChange={onChangeNick} />
                    </div>
                    <div>
                        <label htmlFor="user-password">비밀번호</label>
                        <br />
                        <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
                    </div>
                    <div>
                        <label htmlFor="user-password-check">비밀번호 확인</label>
                        <br />
                        <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} />
                        {passwordError && <div style={{ color: 'red' }}> 비밀번호가 일치하지 않습니다. </div>}
                    </div>
                    <div>
                        <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
                            말을 잘 듣자 동의합니다.
                        </Checkbox>
                        {termError && <div style={{ color: 'red' }}> 약관에 동의하셔야 합니다.</div>}
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <Button type="primary" htmlType="submit">
                            가입하기
                        </Button>
                    </div>
                </Form>
            </AppLayout>
        </>
    ); //파란색 버튼은 type = primary  html 쓰고 싶으면 htmlType="submit" 써야함 >> button type = "submit"
};

export default Signup;
