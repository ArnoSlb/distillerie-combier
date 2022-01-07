// React tools
import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
// Components
import BottleCard from "../BottleCard/BottleCard";
import BottleStory from "../BottleStory/BottleStory";
// Pictures
import LogoCombier from "../../assets/Combier_logo.png";
import OriginalCombierImg from "../../assets/bottle/original_combier.png"
import ElixirCombierImg from "../../assets/bottle/elixir_combier.png"
import GinMeridorImg from "../../assets/bottle/gin_meridor.png"
import AbsintheBlanchetteImg from "../../assets/bottle/absinthe_blanchette.png"
import ArrowDown from "../../assets/Bottom_Arrow.png"

import './BottleHub.css';

const BottleHub = (props) => {

    console.log(props)

    const bottlesData = [
        {
        id: `original`,
        title: `L'Original Combier`,
        titleEn: `The Original Combier`,
        img: OriginalCombierImg,
        description: `À l’origine de la Distillerie Combier, on trouve cette célèbre liqueur d’oranges élaborée grâce à un alambic situé dans l’arrière-boutique de la confiserie Combier-Destre.`,
        descriptionEn: `At the origin of the Distillerie Combier , we find this famous orange liqueur made with a still located in the back room of the Combier-Destre confectionery.`,
        color: `#fd7e14`
        },
        {
        id: `elixir`,
        title: `L'Elixir Combier`,
        titleEn: `The Elixir Combier`,
        img: ElixirCombierImg,
        description: `Cette recette, inspirée de la liqueur hygiénique du docteur Raspail, est rendue délicieuse par le génie du Maître Distillateur Jean-Baptiste Combier, ce qui lui vaudra l’approbation et les félicitations du bon médecin révolutionnaire.`,
        descriptionEn: `This recipe, inspired by the hygienic liqueur of Doctor Raspail, was made delicious by the genius of Master Distiller Jean-Baptiste Combier, which earned him the approval and congratulations of the good revolutionary doctor.`,
        color: `#dc3545`
        },
        {
        id: `meridor`,
        title: `Le Gin Meridor`,
        titleEn: `The Gin Meridor`,
        img: GinMeridorImg,
        description: `Premier London Dry Gin créé en Vallée de la Loire, Gin Meridor est issu d’une seule et unique distillation de tous les ingrédients dans les alambics historiques de la Distillerie Combier.`,
        descriptionEn: `The first London Dry Gin created in the Loire Valley, Gin Meridor comes from a single distillation of all the ingredients in the historic stills of the Distillerie Combier.`,
        color: `#74b6ff`
        },
        {
        id: `blanchette`,
        title: `L'Absinthe Blanchette`,
        titleEn: `The Absinthe Blanchette`,
        img: AbsintheBlanchetteImg,
        description: `Produite par la Distillerie Combier entre 1899 et 1915, et de nouveau dans les mêmes alambics depuis 2006, la Blanchette est une authentique absinthe blanche avec un style "suisse" à dominante anisée.`,
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
                        {/* <div className="BottleHub__title">
                            <img className="BottleHub__title__logo" src={LogoCombier} alt="" />
                        </div> 
                        <p className="BottleHub__description">Cliquez sur une bouteille pour découvrir sa fabrication</p> */}
                        <div className="BottleHub__description__container">
                            {props.langSelected == 'FR' ? 
                                <p className="BottleHub__description">Scrollez vers le bas pour découvrir sa fabrication</p>
                            :
                                <p className="BottleHub__description">Scroll down to see how it is made</p>
                            }
                            <img className="BottleHub__description__img slide-bottom" src={ArrowDown} alt="" />
                        </div>
                        
                    </div>
                </div>
                <div className="BottleHub__container__right">
                    <div className="BottleHub__bottleContainer">
                            {bottlesData.map((bottleData, index) => {
                                return (
                                    <BottleCard id={bottleData.id} data={bottleData} setBottle={modifyStateBottle} langSelected={props.langSelected}/>
                                )
                            })}
                    </div>
                </div>
            </div>
            <BottleStory bottle={bottle} langSelected={props.langSelected}/>
        </div>

    )
}

export default BottleHub;