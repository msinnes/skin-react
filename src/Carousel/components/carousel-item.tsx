import * as React from 'react';

export interface CarouselItemProps<T> extends React.HTMLProps<T> {
  children?: React.ReactNode | React.ReactNodeArray;
  fullyVisible?: boolean;
}

export default ({children, fullyVisible = false, ...props}: CarouselItemProps<HTMLLIElement>) => {
  return (
    <li {...props} aria-hidden={fullyVisible}>
      {children}
    </li>
  );
};
