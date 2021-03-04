import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from 'react-loader-spinner';
import Button from './Button';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const ImageGallery = ({ hits }) => {
  return (
    <>
      <ul className="ImageGallery">
        {hits.map(hit => {
          return (
            <ImageGalleryItem
              key={hit.id}
              src={hit.webformatURL}
              alt={hit.tags}
            />
          );
        })}
      </ul>
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      <Button />
    </>
  );
};

export default ImageGallery;
