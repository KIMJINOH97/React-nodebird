import React, { useState, useCallback } from 'react';
import { Button, Card, Avatar, Popover, Input, Form, List, Comment } from 'antd';
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';

const PostCard = ({ post }) => {
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const [commentText, setCommentText] = useState('');
    const { me } = useSelector((state) => state.user);
    const { isAddingComment } = useSelector((state) => state.post);
    const dispatch = useDispatch();

    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);
    });

    const onSubmitComment = useCallback(
        (e) => {
            e.preventDefault;
            if (!me) {
                return alert('로그인이 필요합니다.');
            }

            dispatch({
                type: ADD_COMMENT_REQUEST,
                data: {
                    postId: post.id,
                },
            });
            // useCallback에서 state를 넣어주면 상속에 넣어줘야함
        },
        [me && me.id]
    ); // 객체의 값을 넣우주도록 비교때메 에러나기가 쉬움.
    // 처음의 me를 기억해 null상태를 기억함.

    const onChangeCommentText = useCallback((e) => {
        e.preventDefault;
        setCommentText(e.target.value);
    }, []);

    return (
        <>
            <Card
                key={+post.createdAt}
                cover={post.img && <img alt="example" src={post.img} />}
                actions={[
                    <RetweetOutlined />,
                    <HeartTwoTone />,
                    <MessageOutlined onClick={onToggleComment} />,
                    <Popover
                        key="ellipsis"
                        content={
                            <Button.Group>
                                <Button>신고</Button>
                                <Button>수정</Button>
                                <Button danger>삭제</Button>
                            </Button.Group>
                        }
                    >
                        <EllipsisOutlined />
                    </Popover>,
                ]}
                extra={<Button>팔로우</Button>}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={post.content}
                ></Card.Meta>
            </Card>
            {commentFormOpened && (
                <>
                    <Form onFinish={onSubmitComment} style={{ paddingTop: '10px' }}>
                        <Form.Item>
                            <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" loading={isAddingComment}>
                            삐약
                        </Button>
                    </Form>
                    <List
                        header={`${post.Comments ? post.Comments.length : 0} 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comment || []}
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname}</Avatar>}
                                    content={item.content}
                                    datetime={item.createdAt}
                                />
                            </li>
                        )}
                    />
                </>
            )}
        </>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        User: PropTypes.object,
        content: PropTypes.string,
        img: PropTypes.string,
        createdAt: PropTypes.object,
    }),
};
export default PostCard;
