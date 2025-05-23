'use strict';
const {
  Model
} = require('sequelize');
const {v4: uuidv4} = require("uuid")

module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      comment.belongsTo(models.user,{
        foreignKey:"userId"
      })
      comment.belongsTo(models.post,{
        foreignKey:"postId"
        })
    }
  }
  comment.init({
     id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: uuidv4
    },
    content_comment_image: DataTypes.TEXT,
    content_comment_text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};