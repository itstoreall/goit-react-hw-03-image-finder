import React from 'react';

const ImageGalleryItem = ({ src, alt }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={src} alt={alt} className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
