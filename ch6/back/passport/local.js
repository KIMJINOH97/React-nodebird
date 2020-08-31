const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const db = require('../models');

module.exports = () => {
    passport.use(
        new LocalStrategy(
            {
                usernameField: 'userId',
                passwordField: 'password',
            },
            async (userId, password, done) => {
                // 여기서 userId 를 id랑 쓰면 다름! db에서의 id, userId가 다르기 때문
                try {
                    const user = await db.User.findOne({ where: { userId } });
                    if (!user) {
                        return done(null, false, { reason: '존재하지 않는 사용자입니다.' }); // 서버쪽에서 로그인 프로세스를 종료해야할 때 3번째 인자를 쓴다.
                    }
                    const result = await bcrypt.compare(password, user.password);
                    if (result) {
                        return done(null, user);
                    }
                    return done(null, false, { reason: '비밀번호가 틀립니다.' });
                } catch (e) {
                    console.error(e);
                    return done(e);
                }
            }
            // 프론트에서 req.body.id 등 주는데 그것을 id로 받겠다는 뜻임.
        )
    );
};

// 프론트에서 서버로는 cookie만 보낸다. (asdfgh) 같은 쿠키
// 서버가 쿠키파서, 익스프레스 세션으로 쿠키 검사 후 id:3 발견
// id:3이 deserializeUser에 들어감
// req.user로 사용자 정보가 들어감

// 요청 보낼 때 마다 deserializeUser가 실행됨.
// 실무에서는 deserializeUser 결과를 캐싱함.
