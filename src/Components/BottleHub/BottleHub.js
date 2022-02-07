// React tools
import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
// Components
import BottleCard from "../BottleCard/BottleCard";
import BottleStory from "../BottleStory/BottleStory";
import BottleBar from "../BottleBar/BottleBar"
// Pictures
import LogoCombier from "../../assets/Combier_logo.png";
import OriginalCombierImg from "../../assets/bottle/original_combier.png"
import ElixirCombierImg from "../../assets/bottle/elixir_combier.png"
import GinMeridorImg from "../../assets/bottle/gin_meridor.png"
import AbsintheBlanchetteImg from "../../assets/bottle/absinthe_blanchette.png"


import './BottleHub.css';

const BottleHub = (props) => {

    console.log(props)

    const bottlesData = [
        {
        index: 0,
        id: `original`,
        title: `L'Original Combier`,
        titleEn: `The Original Combier`,
        img: OriginalCombierImg,
        description: `Une distillation d’écorces d’oranges douces et amères, de l’eau et du sucre.`,
        descriptionEn: `At the origin of the Distillerie Combier , we find this famous orange liqueur made with a still located in the back room of the Combier-Destre confectionery.`,
        color: `#fd7e14`
        },
        {
        index: 1,
        id: `elixir`,
        title: `L'Elixir Combier`,
        titleEn: `The Elixir Combier`,
        img: ElixirCombierImg,
        description: `Un mélange exotique d’épices et de plantes aromatiques soigneusement infusées avant distillation.`,
        descriptionEn: `This recipe, inspired by the hygienic liqueur of Doctor Raspail, was made delicious by the genius of Master Distiller Jean-Baptiste Combier, which earned him the approval and congratulations of the good revolutionary doctor.`,
        color: `#dc3545`
        },
        {
        index:2,
        id: `meridor`,
        title: `Le Gin Meridor`,
        titleEn: `The Gin Meridor`,
        img: GinMeridorImg,
        description: `Baies de genévrier, graines de coriandre, écorces de citron, racines d'iris, cubèbe et  pétales de rose.`,
        descriptionEn: `The first London Dry Gin created in the Loire Valley, Gin Meridor comes from a single distillation of all the ingredients in the historic stills of the Distillerie Combier.`,
        color: `#74b6ff`
        },
        {
        index:3,
        id: `blanchette`,
        title: `L'Absinthe Blanchette`,
        titleEn: `The Absinthe Blanchette`,
        img: AbsintheBlanchetteImg,
        description: `Une authentique absinthe blanche avec un style "suisse" à dominante anisée. `,
        descriptionEn: `Produced by the Distillerie Combier between 1899 and 1915, and again in the same stills since 2006, the Blanchette is an authentic white absinthe with a "Swiss" style predominantly aniseed.`,
        color: `#74b6ff`
        },
    ]

    const [bottle, setBottle] = useState("original");

    const modifyStateBottle = (alcool) => {
      setBottle(alcool)
    }

    const {scrollTop, scrollHeight, clientHeight} = document.documentElement

    console.log(scrollTop, clientHeight, scrollHeight, window.pageYOffset)
    window.pageYOffset
    
    return (
        <div className="BottleHub__container">
            <div className="BottleHub__container__split">
                <div className="BottleHub__container__left">
                    <div className="BottleHub" id="BottleHub">
                        <BottleBar data={bottlesData} bottleSelected={bottle} langSelected={props.langSelected}/>
                    </div>
                </div>
                <div className="BottleHub__container__right">
                    <div className="BottleHub__bottleContainer">
                        <div className="BottleHub__bottleContainer__borderOut">
                            <div className="BottleHub__bottleContainer__borderIn">
                                <h1>Distillerie Combier</h1>
                                {props.langSelected == 'FR' ?
                                <h2>Liqueurs et spiritueux</h2>
                                :
                                <h2>Liquors and spirits</h2>
                                }   
                                <div className="BottleHub__bottleContainer__borderIn__titleBottom"></div>
                                <div className="BottleHub__bottleContainer__bottleList">
                                    {bottlesData.map((bottleData, index) => {
                                        return (
                                            <BottleCard id={bottleData.id} data={bottleData} setBottle={modifyStateBottle} langSelected={props.langSelected}/>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <BottleStory bottle={bottle} langSelected={props.langSelected}/>
        </div>

    )
}

export default BottleHub;