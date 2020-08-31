const express = require('express');
const db = require('../models');

const router = express.Router();

router.get(':/tag', async (req, res, next) => {
    // 테그가 한글도 되는데 한글 치면 이상하게 나옴(uri컴포넌트로 바뀜)
    try {
        const posts = await db.Post.findAll({
            // hashtag가 포함된 게시글 모두 찾음
            include: [
                {
                    model: db.Hashtag,
                    where: { name: decodeURIComponent(req.params.name) },
                },
                {
                    model: db.User,
                    attributes: ['id', 'nickname'],
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
