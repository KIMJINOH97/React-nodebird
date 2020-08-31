const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
// 각각을 세션은 서버, 쿠키는 프론트에 보내줘야하는데 이런 과정을 거치기 매우힘듬
// 고로 passport를 쓴다.

const passport = require('passport');
const passportConfig = require('./passport');

dotenv.config();

const db = require('./models');
const app = express();
const userAPIRouter = require('./routers/user');
const postAPIRouter = require('./routers/post');
const postsAPIRouter = require('./routers/posts');
const hashtagAPIRouter = require('./routers/hashtag');

db.sequelize.sync();
passportConfig();

// API는 다른 서비사그 내 서비스의 기능을 실행 할 수 있게 열어둔 창구
// ex) front -> react  back -> node
app.use(morgan('dev')); // 기록을 남겨줌.
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // form으로 온 data처리
app.use(
    cors({
        origin: true, // 쿠키 받을 때 설정
        credentials: true,
    })
); // 다른서버에서 요청이 됨. cors 미들웨어를 장착해야 된다.
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET,
        cookie: {
            httpOnly: true,
            secure: false, // https 를 쓸 때,
        }, // 쿠키는 남아있어도 새로고침 하면 바뀜
        name: 'rnbck', // 쿠키이름 임의로 바꿈
    })
);

app.use(passport.initialize());
app.use(passport.session()); // express session뒤에 써야함.

app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);
app.use('/api/hashtag', hashtagAPIRouter);

app.listen(3065, () => {
    console.log('server is running on localhost:8080');
});
