import React from 'react';
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

export default ImageGallery;
