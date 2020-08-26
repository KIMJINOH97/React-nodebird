module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(
        'Post',
        {
            content: {
                type: DataTypes.TEXT, // 매우 긴 글 글자 수를 잘 모를때
                allowNull: false,
            },
        },
        {
            charset: 'utf8mb4', // 한글에다가 이모티콘 까지 추가하는 기능
            collate: 'utf8mb4_general_ci',
        }
    );
    Post.associate = (db) => {
        db.Post.belongsTo(db.User); // 게시글은 User에 속해있다.
        db.Post.hasMany(db.Comment); // 게시글은 여러 댓글을 가지고 있다.
        db.Post.hasMany(db.Image); // 게시글은 여러 사진을 가지고 있다
        db.Post.belongsTo(db.Post, { through: 'Retweet' });
        db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' }); // 해쉬태그와 다대다 관계이다.
        db.Post.belongsToMany(db.User, { through: 'Like', as: 'Liker' }); // 다대다 관계
    };
    return Post;
};
