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
            order: [['createdAt', 'DESC']], // DESC는 내림차순, ASC는 오름차순 왜 이차원이냐,[[], []] 1순위, 2순위 가능 하기때문
        }); // 모든 것을 찾을 때, 다 가져오는데 작성자도 가져옴
        res.json(posts);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;
