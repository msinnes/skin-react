import * as React from 'react';

import Icon from '../../Icon';

export type nameType = 'prev' | 'next';

export interface CarouselScrollButtonProps<T> extends React.HTMLProps<T> {
  name: nameType;
}

export default ({name, ...props}: CarouselScrollButtonProps<HTMLButtonElement>) => {
  return (
    <button {...props} type="button" className={`carousel__control carousel__control--${name}`}>
      <Icon name={`carousel-${name}`} />
    </button>
  );
};
