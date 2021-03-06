import React from 'react';
import PropTypes from 'prop-types';
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

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

ImageGalleryItem.defaultProps = {
  alt: 'Photo',
};

export default ImageGalleryItem;
