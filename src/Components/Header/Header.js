import React,{ useState, useRef, useEffect } from "react";
import detectBrowserLanguage from 'detect-browser-language'

import "./Header.css";

import CombierLogo from "../../assets/Combier_Distil_P179.png"
import FranceFlag from "../../assets/france-flag-round-small.png"
import EnglishFlag from "../../assets/english-flag-round-small.png"


const Header = (props) => {


    
    const [lang, setLang] = useState('FR')
    const [langToggle, setLangToggle] = useState(false)

    const ChangeLangToggle = () => {
        setLangToggle(!langToggle)
    }

    const eshopRedirection = () => {
        window.open('https://www.combier.fr/signatures/tous-les-produits-signatures/', "_blank") || window.location.replace('https://www.combier.fr/signatures/tous-les-produits-signatures/');
    }

    const showLang =() => {
        if(langToggle == false ){
            if(lang == 'FR'){
                return (
                    <div className="Header__container__lang__FR">
                        {/* <img className="Header__container__lang__img" src={FranceFlag} alt="" /> */}
                        <p>FR</p>
                    </div>
                )
            } else if (lang == 'EN'){
                return (
                    <div className="Header__container__lang__EN">
                        {/* <img className="Header__container__lang__img" src={EnglishFlag} alt="" /> */}
                        <p>EN</p>
                    </div>
                )
            }

        } else if (langToggle == true){
            return (
            <>
                <div className="Header__container__lang__FR" onClick={selectFR}>
                    {/* <img className="Header__container__lang__img" src={FranceFlag} alt="" /> */}
                    <p>FR</p>
                </div>
                <div>|</div>
                <div className="Header__container__lang__EN" onClick={selectEN}>
                    {/* <img className="Header__container__lang__img" src={EnglishFlag} alt="" /> */}
                    <p>EN</p>
                </div>
            </>
            )
        }
    }

    const selectFR = () => {
        setLang('FR')
        props.func('FR')
    }

    const selectEN = () => {
        setLang('EN')
        props.func('EN')
    }

    React.useEffect(() => {
        // console.log(detectBrowserLanguage())
        if((detectBrowserLanguage() != 'fr-FR') && (detectBrowserLanguage() != 'fr')){
            setLang('EN')
            props.func('EN')
        }
    },)
    
    return (
        <div className="Header">
            <img className="Header__img" src={CombierLogo} alt="" />
            <div className="Header__container">
                <div className="Header__container__lang" onClick={ChangeLangToggle}>
                    {showLang()}
                </div>
                {lang=='FR' ? 
                <div className="Header__container__eshop" onClick={eshopRedirection}>Boutique</div>
                : 
                <div className="Header__container__eshop" onClick={eshopRedirection}>Shop</div>
                }
            </div>
        </div>
    )
}

export default Header;