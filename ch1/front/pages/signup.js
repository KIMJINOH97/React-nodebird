import React, { useState, useCallback, memo, useEffect } from 'react'; // useCallback으로 evnetlistener들을 감싸준다
import { Button, Form, Input, Checkbox } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { SIGN_UP_REQUEST } from '../reducers/user';

export const useInput = (initValue = null) => {
    // 커스텀 훅!
    const [value, setter] = useState(initValue);
    const handler = useCallback((e) => {
        setter(e.target.value);
    });
    return [value, handler];
};

const TextInput = memo(({ value, onChange }) => {
    return <Input name="user-id" value={value} required onChange={onChange} />;
}); // 지나친 최적화긴 함.

const TexInput = memo(({ value, onChange }) => {
    // proptypes 확인 차
    return <div>{value}</div>;
}); // 프로토 타입 확인 차

TexInput.propTypes = {
    value: PropTypes.string,
};

const Signup = () => {
    // 훅스 사용 실무 input은 항상 value랑 onchange가 짝을 이뤄야한다.
    const [id, setId] = useState('');
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    const { isSigningUp, me } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
        // 로그인 누르면 작동
        if (me) {
            alert('로그인 했으니 메인페이지로 이동합니다.');
            Router.push('/');
        }
    }, [me && me.id]);

    const onSubmit = useCallback(
        (e) => {
            console.log('Submit!!!');
            e.preventDefault;
            if (password !== passwordCheck) {
                return setPasswordError(true);
            }
            if (!term) {
                alert('약관에 동의 하셔야 합니다');
                return setTermError(true);
            }
            dispatch({
                type: SIGN_UP_REQUEST,
                data: {
                    id,
                    password,
                    nick,
                },
            });
            console.log(id, password, nick);
        },
        [password, passwordCheck, term]
    ); // useCallback을 쓰면 dependancy들도 넣어 줘야한다. 어떤 것들이 쓰이는 지

    // antd component안에 들어가는 함수들은 useCallback으로 감싸줘야한다.
    // why? 의도치 않은 rerendering이 되기 때문에 >> props로 넘겨주는 함수는 usecallback으로 감싸준다. 통째로 다 재 실행 되기 때문에 막기 위해
    // 함수도 객체기 때문에 새로 생성한 함수는 이전 객체와 다른 객체가 되기 때문에 의도치 않은 리렌더링이 된다.
    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    });

    const onChangeNick = useCallback((e) => {
        setNick(e.target.value);
    });

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    });

    const onChangePasswordCheck = useCallback(
        (e) => {
            setPasswordError(e.target.value !== password);
            setPasswordCheck(e.target.value);
        },
        [password]
    );
    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked);
    });

    //const [id, onChangeId] = useInput('');

    return (
        // onSubmit > onFinish로 변경됨 antd 문법
        // 폼같은 경우에는 react state 쓰는게 좋음.
        <>
            <Form onFinish={onSubmit} style={{ padding: 10 }}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    <TextInput name="user-id" value={id} onChange={onChangeId} />
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
                    <Button type="primary" htmlType="submit" loading={isSigningUp}>
                        가입하기
                    </Button>
                </div>
            </Form>
        </>
    ); //파란색 버튼은 type = primary  html 쓰고 싶으면 htmlType="submit" 써야함 >> button type = "submit"
};

export default Signup;
