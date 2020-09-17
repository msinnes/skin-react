import * as React from 'react';
import CarouselItem from './carousel-item';
import CarouselScrollButton from './carousel-scroll-button';

export interface CarouselProps<T> extends React.HTMLProps<T> {
  children?: Array<typeof CarouselItem>;
}

type CarouselState = {
  index: number;
  interacting: boolean;
  paused: boolean;
};

const listItemMap = (child: React.ReactElement) => {
  const component = child.type;
  const props = {
    ...child.props,
    style: {
      ...child.props.style,
      marginRight: 16
    }
  };
  return React.createElement(component, props);
};

class Carousel extends React.Component {
  listRef: React.RefObject<HTMLUListElement>;
  mounted: boolean;
  state: CarouselState = {
    index: 0,
    interacting: false,
    paused: false
  };

  get listEl() {
    return this.listRef.current;
  }

  get listItems() {
    const listEl = this.listEl;
    return listEl ? listEl.children : [];
  }

  constructor(props) {
    super(props);

    this.listRef = React.createRef();
  }

  getTemplateData() {}

  cleanupAsync() {}

  emitUpdate() {}

  handleMove() {}

  togglePlay() {}

  handleScroll() {}

  handleStartInteraction() {
    this.setState({interacting: true});
  }

  handleEndInteraction() {
    this.setState({interacting: false});
  }

  move() {}

  getOffset() {}

  getMaxOffset() {}

  getSlide() {}

  normalizeIndex() {}

  getNextIndex() {}

  forEls() {}

  isNativeScrolling() {}

  onInput() {}

  onRender() {}

  onMount() {}

  onUpdate() {}

  onDestroy() {}

  render() {
    const {children, ...elementProps} = this.props;

    return (
      <div className="carousel" {...elementProps}>
        <div className="carousel__container" {...elementProps}>
          <CarouselScrollButton name="prev" onClick={this.handleMove} />
          <div className="carousel__viewport">
            <ul ref={this.listRef} className="carousel__list">
              {React.Children.map(children, listItemMap)}
            </ul>
          </div>
          <CarouselScrollButton name="next" onClick={this.handleMove} />
        </div>
      </div>
    );
  }
}

export default Carousel;
