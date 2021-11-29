import React,{ useState } from "react";

import "./Header.css";

import CombierLogo from "../../assets/Combier_Distil_W.png"
import FranceFlag from "../../assets/france-flag-round-small.png"


const Header = () => {

    let [lang, setLang] = useState('FR')

    const eshopRedirection = () => {
        window.open('https://www.combier.fr/signatures/tous-les-produits-signatures/', "_blank") || window.location.replace('https://www.combier.fr/signatures/tous-les-produits-signatures/');
    }


    return (
        <div className="Header">
            <img className="Header__img" src={CombierLogo} alt="" />
            <div className="Header__container">
                <div className="Header__container__lang">
                    <img className="Header__container__lang__img" src={FranceFlag} alt="" />
                    <p>FR</p>
                </div>
                <div className="Header__container__eshop" onClick={eshopRedirection}>Acheter</div>
            </div>
        </div>
    )
}

export default Header;