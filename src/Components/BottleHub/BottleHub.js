// React tools
import React from "react";
import { useState } from "react";
// Components
import BottleCard from "../BottleCard/BottleCard";
import BottleStory from "../BottleStory/BottleStory";
// Pictures
import LogoCombier from "../../assets/Combier_logo.png";
import OriginalCombierImg from "../../assets/bottle/original_combier.jpeg"
import ElixirCombierImg from "../../assets/bottle/elixir_combier.jpeg"
import GinMeridorImg from "../../assets/bottle/gin_meridor.jpeg"
import AbsintheBlanchetteImg from "../../assets/bottle/absinthe_blanchette.jpeg"

import './BottleHub.css';

const BottleHub = () => {

    const bottlesData = [
        {
        id: `original`,
        title: `L'Original Combier`,
        img: OriginalCombierImg,
        description: `À l’origine de la Distillerie Combier, on trouve cette célèbre liqueur d’oranges élaborée grâce à un alambic situé dans l’arrière-boutique de la confiserie Combier-Destre.`,
        color: `#fd7e14`
        },
        {
        id: `elixir`,
        title: `L'Elixir Combier`,
        img: ElixirCombierImg,
        description: `Cette recette, inspirée de la liqueur hygiénique du docteur Raspail, est rendue délicieuse par le génie du Maître Distillateur Jean-Baptiste Combier, ce qui lui vaudra l’approbation et les félicitations du bon médecin révolutionnaire.`,
        color: `#dc3545`
        },
        {
        id: `meridor`,
        title: `Le Gin Meridor`,
        img: GinMeridorImg,
        description: `Premier London Dry Gin créé en Vallée de la Loire, Gin Meridor est issu d’une seule et unique distillation de tous les ingrédients dans les alambics historiques de la Distillerie Combier.`,
        color: `#74b6ff`
        },
        {
        id: `blanchette`,
        title: `L'Absinthe Blanchette`,
        img: AbsintheBlanchetteImg,
        description: `Produite par la Distillerie Combier entre 1899 et 1915, et de nouveau dans les mêmes alambics depuis 2006, la Blanchette est une authentique absinthe blanche avec un style "suisse" à dominante anisée.`,
        color: `#74b6ff`
        },
    ]

    const [bottle, setBottle] = useState("original");

    const modifyStateBottle = (alcool) => {
      setBottle(alcool)
    }
    
    return (
        <div className="BottleHub">
            <div className="BottleHub__title">
                <img className="BottleHub__title__logo" src={LogoCombier} alt="" />
            </div> 
            <p className="BottleHub__description">Cliquez sur une bouteille pour découvrir sa fabrication</p>
            <div className="BottleHub__bottleContainer">
                {bottlesData.map((bottleData, index) => {
                    return (
                        <BottleCard id={bottleData.id} data={bottleData} setBottle={modifyStateBottle}/>
                    )
                })}
                {/* <BottleCard id="original" setBottle={modifyStateBottle}/>
                <BottleCard id="elixir" setBottle={modifyStateBottle}/>
                <BottleCard id="blanchette" setBottle={modifyStateBottle}/>
                <BottleCard id="meridor" setBottle={modifyStateBottle}/> */}
            </div>
            <BottleStory bottle={bottle}/>
        </div>
    )
}

export default BottleHub;