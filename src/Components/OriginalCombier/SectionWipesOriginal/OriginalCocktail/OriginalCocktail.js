import React from "react";
import { Link } from "react-router-dom";

import "./OriginalCocktail.css"

import OriginalCoktailImg from "../../../../assets/LOriginalCombier658_HD.jpg"
import CocktailHand from "../../../../assets/Hand.png"
import Instagram from "../../../../assets/icons/instagram.png"
import Facebook from "../../../../assets/icons/facebook.png"
import Home from "../../../../assets/icons/home.png"
import Contact from "../../../../assets/icons/contact.png"

const OriginalCocktail = (props) => {

    const homeRedirection = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    const instagramRedirection = () => {
        window.open('https://www.instagram.com/distilleriecombier/?hl=fr', "_blank") || window.location.replace('https://www.instagram.com/distilleriecombier/?hl=fr');
    }
    const facebookRedirection = () => {
        window.open('https://www.facebook.com/pages/category/Company/Combier-Distillerie-152736078083339/', "_blank") || window.location.replace('https://www.facebook.com/pages/category/Company/Combier-Distillerie-152736078083339/');
    }
    const contactRedirection = () => {
        window.open('https://www.combier.fr/distillerie/boutique-et-contact/', "_blank") || window.location.replace('https://www.combier.fr/distillerie/boutique-et-contact/');
    }

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
                    <div className="OriginalCoktail__container__right__linkhub" onClick={GotoBottleHub}>
                        <img src={CocktailHand} alt="" />
                        <p >Découvrir un autre produit de la Distillerie </p>
                        <img src={CocktailHand} alt="" />
                    </div>
                    <div className="OriginalCoktail__container__right__linkRecipe" onClick={contactRedirection}>
                        <p >Recette et Boutique</p>
                    </div>
                </div>
                :
                <div className="OriginalCocktail__container__right">
                    <h2 className="OriginalCocktail__container__right__title">Savor it ...</h2>
                    <p className="OriginalCocktail__container__right__description"> pure to end a meal smoothly or in one of the great classics of the cocktail where the Original Combier brings all its liveliness: the Margarita, the Long Island, the Cosmopolitan, the Sidecar. The list is long. In the kitchen, he brings a gastronomic note to preparations and flambages: soufflés, sponge cake, jams, fruit salads or the famous crêpes Suzette.</p>
                    <div className="OriginalCoktail__container__right__linkhub" onClick={GotoBottleHub}>
                        <img src={CocktailHand} alt="" />
                        <p> Discover another product from the Distillery </p>
                        <img src={CocktailHand} alt="" />
                    </div>
                    <div className="OriginalCoktail__container__right__linkRecipe" onClick={contactRedirection}>
                        <p>Recipe and Shop</p>
                    </div>
                </div>
                
                }            
            </div>
            <div className="OriginalCocktail__footer">
                <img className="OriginalCocktail__footer__icon" src={Home} alt="" onClick={homeRedirection}/>
                <img className="OriginalCocktail__footer__icon" src={Instagram} alt="" onClick={instagramRedirection}/>
                <img className="OriginalCocktail__footer__icon" src={Facebook} alt="" onClick={facebookRedirection}/>
                <img className="OriginalCocktail__footer__icon" src={Contact} alt="" onClick={contactRedirection}/>
            </div>          
        </div>
    )
}

export default OriginalCocktail