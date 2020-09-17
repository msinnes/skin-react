import * as React from 'react';
import {shallow} from 'enzyme';
import CarouselScrollButton, {nameType} from '../../components/carousel-scroll-button';

const getDefaultComponent = (name = 'prev') => shallow(<CarouselScrollButton name={name as nameType} />);

describe('CarouselScrollButton', () => {
  it('should render a button element', () => {
    const component = getDefaultComponent();
    expect(component.type()).toEqual('button');
  });

  it('should assign a type props to button', () => {
    const component = getDefaultComponent();
    expect(component.prop('type')).toEqual('button');
  });

  it('should have the carousel__control className by default', () => {
    const component = getDefaultComponent();
    expect(component.hasClass('carousel__control')).toBe(true);
  });

  it('should use the required name to assign scroll class and icon', () => {
    let component = getDefaultComponent('prev');
    expect(component.hasClass('carousel__control--prev')).toBe(true);
    expect(component.childAt(0).prop('name')).toEqual('carousel-prev');

    component = getDefaultComponent('next');
    expect(component.hasClass('carousel__control--next')).toBe(true);
    expect(component.childAt(0).prop('name')).toEqual('carousel-next');
  });

  it('should spread props before props assignment', () => {
    const clickRef = () => {};
    const component = shallow(
      <CarouselScrollButton name="prev" className={'some class name'} type="not a button" onClick={clickRef} />
    );
    expect(component.prop('className')).toEqual('carousel__control carousel__control--prev');
    expect(component.prop('type')).toEqual('button');
    expect(component.prop('onClick')).toEqual(clickRef);
  });
});
