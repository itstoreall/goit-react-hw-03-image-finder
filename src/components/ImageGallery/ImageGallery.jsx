import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from 'react-loader-spinner';
import Button from './Button';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const ImageGallery = () => {
  return (
    <>
      <ul className="ImageGallery">
        <ImageGalleryItem />
      </ul>
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      <Button />
    </>
  );
};

export default ImageGallery;
