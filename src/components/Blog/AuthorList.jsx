import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa'; // Ou qualquer ícone de autor que você prefira

function AuthorList({ authors, selectedAuthor, onSelectAuthor }) {
  return (
    <div className="flex flex-wrap gap-3 mb-4">
      {authors.map((author) => (
        <motion.button
          key={author.name}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
            selectedAuthor === author.name
              ? "bg-gray-600 text-white shadow-md"
              : "bg-[#3c297a] text-white shadow-sm hover:bg-[#3a2d7a]"
          }`}
          onClick={() => onSelectAuthor(author.name)}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <FaUser /> {/* Substitua por um ícone apropriado */}
          <span>{author.name}</span>
        </motion.button>
      ))}
    </div>
  );
}

AuthorList.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  selectedAuthor: PropTypes.string,
  onSelectAuthor: PropTypes.func.isRequired,
};

export default AuthorList;