const express = require('express');
const { Post, Hashtag, User } = require('../models');

const router = express.Router();

router.post('/', async (req, res, next) => {
    // POST / api/post
    console.log('프론트에서 받은', req.user);
    try {
        const hashtags = req.body.content.match(/#[^\s]+/g); // 정규표현식 regexr.com 에서 확인가능
        const post = await Post.create({
            content: req.body.content, // ex) '제로초 파이팅 #구독 #좋아요 눌러주세요'
            UserId: req.user.id,
        });
        if (hashtags) {
            const result = await Promise.all(
                hashtags.map((tag) =>
                    Hashtag.findOrCreate({
                        where: { name: tag.slice(1).toLowerCase() }, // slice는 #빼는것, tolower은 소문자로 만드는것
                    })
                )
            );
            console.log(result);
            await post.addHashtags(result.map((r) => r[0])); // associate들이 알아서 addHashtags등 이런식으로 만들어준다.
        }
        console.log('서버쪽 post', post);
        // const User = await post.getUser(); 이 방법도 있음.
        // post.User = User;
        // res.json(post);
        const fullpost = await Post.findOne({
            // 새 포스트 가져옴?
            where: { id: post.id },
            include: [
                {
                    model: User,
                },
            ],
        });
        console.log('full post', fullpost);
        res.status(201).json(fullpost);
    } catch (e) {
        console.log('에러났으면 시발 말을 해');
        console.error(e);
        next(e);
    }
});
router.post('/images', (req, res) => {});

module.exports = router;
