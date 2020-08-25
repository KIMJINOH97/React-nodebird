import React, { useCallback, useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST } from '../reducers/post';

// const dummy = {
//     isLoggedIn: true,
//     imagePaths: [],
//     mainPosts: [
//         {
//             User: {
//                 id: 1,
//                 nickname: '제로초',
//             },
//             content: '첫 번째 게시글',
//             img: '',
//         },
//     ],
// };

const PostForm = () => {
    const { imagePath, isAddingPost, postAdded } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    useEffect(() => {
        setText('');
    }, [postAdded === true]); // 포스트 업로드 되면 text안 값 비워줌.

    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);

    const onSubmitForm = useCallback((e) => {
        e.preventDefault; // 페이지 안 넘어가게끔 해줌
        console.log('post 요청했어!!');
        dispatch({
            type: ADD_POST_REQUEST,
            data: {
                text,
            },
        });
    }, []);

    return (
        // 이미지 업로드 해야하기 때문에 encType은 multipart임
        // style넣을 때는 객체 형식으로 {{ 넣어야함 }}
        <Form encType="multipart/form-data" style={{ margin: '10px 0px 20px' }} onFinish={onSubmitForm}>
            <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 잇었나요" value={text} onChange={onChangeText} />
            <div>
                <Button>이미지 업로드</Button>
                <Button type="primary" style={{ float: 'right' }} htmlType="submit" loading={isAddingPost}>
                    짹짹쨱
                </Button>
            </div>
            <div>
                {imagePath.map((v, i) => {
                    // 반복문
                    return (
                        <div key={v} style={{ display: 'inline-block' }}>
                            <img src={`http://localhost:3000/ ${v}`} style={{ width: '200px' }} alt={v} />
                            <div>
                                <Button>제거</Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Form>
    );
};
export default PostForm;
