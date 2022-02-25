import React from "react";

import "./BottleBar.css"

import ArrowDown from "../../../src/assets/Bottom_Arrow.png"

const BottleBar = (props) => {

    // console.log(props.bottleSelected)
    // console.log(props.data)

    let BottleIndex 

    if(props.bottleSelected == 'original'){
        BottleIndex = 0
    } else if (props.bottleSelected == 'elixir'){
        BottleIndex = 2
    } else if (props.bottleSelected == 'meridor'){
        BottleIndex = 1
    } else if (props.bottleSelected == 'blanchette'){
        BottleIndex = 3
    }
    
    React.useEffect(() => {
       
        if(props.bottleSelected == "elixir"){
            document.querySelector('.targetCardTitle--selected').style.color = "#dc3545";  
        }else if (props.bottleSelected == "meridor") {
            document.querySelector('.targetCardTitle--selected').style.color = "#74b6ff"
        } else if (props.bottleSelected == "blanchette"){
            document.querySelector('.targetCardTitle--selected').style.color = "#adaaa2"
        }else {
            document.querySelector('.targetCardTitle--selected').style.color = "rgb(255, 165, 47)"
        }
        document.querySelector('.BottleBar__Picture').classList.add('slide-right-bar')
    })
   

    return (
        <div>
            {props.langSelected == 'FR' ?
                <div className="BottleBar__container">
                    <h3 className="BottleBar__title targetCardTitle--selected ">{props.data[BottleIndex].title}</h3>
                    <p className="BottleCard__description targetCardDescription--selected">{props.data[BottleIndex].description}</p>
                    {props.bottleSelected == 'original' ?
                    <div className=" BottleBar__scroll__container">
                        <p className="BottleBar__scroll__description">Scrollez vers le bas pour découvrir sa fabrication</p>
                        <img className="BottleBar__scroll__img slide-bottom" src={ArrowDown} alt="" />
                    </div>
                    :
                    <div className=" BottleBar__scroll__container">
                        <p className="BottleBar__scroll__description">À découvrir à partir de {props.data[BottleIndex].disponible}</p>
                    </div>
                    }    
                </div>
            :
                <div className="BottleBar__container">
                    <h3 className="BottleBar__title targetCardTitle--selected ">{props.data[BottleIndex].titleEn}</h3>
                    <p className="BottleCard__description targetCardDescription--selected">{props.data[BottleIndex].descriptionEn}</p>
                    {props.bottleSelected == 'original' ?
                    <div className=" BottleBar__scroll__container">
                        <p className="BottleBar__scroll__description">Scroll down to see how it's made</p>
                        <img className="BottleBar__scroll__img slide-bottom" src={ArrowDown} alt="" />
                    </div>
                    :
                    <div className=" BottleBar__scroll__container">
                        <p className="BottleBar__scroll__description">Available in {props.data[BottleIndex].disponibleEn}</p>
                    </div>
                    }    
                </div>
            }
            <img className="BottleBar__Picture" src={props.data[BottleIndex].img} alt="" />
        </div>
 
    )
}

export default BottleBar;