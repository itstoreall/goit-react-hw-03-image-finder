import React from 'react';
import s from './Button.module.scss';

const Button = ({ hits, isLoading, onClick }) => {
  const shouldRenderLoadMoreButton = hits.length > 0 && !isLoading;

  return (
    <>
      {shouldRenderLoadMoreButton && (
        <button className={s.Button} type="button" onClick={onClick}>
          Load more
        </button>
      )}
    </>
  );
};

export default Button;
