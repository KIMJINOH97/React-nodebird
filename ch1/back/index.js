const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const db = require('./models');
const app = express();
const userAPIRouter = require('./routers/user');
const postAPIRouter = require('./routers/post');
const postsAPIRouter = require('./routers/posts');

db.sequelize.sync();

// API는 다른 서비사그 내 서비스의 기능을 실행 할 수 있게 열어둔 창구
// ex) front -> react  back -> node
app.use(morgan('dev')); // 기록을 남겨줌.
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // form으로 온 data처리
app.use(cors()); // 다른서버에서 요청이 됨. cors 미들웨어를 장착해야 된다.

app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);

app.listen(3065, () => {
    console.log('server is running on localhost:8080');
});
