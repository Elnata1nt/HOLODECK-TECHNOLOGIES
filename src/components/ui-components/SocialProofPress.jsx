// src/components/ui-components/SocialProofPress.jsx

import React from "react";
import { motion } from "framer-motion";

const SocialProofPress = ({ quotes }) => {
  return (
    <section className="bg-black py-8 ">
      <h2 className="text-2xl font-bold text-center text-primary mb-6">
        O Que Estão Dizendo Sobre Nós
      </h2>
      <div className="overflow-hidden">
        <motion.div
          className="flex space-x-8 animate-marquee"
          initial={{ x: "1000%" }}
          animate={{ x: "-1000%" }}
          transition={{ duration: 600000, repeat: Infinity, ease: "linear" }}
        >
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex-none"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-base italic text-gray-600 mb-4">
                "{quote.text}"
              </p>
              <h3 className="text-lg font-semibold text-primary">
                — {quote.author}
              </h3>
              <p className="text-sm text-gray-500">{quote.source}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
    </section>
  );
};

export default SocialProofPress;
