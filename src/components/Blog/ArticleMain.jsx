import { articlesMainList } from "./CategoriesAndArticles";
import PropTypes from 'prop-types';


const ArticleCard = ({ article, className }) => {
  return (
    <div className={`relative w-full h-64 overflow-hidden group ${className}`}>
      <a href={article.link} target="_blank" rel="noreferrer">
        {/* Imagem de Fundo */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={article.imgSrc}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-300 ease-linear group-hover:scale-105"
          />
        </div>

        {/* Sobreposição de Gradiente e Conteúdo */}
        <div className="absolute bottom-0 inset-x-0 z-10 p-4 text-white px-4 py-5">
          <div className="relative z-10 w-full flex flex-col justify-start">
            <div className="inline-block w-max border bg-[rgb(60_41_122)] px-2 py-1 border-[rgb(60_41_122)] rounded-sm">
              <p className="text-sm rounded-sm capitalize font-bold text-gray-200">
                {article.theme}
              </p>
            </div>
            <div className="w-full h-full flex justify-start items-start">
              <h1 className="text-xl sm:text-xl md:text-2xl font-bold mt-2 font-mono text-start">
                {article.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Gradiente */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-b"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 42%, rgba(0, 0, 0, 0.35) 58%, rgba(0, 0, 0, 0.7) 82%)",
          }}
        ></div>
      </a>
    </div>
  );
};

function ArticleMain() {
  return (
    <section className="w-full h-auto md:h-96 flex flex-wrap  md:flex-nowrap justify-center items-center bg-gray-700 dark:bg-dark-bg text-center overflow-hidden">
      {/* Artigo Principal */}
      <ArticleCard 
        article={articlesMainList[0]} 
        className="w-1/2  sm:w-[40%] md:w-1/3  md:h-full"
      />

      {/* Artigo Secundário */}
      <ArticleCard 
        article={articlesMainList[1]} 
        className="w-1/2  sm:w-[35%] md:w-1/3  md:h-full"
      />

      {/* Artigos Terciários */}
      {/* <ArticleCard 
        article={articlesMainList[1]} 
        className="hidden  sm:block sm:w-1/3 md:w-1/3  md:h-full"
      /> */}
      <div className="hidden  sm:block sm:w-[25%] md:w-1/3  md:h-full">
        <ArticleCard 
          article={articlesMainList[2]} 
          className="hidden sm:block  md:block lg:block xl:block h-64 md:h-1/2"
        />
        <ArticleCard 
          article={articlesMainList[3]} 
          className="h-64 lg:block xl:block md:block sm hidden md:h-1/2"
        />
      </div>
    </section>
  );
}


ArticleCard.propTypes = {
  article: PropTypes.shape({
    link: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
};

export default ArticleMain;