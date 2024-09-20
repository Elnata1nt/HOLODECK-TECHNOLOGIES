import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

  const listArticles = async (req, res) => {
  try {
    const articles = await prisma.article.findMany({
      include: { user: true },
    });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

  const createArticle = async (req, res) => {
  try {
    const { title, content, theme, userId } = req.body;
    const article = await prisma.article.create({
      data: { title, content, theme, userId },
    });
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default { listArticles, createArticle };