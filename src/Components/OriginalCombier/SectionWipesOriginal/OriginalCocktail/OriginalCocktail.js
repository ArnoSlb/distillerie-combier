import React from "react";
import { Link } from "react-router-dom";

import "./OriginalCocktail.css"

import OriginalCoktailImg from "../../../../assets/LOriginalCombier658_HD.jpg"

const OriginalCocktail = () => {
    return (
        <div className="OriginalCocktail">
            <div className="OriginalCocktail__container">
                <div className="OriginalCocktail__container__left">
                    <img className="OriginalCocktail__container__left__img" src={OriginalCoktailImg} alt="" />
                </div>
                <div className="OriginalCocktail__container__right">
                    <h2 className="OriginalCocktail__container__right__title">Savourez-le...</h2>
                    <p className="OriginalCocktail__container__right__description">pur pour terminer un repas en douceur ou dans un des grands classiques du cocktail où l’Original Combier apporte toute sa vivacité : la Margarita, le Long Island, le Cosmopolitan, le Sidecar. La liste est longue. En cuisine, il apporte la note gastronomique aux préparations et aux flambages : soufflés, génoises, confitures, salades de fruits ou les fameuses crêpes Suzette.</p>
                </div>
            </div>
            <Link to="#BottleHub"><div className="OriginalCocktail__footer">Découvrir un autre produit de la Distillerie Combier</div></Link>
        </div>
    )
}

export default OriginalCocktail