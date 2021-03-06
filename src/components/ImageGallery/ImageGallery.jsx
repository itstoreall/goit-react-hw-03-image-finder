import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './ImageGallery.module.scss';

const ImageGallery = ({ hits, onClick }) => {
  return (
    <>
      <ul className={s.ImageGallery}>
        {hits.map((hit, index) => {
          return (
            <ImageGalleryItem
              key={`${index}${hit.id}`}
              src={hit.webformatURL}
              alt={hit.tags}
              onClick={onClick}
              largeImageURL={hit.largeImageURL}
            />
          );
        })}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequirred,
      alt: PropTypes.string,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ),
  onClick: PropTypes.func.isRequired,
};

ImageGallery.defaultProps = {
  alt: 'Photo',
};

export default ImageGallery;
