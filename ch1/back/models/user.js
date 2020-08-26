module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        // 테이블명이 자동으로  users로 바뀜 대문자를 쓰면
        'User',
        {
            nickname: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            userId: {
                type: DataTypes.STRING(20),
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
        }
    );

    User.associate = (db) => {
        db.User.hasMany(db.Post, { as: 'Post' }); // 사람 한 명이 여러 게시글을 쓸 수 있다. as도 중요하다. 값을 가져올 때 참고 하므로
        db.User.hasMany(db.Comment); // 사람 한 명이 여러 댓글을 쓸 수 있다.
        db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' }); // 좋아요한 사람들 목록을 가지고 싶다. 하면 as를 따라 가져옴
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers' });
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings' });
    };

    return User;
};

// const user = {
//     id: 1,
//     nickname: 'zerocho',
//     Liked: [{ 게시글 }, { 게시글2 }, { 게시글3 }],
//     Followers: [{ 사용자1 }, { 사용자2 }, { 사용자3 }],
//     Posts: [{게시글1}, {게시글2}, {게시글3}],
// };
