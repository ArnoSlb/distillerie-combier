import React from "react";
import { useState } from "react";
import BottleCard from "../BottleCard/BottleCard";
import LogoCombier from "../../assets/Combier_logo.png";

import './BottleHub.css';

const BottleHub = () => {

    const [bottle, setBottle] = useState("original");

    const modifyStateBottle = (alcool) => {
      setBottle(alcool)
    }

    
    return (
        <div className="BottleHub">
            <div className="BottleHub__title">
                <h2>La gamme de la</h2>
                <img className="BottleHub__title__logo" src={LogoCombier} alt="" />
            </div> 
            <p className="BottleHub__description">Cliquez sur une bouteille pour découvrir sa fabrication</p>
            <div className="BottleHub__bottleContainer">
                <BottleCard id="original" setBottle={modifyStateBottle}/>
                <BottleCard id="elixir" setBottle={modifyStateBottle}/>
                <BottleCard id="blanchette" setBottle={modifyStateBottle}/>
                <BottleCard id="meridor" setBottle={modifyStateBottle}/>
            </div>
        </div>
    )
}

export default BottleHub;