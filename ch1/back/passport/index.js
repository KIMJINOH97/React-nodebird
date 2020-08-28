const passport = require('passport');
const db = require('../models');
const local = require('./local');

module.exports = () => {
    passport.serializeUser((user, done) => {
        // 서버쪽에 [{id: 3, cookie: 'sdfja'}] 있으면 front에 쿠키를 주고 id:3과 연결되어 있는걸 알아냄.
        return done(null, user.id);
    });
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await db.User.findOne({
                where: { id },
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
            });
            done(null, user); // req.user
        } catch (e) {
            console.error(e);
            return done(e);
        }
    });
    local();
};
