import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
// import Button from './Button';
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
      {/* <Button hits={hits} onClick={onClick} /> */}
    </>
  );
};

export default ImageGallery;
