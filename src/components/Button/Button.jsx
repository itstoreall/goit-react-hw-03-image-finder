import React from 'react';
import PropTypes from 'prop-types';
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

Button.propTypes = {
  hits: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
