import React from 'react';
import s from './ImageGallery.module.scss';

const ImageGalleryItem = ({ src, alt, onClick, largeImageURL }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={src}
        alt={alt}
        className={s.ImageGalleryItemImage}
        onClick={() => onClick(largeImageURL, alt)}
        data={largeImageURL}
      />
    </li>
  );
};

export default ImageGalleryItem;
