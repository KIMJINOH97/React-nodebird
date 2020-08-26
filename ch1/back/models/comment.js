module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define(
        'Comment',
        {
            content: {
                type: DataTypes.TEXT, // 긴 글 일 수 있기 때문.
                allowNull: false,
            },
        },
        {
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        }
    );
    Comment.associate = (db) => {
        db.Comment.belongsTo(db.Post);
        db.Comment.belongsTo(db.User);
    };
};
