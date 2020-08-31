const express = require('express');
const next = require('next');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');

// express와 next연결 why? hashtag뒤에 적용해주려고 동적으로
const dev = process.env.NODE_ENV !== 'production'; // development만 고정말고
const prod = process.env.NODE_ENV === 'production';

const app = next({ dev: true });
const handle = app.getRequestHandler();
dotenv.config();

app.prepare().then(() => {
    const server = express();
    server.use(morgan('dev'));
    server.use(express.urlencoded({ extended: true }));
    server.use(cookieParser(process.env.COOKIE_SECRET));
    server.use(
        expressSession({
            resave: false,
            saveUninitialized: false,
            secret: process.env.COOKIE_SECRET,
            cookie: {
                httpOnly: true,
                secure: false,
            },
        })
    );

    server.get('/hashtag/:tag', (req, res) => {
        return app.render(req, res, '/hashtag', { tag: req.params.tag }); // app = next니깐 next로 응답 넣어주면 됨 hashtag페이지에 tag정보가 따라감
    });
    server.get('/user/:id', (req, res) => {
        return app.render(req, res, '/user', { id: req.params.id }); // id정보 따라감
    });

    server.get('*', (req, res) => {
        // 모든 요청을 받겠다.
        return handle(req, res); // handle은 next에서 오는 요청을 받는다.
        // 모든 요청을 next가 처리하면 동적인 요청을 처리할 수 없다.
    });

    server.listen(3060, () => {
        console.log('next+express running on port 3060');
    });
});
