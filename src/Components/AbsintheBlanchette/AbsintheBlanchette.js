import React from "react";
import { Link } from "react-router-dom";
import { Controller, Scene } from 'react-scrollmagic';

import "./AbsintheBlanchette.css"


const AbsintheBlanchette = () => {

    return (
        <div className="AbsintheBlanchette">
            {/* <div className="AbsintheBlanchette__bg">
                <div className="AbsintheBlanchette__bg__part">L'Absinthe</div>
                <div className="AbsintheBlanchette__bg__part">Blanchette</div>
            </div> */}
            <Controller>
                <Scene duration={'100%'} indicators={true} triggerElement={".event2"} triggerHook={"onEnter"} pin={'.event1 .pinSection'}>
                        <div className="box event1">
                            <div className="pinSection">
                                <div className="image"></div>
                            </div>
                        </div>
                </Scene>
                <Scene duration={'200%'} indicators={true} triggerElement={".event2"} triggerHook={"onEnter"} pin={'.event2 .pinSection'}>
                    <div className="box event2">
                        <div className="pinSection">
                            <div className="image"></div>
                        </div>
                    </div>
                </Scene>
                <Scene duration={'200%'} indicators={true} triggerElement={".event3"} triggerHook={"onEnter"} pin={'.event3 .pinSection'}>
                    <div className="box event3">
                        <div className="pinSection">
                            <div className="image"></div>
                        </div>
                    </div>
                </Scene>
                <Scene duration={'100%'} indicators={true} triggerElement={".event4"} triggerHook={"onEnter"} pin={'.event4 .pinSection'}>
                    <div className="box event4">
                        <div className="pinSection">
                            <div className="image"></div>
                        </div>
                    </div>
                </Scene>
            </Controller>
        </div>
    )
}

export default AbsintheBlanchette