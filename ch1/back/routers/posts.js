const express = require('express');
const router = express.Router();
const { Post, User } = require('../models');

router.get('/', async (req, res, next) => {
    // 게시글 가져오기 GET/api/posts
    try {
        const posts = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['id', 'nickname'],
                },
            ],
        }); // 모든 것을 찾을 때, 다 가져오는데 작성자도 가져옴
        res.json(posts);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;
