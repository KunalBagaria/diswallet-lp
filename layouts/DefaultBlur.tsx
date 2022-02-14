import React from 'react';
import components from '@/styles/Components.module.scss';

export const DefaultBlur = function DefaultBlur() {
  return (
    <>
      <div className={components.defaultBlurLeft} />
      <div className={components.defaultBlurRight} />
    </>
  );
};
