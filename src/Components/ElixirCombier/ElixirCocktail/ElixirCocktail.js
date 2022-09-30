import React from "react";
import { Link } from "react-router-dom";

import useDeviceDetect from '../../../useDeviceDetect';

import "./ElixirCocktail.css"

import ElixirCoktailImg from "../../../assets/Exilir2482_HD.jpg"
import CocktailHand from "../../../assets/vintage-hand.svg"

const ElixirCocktail = (props) => {

    const { isMobile } = useDeviceDetect();

    const homeRedirection = () => {
        if(isMobile == true){
            location.reload(); 
        } else {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
    const instagramRedirection = () => {
        window.open('https://www.instagram.com/distilleriecombier/?hl=fr', "_blank") || window.location.replace('https://www.instagram.com/distilleriecombier/?hl=fr');
    }
    const eshopRedirection = () => {
        window.open('https://www.combier.fr/signatures/elixir-combier/', "_blank") || window.location.replace('https://www.facebook.com/pages/category/Company/Combier-Distillerie-152736078083339/');
    }
    const contactRedirection = () => {
        window.open('https://www.combier.fr/distillerie/boutique-et-contact/', "_blank") || window.location.replace('https://www.combier.fr/distillerie/boutique-et-contact/');
    }
    const mentionslegalesRedirection = () => {
        window.open('https://combier.blinkl.com/mentionslegales', "_blank") || window.location.replace('https://www.combier.blinkl.com/mentionslegales');
    }

    const {scrollTop, scrollHeight, clientHeight} = document.documentElement

    console.log(scrollTop, clientHeight, scrollHeight, window.screen.availHeight)

    const pixelToHub = 11750 +  (clientHeight * 3.23)

    const GotoBottleHub = () => {

        if(isMobile == true){
            window.location.replace("https://combier.blinkl.com/?s=")
        } else {
            scrollTo({
                top: pixelToHub,
                left: 0,
                behavior: 'smooth'
            });
        }
    }

    return (
        <div className="OriginalCocktail">
            <div className="OriginalCocktail__container">
                <div className="OriginalCocktail__container__left">
                    <img className="OriginalCocktail__container__left__img" src={ElixirCoktailImg} alt="" />
                </div>
                {props.langSelected == 'FR' ?
                <div className="OriginalCocktail__container__right">
                    <h2 className="OriginalCocktail__container__right__title">Pour savourer...</h2>
                    <p className="OriginalCocktail__container__right__description">au mieux toutes les qualités de l’Elixir Combier, servez-le en fin de repas, bien frais ou sur glace, où il dévoilera toute sa complexité. Pour ls plus aventureux, faites-en bon usage pour revisiter et revigorez des grands classiques du cocktail : Crusta, Mule, Swizzle, Sazerac...</p>
                    <div className="OriginalCoktail__container__right__linkhub" onClick={GotoBottleHub}>
                        {/* <img src={CocktailHand} alt="" /> */}
                        <p >Découvrir un autre produit de la Distillerie </p>
                        <img src={CocktailHand} alt="" />
                    </div>
                    <div className="OriginalCoktail__container__right__linkRecipe" onClick={eshopRedirection}>
                        <p >Recettes et Boutique</p>
                    </div>
                </div>
                :
                <div className="OriginalCocktail__container__right">
                    <h2 className="OriginalCocktail__container__right__title">To savor...</h2>
                    <p className="OriginalCocktail__container__right__description">at best all the qualities of Elixir Combier, serve it at the end of a meal, chilled or on ice, where it will reveal all its complexity. For the more adventurous, make good use of it to revisit and reinvigorate great cocktail classics: Crusta, Mule, Swizzle, Sazerac ... </p>
                    <div className="OriginalCoktail__container__right__linkhub" onClick={GotoBottleHub}>
                        {/* <img src={CocktailHand} alt="" /> */}
                        <p> Discover another product from the Distillery </p>
                        <img src={CocktailHand} alt="" />
                    </div>
                    <div className="OriginalCoktail__container__right__linkRecipe" onClick={eshopRedirection}>
                        <p>Recipes and Shop</p>
                    </div>
                </div>
                }            
            </div>
            <div className="OriginalCocktail__footer">
                <div className="OriginalCocktail__footer__links">
                    {props.langSelected == 'FR' ?
                    <div className="OriginalCocktail__footer__link" onClick={homeRedirection}>Accueil</div>
                    :
                    <div className="OriginalCocktail__footer__link" onClick={homeRedirection}>Home</div>
                    }
                    {props.langSelected == 'FR' ?
                    <div className="OriginalCocktail__footer__link" onClick={eshopRedirection}>Boutique</div>
                    :
                    <div className="OriginalCocktail__footer__link" onClick={eshopRedirection}>E-shop</div>
                    }
                    
                    <div className="OriginalCocktail__footer__link" onClick={instagramRedirection}>Instagram</div>
                    <div className="OriginalCocktail__footer__link" onClick={contactRedirection}>Contact</div>
                </div>
                
                {props.langSelected == 'FR' ?
                <div className="OriginalCocktail__footer__signature " >
                    {/* <p className="OriginalCocktail__footer__link" onClick={mentionslegalesRedirection}>mentions légales</p> */}
                    <Link to="/mentionslegales">mentions légales</Link>
                    <p>L'ABUS D'ALCOOL EST DANGEREUX POUR LA SANTÉ, À CONSOMMER AVEC MODÉRATION</p>
                    <p>© 2022 - Distillé avec amour par Combier et Blinkl</p>
                </div> 
                :
                <div className="OriginalCocktail__footer__signature">
                    <p className="OriginalCocktail__footer__link" >Legal Notice</p>
                    <p>ALCOHOL ABUSE IS DANGEROUS FOR YOUR HEALTH, CONSUME WITH MODERATION</p>
                    <p>© 2022 - Distilled with love by Combier and Blinkl</p>
                </div>     
                } 
            </div>  
        </div>
    )
}

export default ElixirCocktail