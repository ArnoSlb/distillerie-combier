import React from "react";
import BottleCard from "../BottleCard/BottleCard";
import LogoCombier from "../../assets/Combier_logo.png"

import './BottleHub.css';

const BottleHub = ({setBottle}) => {

    
    return (
        <div className="BottleHub">
            <div className="BottleHub__title">
                <h2>La gamme de la</h2>
                <img className="BottleHub__title__logo" src={LogoCombier} alt="" />
            </div> 
            <p className="BottleHub__description">Cliquez sur une bouteille pour découvrir sa fabrication</p>
            <div className="BottleHub__bottleContainer">
                <BottleCard id="1" setBottle={setBottle}/>
                <BottleCard id="2" setBottle={setBottle}/>
                <BottleCard id="3" setBottle={setBottle}/>
                <BottleCard id="4" setBottle={setBottle}/>
            </div>
        </div>
    )
}

export default BottleHub;