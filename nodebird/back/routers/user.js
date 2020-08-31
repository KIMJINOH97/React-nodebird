const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../models');
const passport = require('passport');
const router = express.Router();
router.get('/', (req, res) => {
    if (!req.user) {
        return res.status(401).send('로그인이 필요합니다.');
    }
    const user = Object.assign({}, req.user.toJSON());
    delete user.password;
    return res.json(user); // 그대로 가져다줌
});
router.post('/', async (req, res, next) => {
    try {
        const exUser = await db.User.findOne({
            where: {
                userId: req.body.userId,
            },
        });
        if (exUser) {
            return res.status(403).send('이미 사용중인 아이디 입니다.');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        const newUser = await db.User.create({
            nickname: req.body.nickname,
            userId: req.body.userId,
            password: hashedPassword,
        });
        console.log(newUser);
        return res.status(200).json(newUser);
    } catch (e) {
        console.error(e);
        // 에러처리를 여기서 후에 프로트 넘김.
        return next(e);
    }
}); // POST/api/user 회원가입

router.get('/:id', async (req, res, next) => {
    try {
        const user = await db.User.findOne({
            where: { id: parseInt(req.params.id, 10) },
            include: [
                {
                    model: db.Post,
                    attributes: ['id'], // id만 가져옴 개수만 샐꺼기 때문
                },
                {
                    model: db.User, // 팔로잉 수 구하고싶을 때
                    as: 'Followings',
                    attributes: ['id'],
                },
                {
                    model: db.User,
                    as: 'Followers',
                    attributes: ['id'],
                },
            ],
            attributes: ['id', 'nickname'],
        });
        const jsonUser = user.toJSON(); // 팔로워나 팔로우 수만 알게끔 보안상 때문
        jsonUser.Posts = jsonUser.Posts ? jsonUser.Posts.length : 0;
        jsonUser.followings = jsonUser.followings ? jsonUser.followings.length : 0;
        jsonUser.followers = jsonUser.followers ? jsonUser.followers.length : 0;
        req.json(jsonUesr);
    } catch (e) {
        console.error(e);
        next(e);
    }
}); // 남의 정보 가져오는 것 ex) /:id => /3  이렇게 변형 될 수 있음. 와일드카드

router.get('/hashtag/:name'); // #좋아요 #유튜브 가능 문제점 > next불가능

router.post('/login', (req, res, next) => {
    // POST / api/user/login 패스포트 전략을 실행해야한다.
    passport.authenticate('local', (err, user, info) => {
        // done의 인자들을 빼옴 (서버에러, 사용자, 로직에러)
        console.log(err, user, info);
        if (err) {
            console.error(err);
            next(err); // next로 보냄
        }
        if (info) {
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr) => {
            // req.login을 할 때 시리얼라이즈 실행됨.
            if (loginErr) {
                return next(loginErr);
            }
            const fullUser = await db.User.findOne({
                where: { id: user.id },
                include: [
                    {
                        model: db.Post,
                        attributes: ['id'], // id만 가져옴 개수만 샐꺼기 때문
                    },
                    {
                        model: db.User, // 팔로잉 수 구하고싶을 때
                        as: 'Followings',
                        attributes: ['id'],
                    },
                    {
                        model: db.User,
                        as: 'Followers',
                        attributes: ['id'],
                    },
                ],
                attributes: ['id', 'nickname', 'userId'], // id, nickname, userId만 ! 비밀번호 빼고
            });
            console.log(fullUser);
            return res.json(fullUser); // 로그인 성공 login에 세션과 쿠키를 저장해줌. 사용자 정보를 보내줌.
        });
    })(req, res, next);
});
router.post('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('logout 성공');
});

router.get('/:id/follow', (req, res) => {});
router.post('/:id/follow', (req, res) => {});
router.delete('/:id/follow', (req, res) => {});
router.delete('/:id/follower', (req, res) => {});

router.get('/:id/posts', async (req, res, next) => {
    try {
        const posts = await db.Post.findAll({
            // 남 것을 불러옴 hashtag와 명확히 구분
            where: {
                UserId: parseInt(req.params.id, 10),
                RetweetId: null,
            },
            include: [
                {
                    model: db.User,
                    attributes: ['id', 'nickname'], // password 빼주고
                },
            ],
        });
        res.json(posts);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;
