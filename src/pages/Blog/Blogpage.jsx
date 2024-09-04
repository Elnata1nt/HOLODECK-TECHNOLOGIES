import { useEffect, useState } from "react";
import ArticleMain from '@/components/Blog/ArticleMain';
import ArticlesSection from '@/components/Blog/ArticlesSection';
import FilterSection from '@/components/Blog/FilterSection';
import { newsArticles } from '@/components/blog/mockArticles';

// Esse cache salva muito, pois reduz o número de requisições do backend (temporário)
const cache = { news: newsArticles };

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("news");

  useEffect(() => {
    if (category) {
      if (cache[category]) {
        setArticles(cache[category]);
        setLoading(false);
      } else {
        setLoading(true);
        const filteredArticles = newsArticles.filter((article) => article.category === category);
        setArticles(filteredArticles);
        cache[category] = filteredArticles; // Armazena a resposta no cache
        setLoading(false);
      }
    }
  }, [category]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Seção de Destaque */}
      <ArticleMain />

      {/* Seção de Artigos Recentes */}
      <section className="container mx-auto px-3 lg:px-6 my-12">
        {/* Filtro dos Artigos */}
        <FilterSection setCategory={setCategory} setError={setError} />
        {/* Lista de Artigos */}
        <ArticlesSection articles={articles} loading={loading} error={error} />
      </section>
    </div>
  );
};

export default Blog;
