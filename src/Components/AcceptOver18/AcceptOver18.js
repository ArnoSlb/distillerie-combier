import react from "react";
import { disablePageScroll, enablePageScroll, clearQueueScrollLocks } from 'scroll-lock';

import CombierLogo from "../../assets/Combier_Distil_P179.png"

import "./AcceptOver18.css";

const AcceptOver18 = (props) => {

    

    react.useEffect(() => {

        disablePageScroll();
        
    })

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
                            <p className="Map_coin__ margin_btm">Avez-vous plus de 18 Ans ?</p>
                            <div className="Map_18__container__btn_start_exp_container">
                                <p id="over18__validate"className="Map_18__container__btn_start_exp" onClick={startDesktopExp}>Oui</p>
                                <p className="Map_18__container__btn_start_exp">Non</p>
                            </div>
                        </div>
                    </div>   
                :
                    <div className="Map_18__container">
                        <img className="Map_18__container__logo" src={CombierLogo} alt="" />
                        <div className="Map_18__container__accept">
                            <p className="Map_coin__ margin_btm">Are you over 18 ?</p>
                            <div className="Map_18__container__btn_start_exp_container">
                                <p id="over18__validate"className="Map_18__container__btn_start_exp" onClick={startDesktopExp}>Yes</p>
                                <p className="Map_18__container__btn_start_exp">No</p>
                            </div>
                        </div>
                    </div>   
                }
                     
                </div> 
            </div>
}
export default AcceptOver18;