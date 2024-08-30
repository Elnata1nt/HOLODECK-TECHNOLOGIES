import PropTypes from "prop-types";
import { useState } from "react";

function ImageWithFallback({ src, alt, defaultSrc, ...props }) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(defaultSrc);
  };

  return <img src={imgSrc} alt={alt} onError={handleError} {...props} className="w-full h-full object-cover hover:scale-105 duration-300 ease-linear" />;
}

ImageWithFallback.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  defaultSrc: PropTypes.string.isRequired,
};

export default ImageWithFallback;
