import React from 'react';

const ImageGalleryItem = ({ src, alt, onClick, largeImageURL }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={src}
        alt={alt}
        className="ImageGalleryItem-image"
        onClick={() => onClick(largeImageURL, alt)}
        data={largeImageURL}
      />
    </li>
  );
};

export default ImageGalleryItem;
