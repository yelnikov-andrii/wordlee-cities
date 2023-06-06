import React from 'react';

export const Button: React.FC <any> = ({ children, click, arrow, lettersNotFound }) => {
  return (
    <button 
      onClick={(e) => {
        click(children.toUpperCase())
      }}
      className={arrow === true ? 'button button--arrow' : lettersNotFound?.includes(children.toUpperCase()) ? 'button button--disabled' : 'button'}
    >
      {children}
    </button>
  );
};

