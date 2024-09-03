import { motion } from "framer-motion";
import PropTypes from "prop-types";
import imgDefault from "@/assets/icons/logo/logo-sem-fundo.png";
import imgAuthor from "@/assets/images/PARCEIROS/logo-parceiro.png";

const defaultImage = imgDefault;

const ArticleCardSection = ({ i, el }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", options);
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    }
    return text;
  };

  const formattedDate = formatDate(el.date_create);
  const truncatedDescription = truncateText(el.description, 150); // Limite de 100 caracteres

  return (
    <motion.div
      key={i}
      exit={{ opacity: 0, y: 20 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative inline-block overflow-hidden h-max shadow-sm transition-colors ease-linear duration-200 p-3 border rounded-lg hover:border-b-[1px] hover:bg-gray-300 hover:shadow-md hover:border-gray-300"
    >
      <a
        href={el.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
        aria-label={`Leia o artigo completo: ${el.title}`}
      >
        <div className="h-48 w-full relative overflow-hidden flex justify-center items-center">
          <img
            src={el.image || defaultImage}
            alt="Article Image"
            className="object-cover w-full h-full rounded-[4px]  transition-transform ease-linear duration-200"
          />
          <div className="absolute z-10 left-2 bottom-2 inline-block w-max border bg-[rgb(60_41_122)] px-2 py-1 border-[rgb(60_41_122)] rounded-sm">
            <p className="text-xs font-bold text-gray-200 capitalize">
              {el.theme}
            </p>
          </div>
        </div>
        <div className="h-max w-full flex flex-col justify-start items-start pt-2">
          <h2 className="text-gray-800 font-bold font-mono sm:text-xl md:text-xl text-start ">
            {el.title}
          </h2>
          <p
            title={el.description}
            className="text-gray-700 font-light text-base overflow-hidden"
          >
            {truncatedDescription}
          </p>
          <div className="mt-4 text-gray-700 text-sm flex items-center">
            <img
              src={imgAuthor || defaultImage}
              alt="Author"
              className="w-11 h-10 rounded-2xl mr-2 object-fill object-center"
            />
            <div className="flex flex-col">
              <span className="text-gray-700 font-bold font-mono first-letter:uppercase">
                {el.author}
              </span>
              <time
                className="text-gray-700 font-light text-sm"
                dateTime={el.date_create}
              >
                {formattedDate}
              </time>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

function ArticlesSection({ articles, loading, error }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3   bg-transparent">
      {loading && (
        <div className="col-span-full flex items-center justify-center my-2">
          <div className="flex gap-2">
            <div className="w-4 h-4 rounded-full bg-[#8419c5] animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-[#8419c5] animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-[#8419c5] animate-bounce [animation-delay:-.5s]"></div>
          </div>
        </div>
      )}
      {error && (
        <div className="col-span-full flex items-center justify-start mb-2">
          <p className="text-xl font-semibold text-gray-800">{error}</p>
        </div>
      )}
      {!loading &&
        !error &&
        articles.map((el, i) => <ArticleCardSection key={i} el={el} i={i} />)}
    </div>
  );
}

ArticlesSection.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      image: PropTypes.string,
      description: PropTypes.string.isRequired,
      theme: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      imgAuthor: PropTypes.string.isRequired,
      date_create: PropTypes.string.isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

ArticleCardSection.propTypes = {
  i: PropTypes.number.isRequired,
  el: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    imgAuthor: PropTypes.string,
    theme: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string.isRequired,
    date_create: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticlesSection;
