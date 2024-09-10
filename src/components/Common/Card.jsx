import React from "react";

const CardComponent = ({ title, content, linkText, linkHref, imageSrc }) => {
  return (
    <div className="bg-black border-2 p-6 shadow-md flex flex-col">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
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
    </div>
  );
};

export default CardComponent;
