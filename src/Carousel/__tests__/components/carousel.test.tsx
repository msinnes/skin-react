import * as React from 'react';
import {mount, shallow} from 'enzyme';
import Carousel from '../../components/carousel';
import CarouselItem from '../../components/carousel-item';

const getTestableState = (props = {children: null}) => {
  const defaultProps = {
    children: (
      <>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
      </>
    )
  };
  const {children, ...renderProps} = {
    ...defaultProps,
    ...props
  };
  const mountedComponent = mount(<Carousel {...renderProps}>{children}</Carousel>);

  return {
    component: mountedComponent,
    instance: mountedComponent.instance()
  };
};

describe('Carousel', () => {
  let instance;
  let component;
  let domWrapper;
  let domElement;

  // state mock setup.
  let setStateMock;
  let setStateActual;

  beforeEach(() => {
    const {instance: testableInstance, component: testableComponent} = getTestableState();
    instance = testableInstance;
    component = testableComponent;
    domWrapper = testableComponent.render();
    domElement = domWrapper[0];

    // mock instance.setState with actual functionality
    setStateActual = instance.setState;
    setStateMock = jest.fn();
    setStateMock.mockImplementation(setStateActual);
    instance.setState = setStateMock;
  });

  afterEach(() => {
    component.unmount();
    jest.resetAllMocks();

    // clean up instance.setState
    instance.setState = setStateActual;
  });

  describe('instance', () => {
    it('should have a ref of the carousel list', () => {
      expect(instance.listRef).toBeDefined();
      expect(instance.listRef.current.tagName.toLowerCase()).toEqual('ul');
    });

    it('should have a getter for the listEl and for listItems', () => {
      expect(instance.listEl).toEqual(instance.listRef.current);
      expect(instance.listItems).toEqual(instance.listRef.current.children);
    });

    it('should return an empty array if the listRef is not yet set', () => {
      instance.listRef = React.createRef();
      expect(instance.listItems).toBeInstanceOf(Array);
      expect(instance.listItems.length).toEqual(0);
    });

    it('should set an initial state', () => {
      const initialState = instance.state;
      expect(initialState).toBeDefined();
      expect(initialState.index).toEqual(0);
      expect(initialState.paused).toBe(false);
      expect(initialState.interacting).toBe(false);
    });
  });

  describe('getTemplateData', () => {
    it('should be a function on the instance', () => {
      expect(instance.getTemplateData).toBeInstanceOf(Function);
    });
  });

  describe('cleanupAsync', () => {
    it('should be a function on the instance', () => {
      expect(instance.cleanupAsync).toBeInstanceOf(Function);
    });
  });

  describe('emitUpdate', () => {
    it('should be a function on the instance', () => {
      expect(instance.emitUpdate).toBeInstanceOf(Function);
    });
  });

  describe('handleMove', () => {
    it('should be a function on the instance', () => {
      expect(instance.handleMove).toBeInstanceOf(Function);
    });
  });

  describe('togglePlay', () => {
    it('should be a function on the instance', () => {
      expect(instance.togglePlay).toBeInstanceOf(Function);
    });
  });

  describe('handleScroll', () => {
    it('should be a function on the instance', () => {
      expect(instance.handleScroll).toBeInstanceOf(Function);
    });
  });

  describe('handleStartInteraction', () => {
    it('should be a function on the instance', () => {
      expect(instance.handleStartInteraction).toBeInstanceOf(Function);
    });

    it('should call setState and update state.interacting to true', () => {
      instance.handleStartInteraction();
      expect(setStateMock).toHaveBeenCalledTimes(1);
      expect(setStateMock.mock.calls[0][0]).toMatchObject({
        interacting: true
      });
      expect(instance.state.interacting).toBe(true);
    });
  });

  describe('handleEndInteraction', () => {
    it('should be a function on the instance', () => {
      expect(instance.handleEndInteraction).toBeInstanceOf(Function);
    });

    it('should call setState and update state.interacting to false', () => {
      instance.handleEndInteraction();
      expect(setStateMock).toHaveBeenCalledTimes(1);
      expect(setStateMock.mock.calls[0][0]).toMatchObject({
        interacting: false
      });
      expect(instance.state.interacting).toBe(false);
    });
  });

  describe('move', () => {
    it('should be a function on the instance', () => {
      expect(instance.move).toBeInstanceOf(Function);
    });
  });

  describe('getOffset', () => {
    it('should be a function on the instance', () => {
      expect(instance.getOffset).toBeInstanceOf(Function);
    });
  });

  describe('getMaxOffset', () => {
    it('should be a function on the instance', () => {
      expect(instance.getMaxOffset).toBeInstanceOf(Function);
    });
  });

  describe('getSlide', () => {
    it('should be a function on the instance', () => {
      expect(instance.getSlide).toBeInstanceOf(Function);
    });
  });

  describe('normalizeIndex', () => {
    it('should be a function on the instance', () => {
      expect(instance.normalizeIndex).toBeInstanceOf(Function);
    });
  });

  describe('getNextIndex', () => {
    it('should be a function on the instance', () => {
      expect(instance.getNextIndex).toBeInstanceOf(Function);
    });
  });

  describe('forEls', () => {
    it('should be a function on the instance', () => {
      expect(instance.forEls).toBeInstanceOf(Function);
    });
  });

  describe('isNativeScrolling', () => {
    it('should be a function on the instance', () => {
      expect(instance.isNativeScrolling).toBeInstanceOf(Function);
    });
  });

  describe('onInput', () => {
    it('should be a function on the instance', () => {
      expect(instance.onInput).toBeInstanceOf(Function);
    });
  });

  describe('onRender', () => {
    it('should be a function on the instance', () => {
      expect(instance.onRender).toBeInstanceOf(Function);
    });
  });

  describe('onMount', () => {
    it('should be a function on the instance', () => {
      expect(instance.onMount).toBeInstanceOf(Function);
    });
  });

  describe('onUpdate', () => {
    it('should be a function on the instance', () => {
      expect(instance.onUpdate).toBeInstanceOf(Function);
    });
  });

  describe('onDestroy', () => {
    it('should be a function on the instance', () => {
      expect(instance.onDestroy).toBeInstanceOf(Function);
    });
  });

  describe('lifecycle methods', () => {
    describe('render', () => {
      it('should render a div element', () => {
        expect(domElement.tagName).toEqual('div');
      });
    });
  });
});
