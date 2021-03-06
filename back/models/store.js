module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define(
    "Store",
    {
      storename: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT, // 매우 긴 글
        allowNull: false
      },
      kindname: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      img: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      rate: {
        type: DataTypes.FLOAT
      }
    },
    {
      charset: "utf8", //  한글+이모티콘
      collate: "utf8_general_ci",
      timestamps: true
    }
  );
  Store.associate = db => {
    db.Store.hasMany(db.Post); // 테이블에 UserId 컬럼이 생겨요
    db.Store.hasMany(db.Image);
    //db.Post.hasMany(db.Image);
    //db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" });
  };
  return Store;
};
