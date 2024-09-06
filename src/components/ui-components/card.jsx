import React from "react";
import { motion } from "framer-motion";

const CardComponent = ({ title, content, linkText, linkHref, imageSrc }) => {
  return (
    <motion.div
      className="bg-black p-6 shadow-md flex flex-col"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }} // Animação ao passar o mouse
    >
      {imageSrc && (
        <motion.img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      {title && (
        <h2 className="text-2xl text-center font-bold mb-4">{title}</h2>
      )}
      {content && (
        <p className="text-gray-500 text-base leading-relaxed mb-4">
          {content}
        </p>
      )}
      {linkText && linkHref && (
        <div className="flex justify-center mt-auto">
          <a href={linkHref} className="text-secondary">
            {linkText}
          </a>
        </div>
      )}
    </motion.div>
  );
};

export default CardComponent;
