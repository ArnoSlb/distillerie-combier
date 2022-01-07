import React from "react";
import { Link } from "react-router-dom";

import "./OriginalCocktail.css"

import OriginalCoktailImg from "../../../../assets/LOriginalCombier658_HD.jpg"

const OriginalCocktail = (props) => {

    const GotoBottleHub = () => {

        const {scrollTop, scrollHeight, clientHeight} = document.documentElement

        // console.log(scrollTop, clientHeight, scrollHeight, window.screen.availHeight)

        const pixelToHub = 4680 +  (clientHeight * 3.23)

        window.scrollTo({
            top: pixelToHub,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className="OriginalCocktail">
            <div className="OriginalCocktail__container">
                <div className="OriginalCocktail__container__left">
                    <img className="OriginalCocktail__container__left__img" src={OriginalCoktailImg} alt="" />
                </div>
                {props.langSelected == 'FR' ?
                <div className="OriginalCocktail__container__right">
                    <h2 className="OriginalCocktail__container__right__title">Savourez-le...</h2>
                    <p className="OriginalCocktail__container__right__description">pur pour terminer un repas en douceur ou dans un des grands classiques du cocktail où l’Original Combier apporte toute sa vivacité : la Margarita, le Long Island, le Cosmopolitan, le Sidecar. La liste est longue. En cuisine, il apporte la note gastronomique aux préparations et aux flambages : soufflés, génoises, confitures, salades de fruits ou les fameuses crêpes Suzette.</p>
                </div>
                :
                <div className="OriginalCocktail__container__right">
                    <h2 className="OriginalCocktail__container__right__title">Savor it ...</h2>
                    <p className="OriginalCocktail__container__right__description">
pure to end a meal smoothly or in one of the great classics of the cocktail where the Original Combier brings all its liveliness: the Margarita, the Long Island, the Cosmopolitan, the Sidecar. The list is long. In the kitchen, he brings a gastronomic note to preparations and flambages: soufflés, sponge cake, jams, fruit salads or the famous crêpes Suzette.</p>
                </div>
                }
                
            </div>
            {props.langSelected == 'FR' ?
            <div className="OriginalCocktail__footer" onClick={GotoBottleHub}>Découvrir un autre produit de la Distillerie Combier</div>
            :
            <div className="OriginalCocktail__footer" onClick={GotoBottleHub}>Discover another product from the Distillerie Combier</div>
            }
            
        </div>
    )
}

export default OriginalCocktail