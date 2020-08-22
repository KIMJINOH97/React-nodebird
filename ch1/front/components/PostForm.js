import React from 'react';
import { Form, Input, Button } from 'antd';

const dummy = {
    isLoggedIn: true,
    imagePaths: [],
    mainPosts: [
        {
            User: {
                id: 1,
                nickname: '제로초',
            },
            content: '첫 번째 게시글',
            img: '',
        },
    ],
};

const PostForm = () => {
    return (
        // 이미지 업로드 해야하기 때문에 encType은 multipart임
        // style넣을 때는 객체 형식으로 {{ 넣어야함 }}
        <Form encType="multipart/form-data" style={{ margin: '10px 0px 20px' }}>
            <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 잇었나요" />
            <div>
                <Button>이미지 업로드</Button>
                <Button type="primary" style={{ float: 'right' }} htmlType="submit">
                    짹짹쨱
                </Button>
            </div>
            <div>
                {dummy.imagePaths.map((v, i) => {
                    // 반복문
                    return (
                        <div key={v} style={{ display: 'inline-block' }}>
                            <img src={'http://localhost:3000/' + v} style={{ width: '200px' }} alt={v} />
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
