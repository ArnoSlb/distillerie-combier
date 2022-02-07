import React from "react";

import "./BottleBar.css"

import ArrowDown from "../../../src/assets/Bottom_Arrow.png"

const BottleBar = (props) => {

    console.log(props.bottleSelected)
    console.log(props.data)

    let BottleIndex 

    if(props.bottleSelected == 'original'){
        BottleIndex = 0
    } else if (props.bottleSelected == 'elixir'){
        BottleIndex = 1
    } else if (props.bottleSelected == 'meridor'){
        BottleIndex = 2
    } else if (props.bottleSelected == 'blanchette'){
        BottleIndex = 3
    }
    
    React.useEffect(() => {

    })
    // if(BottleBarSelected == "elixir"){
    //     // document.querySelector('.targetCardTitle--selected').style.color = "#dc3545"
    //     BottleIndex = 1
    // }else if (BottleBarSelected == "meridor") {
    //     // document.querySelector('.targetCardTitle--selected').style.color = "#74b6ff"
    //     BottleIndex = 2
    // } else if (BottleBarSelected == "blanchette"){
    //     // document.querySelector('.targetCardTitle--selected').style.color = "#adaaa2"
    //     BottleIndex = 3
    // }else {
    //     // document.querySelector('.targetCardTitle--selected').style.color = "rgb(255, 165, 47)"
    //     BottleIndex = 0
    // }

    return (
        <div>
            <div className="BottleBar__container">
                <h3 className="BottleCard__title targetCardTitle--selected">{props.data[BottleIndex].title}</h3>
                <p className="BottleCard__description targetCardDescription--selected">{props.data[BottleIndex].description}</p>
                    <div className=" BottleBar__scroll__container">
                        <p className="BottleBar__scroll__description">Scrollez vers le bas pour découvrir sa fabrication</p>
                        <img className="BottleBar__scroll__img slide-bottom" src={ArrowDown} alt="" />
                    </div>
            </div>
            <img className="BottleBar__Picture" src={props.data[BottleIndex].img} alt="" />
        </div>
 
    )
}

export default BottleBar;