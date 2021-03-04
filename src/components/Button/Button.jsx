import React from 'react';

const Button = ({ hits, isLoading, onClick }) => {
  const shouldRenderLoadMoreButton = hits.length > 0 && !isLoading;

  return (
    <>
      {shouldRenderLoadMoreButton && (
        <button type="button" onClick={onClick}>
          Load more
        </button>
      )}
    </>
  );
};

export default Button;
