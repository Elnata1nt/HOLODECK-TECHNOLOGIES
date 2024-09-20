import { DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';
import User from './User.js'; 

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

export default Article;
