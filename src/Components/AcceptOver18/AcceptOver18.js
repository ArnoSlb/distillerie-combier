import react from "react";
import { disablePageScroll, enablePageScroll, clearQueueScrollLocks } from 'scroll-lock';

import CombierLogo from "../../assets/Combier_Distil_P179.png"

import "./AcceptOver18.css";

const AcceptOver18 = (props) => {

    

    react.useEffect(() => {

        disablePageScroll();
        
    },[])

    const startDesktopExp = () => {
        clearQueueScrollLocks();
        enablePageScroll();
        document.querySelector(".AcceptOver18__container").style.display = "none"
    }

    return <div className="AcceptOver18">
                <div className="AcceptOver18__container">
                {props.langSelected == 'FR' ?
                    <div className="Map_18__container">
                        <img className="Map_18__container__logo" src={CombierLogo} alt="" />
                        <div className="Map_18__container__accept">
                            <p className="Map_coin__ ">Pour profiter de l'experience, vous devez avoir l'âge requis*.</p>
                            <div className="Map_18__container__btn_start_exp_container">
                                <div id="over18__validate"className="Map_18__container__btn_start_exp" onClick={startDesktopExp}>
                                    <p>Je suis majeur</p>
                                    <p className="thin">Je poursuis l'expérience</p>
                                </div>
                                <div className="Map_18__container__btn_start_exp whitebtn">
                                    <p>Je n'ai pas l'âge requis</p>
                                    <p className="thin">Je ne poursuis pas l'expérience</p>
                                </div>
                            </div>
                            <p className="rules_country">*Voir la légilsation en vigueur dans votre pays de résidence</p>
                        </div>
                    </div>   
                :
                    <div className="Map_18__container">
                        <img className="Map_18__container__logo" src={CombierLogo} alt="" />
                        <div className="Map_18__container__accept">
                            <p className="Map_coin__ ">To enter the experience, you must be of the required age*.</p>
                            <div className="Map_18__container__btn_start_exp_container">
                                <div id="over18__validate"className="Map_18__container__btn_start_exp" onClick={startDesktopExp}>
                                    <p>I am of legal age</p>
                                    <p className="thin">I enter the experience</p>
                                </div>
                                <div className="Map_18__container__btn_start_exp whitebtn">
                                    <p>I am not of legal age</p>
                                    <p className="thin">I don't enter the experience</p>
                                </div>
                            </div>
                            <p className="rules_country">*See the legislation in force in your country of residence</p>
                        </div>
                    </div>   
                }
                     
                </div> 
            </div>
}
export default AcceptOver18;