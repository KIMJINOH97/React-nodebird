import React from 'react';
import { Button, Card, Avatar, Popover } from 'antd';
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const PostCard = ({ post }) => {
    return (
        <Card
            key={+post.createdAt}
            cover={post.img && <img alt="example" src={post.img} />}
            actions={[
                <RetweetOutlined />,
                <HeartTwoTone />,
                <MessageOutlined />,
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
            <Card.Meta avatar={<Avatar>{post.User.nickname[0]}</Avatar>} title={post.User.nickname} description={post.content}></Card.Meta>
        </Card>
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
