import * as React from 'react';
import {shallow} from 'enzyme';
import CarouselItem from '../../components/carousel-item';

describe('CarouselItem', () => {
  it('should render an li component', () => {
    const component = shallow(<CarouselItem />);
    expect(component.type()).toEqual('li');
  });

  it('should set ariaHidden to true if props.fullyVisible is true', () => {
    const component = shallow(<CarouselItem fullyVisible />);
    expect(component.prop('aria-hidden')).toBe(true);
  });

  it('should default fullyVisible to false', () => {
    const component = shallow(<CarouselItem />);
    expect(component.prop('aria-hidden')).toBe(false);
  });

  it('should pass other props through to li component', () => {
    const styleRef = {};
    const className = 'test__class__name';
    const component = shallow(<CarouselItem style={styleRef} className={className} />);
    expect(component.prop('className')).toEqual(className);
    expect(component.prop('style')).toEqual(styleRef);
  });

  // sanity check for Reach Children typing
  it('should render a single child or an array of children', () => {
    const singleChildComponent = shallow(
      <CarouselItem>
        <span>some text</span>
      </CarouselItem>
    );
    expect(singleChildComponent.children().length).toEqual(1);
    const arrayChildrenComponent = shallow(
      <CarouselItem>
        <div>some text</div>
        <div>some more text</div>
      </CarouselItem>
    );
    expect(arrayChildrenComponent.children().length).toEqual(2);
  });
});
