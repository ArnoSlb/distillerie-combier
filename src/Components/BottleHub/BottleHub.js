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

    // console.log(props)

    const bottlesData = [
        {
        index: 0,
        id: `original`,
        title: `L'Original Combier`,
        titleEn: `L'Original Combier`,
        img: OriginalCombierImg,
        description: `Une distillation d’écorces d’oranges douces et amères, de l’eau et du sucre.`,
        descriptionEn: `A distillation of sweet and bitter orange peel, water and sugar.`,
        color: `#fd7e14`
        },
        {
        index: 1,
        id: `meridor`,
        title: `Le Gin Meridor`,
        titleEn: `Gin Meridor`,
        img: GinMeridorImg,
        description: `Baies de genévrier, graines de coriandre, écorces de citron, racines d'iris, cubèbe et  pétales de rose.`,
        descriptionEn: `Juniper berries, coriander seeds, lemon peel, iris root, cubeb and rose petals.`,
        color: `#74b6ff`,
        disponible: `Juin`, 
        disponibleEn: `June`  
        },
        {
        index: 2,
        id: `elixir`,
        title: `L'Elixir Combier`,
        titleEn: `Elixir Combier`,
        img: ElixirCombierImg,
        description: `Un mélange exotique d’épices et de plantes aromatiques soigneusement infusées avant distillation.`,
        descriptionEn: `An exotic blend of spices and aromatic plants carefully infused before distilling.`,
        color: `#dc3545`,
        disponible: `Septembre`,        
        disponibleEn: `September`   
        },   
        {
        index:3,
        id: `blanchette`,
        title: `L'Absinthe Blanchette`,
        titleEn: `Absinthe Blanchette`,
        img: AbsintheBlanchetteImg,
        description: `Une authentique absinthe blanche avec un style "suisse" à dominante anisée. `,
        descriptionEn: `An authentic "Swiss" style white absinthe, with a dominant anise-flavor.`,
        color: `#74b6ff`,
        disponible:`Décembre`,       
        disponibleEn:`December`   
        }     
    ]

    const [bottle, setBottle] = useState("original");

    const modifyStateBottle = (alcool) => {
      setBottle(alcool)
    }

 
    React.useEffect(() => {
        if(window.location.search != undefined && window.location.search != null && window.location.search != ""){
            console.log("search ", window.location.search)
            const cocktailSearch = window.location.search.substring(3);
            console.log(cocktailSearch)
    
            if (cocktailSearch == "elixir" || cocktailSearch == "meridor" || cocktailSearch == "blanchette" || cocktailSearch == "original"){
                
                setBottle(cocktailSearch)

                document.getElementById("original").firstChild.lastChild.classList.remove("BottleCard__discover--selected")

                if(props.langSelected == "FR"){

                    document.getElementById("original").firstChild.lastChild.innerText = "Selectionner"

                    document.getElementById(cocktailSearch).firstChild.lastChild.innerText = "Selectionné"
                    

                } else {

                    document.getElementById("original").firstChild.lastChild.innerText = "Select"

                    document.getElementById(cocktailSearch).firstChild.lastChild.innerText = "Selected"

                }

                document.getElementById(cocktailSearch).firstChild.lastChild.classList.add("BottleCard__discover--selected")
                
            }
        }
    },[])


    // console.log(scrollTop, clientHeight, scrollHeight, window.pageYOffset)
    
    // console.clear();
    
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