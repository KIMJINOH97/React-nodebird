import React from 'react';
import { Form, Input, Button, Card, List } from 'antd';
import Icon from '@ant-design/icons';
import NickNameEditForm from '../components/NickNameEditForm';
const Profile = () => {
    return (
        // 폼들은 state가 있기 때문에 따로 분리하는게 좋음
        <div>
            <NickNameEditForm />
            <List
                style={{ marginBottom: '20px' }}
                grid={{ gutter: 4, xs: 2, md: 3 }}
                size="small"
                header={<div>팔로워 목록</div>}
                loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
                bordered
                dataSource={['제로초', '바보', '노드']}
                renderItem={(
                    item //배열 안에 jsx쓸 땐 key를 넣어야함
                ) => (
                    <List.Item style={{ marginTop: '20px' }}>
                        <Card actions={[<Icon key="stop" type="stop" />]}>
                            <Card.Meta description={item} />
                        </Card>
                    </List.Item>
                )}
            />
            <List
                style={{ marginBottom: '20px' }}
                grid={{ gutter: 4, xs: 2, md: 3 }}
                size="small"
                header={<div>팔로잉 목록</div>}
                loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
                bordered
                dataSource={['제로초', '바보', '노드']}
                renderItem={(item) => (
                    <List.Item style={{ marginTop: '20px' }}>
                        <Card actions={[<Icon key="fstop" type="stop" />]}>
                            <Card.Meta description={item} />
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default Profile;
