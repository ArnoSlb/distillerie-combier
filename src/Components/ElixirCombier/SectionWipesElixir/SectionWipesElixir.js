// @flow
import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { disablePageScroll, enablePageScroll, clearQueueScrollLocks } from 'scroll-lock';

import OriginalManufacturing from './OriginalManufacturing/OriginalManufacturing';
import OriginalManufacturing2 from './OriginalManufacturing2/OriginalManufacturing2';
import OriginalHistory from './OriginalHistory/OriginalHistory';
import OriginalCocktail from './OriginalCocktail/OriginalCocktail';

import "./SectionWipesElixir.css"

const SectionWipesOriginal = (props) => {

  clearQueueScrollLocks();
  enablePageScroll();
  
  return (
    <div className="SectionWipes2Styled">
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="100%"
        pin
      >
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          <section className="panel">
            <div className='panel blue'></div>
          </section>
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel">
              <OriginalManufacturing2 langSelected={props.langSelected}/>
            </section>
          </Tween>
          {/* <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel">
              <OriginalHistory langSelected={props.langSelected}/>
            </section>
          </Tween> */}
          {/* <Tween
            from={{ y: '-100%' }}
            to={{ y: '0%' }}
          >
            <section className="panel">
              <OriginalCocktail langSelected={props.langSelected}/>
            </section>
          </Tween> */}
        </Timeline>
      </Scene>
    </Controller>
  </div>
  )
};

export default SectionWipesOriginal;
