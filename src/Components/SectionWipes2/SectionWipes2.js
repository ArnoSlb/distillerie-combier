// @flow
import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

import "./SectionWipes2.css"

const SectionWipes2 = () => {
  return (
    <div className="SectionWipes2Styled">
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="300%"
        pin
      >
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          <section className="panel blue"><span>Panel</span></section>
          <Tween
            from={{ x: '-100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel turqoise"><span>Panel</span></section>
          </Tween>
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel green"><span>Panel</span></section>
          </Tween>
          <Tween
            from={{ y: '-100%' }}
            to={{ y: '0%' }}
          >
            <section className="panel bordeaux"><span>Panel</span></section>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  </div>
  )
};

export default SectionWipes2;
