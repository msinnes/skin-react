import * as React from 'react';

import {SkinCarousel, SkinCarouselItem} from '../';
import './stories.css';

export default () => (
  <SkinCarousel>
    <SkinCarouselItem className="demo1-card">Card 1</SkinCarouselItem>
    <SkinCarouselItem className="demo1-card">Card 2</SkinCarouselItem>
    <SkinCarouselItem className="demo1-card">Card 3</SkinCarouselItem>
    <SkinCarouselItem className="demo1-card">Card 4</SkinCarouselItem>
    <SkinCarouselItem className="demo1-card">Card 5</SkinCarouselItem>
    <SkinCarouselItem className="demo1-card">Card 6</SkinCarouselItem>
  </SkinCarousel>
);
