const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User'); // Importa o modelo User

const Article = sequelize.define('Article', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  theme: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Relacionamento: Um artigo pertence a um usuário
Article.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Article, { foreignKey: 'userId' });

module.exports = Article;
