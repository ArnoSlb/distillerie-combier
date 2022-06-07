// @flow
import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { disablePageScroll, enablePageScroll, clearQueueScrollLocks } from 'scroll-lock';

import ElixirHistory from './ElixirHistory/ElixirHistory'

import "./ElixirSectionWipesDesktop.css"

const SectionWipesOriginal = (props) => {

  clearQueueScrollLocks();
  enablePageScroll();
  
  return (
    <div className="Elixir_SectionWipes2Styled">
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="300%"
        pin
      >
        <Timeline
          wrapper={<div id="Elixir_pinContainer" />}
        >
          <section className="Elixir_panel">
            <ElixirHistory langSelected={props.langSelected}/>
          </section>
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="Elixir_panel">
              <OriginalManufacturing2 langSelected={props.langSelected}/>
            </section>
          </Tween>
          {/* <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="Elixir_panel">
              <OriginalHistory langSelected={props.langSelected}/>
            </section>
          </Tween> */}
          {/* <Tween
            from={{ y: '-100%' }}
            to={{ y: '0%' }}
          >
            <section className="Elixir_panel">
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
