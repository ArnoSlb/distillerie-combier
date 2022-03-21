import React from "react";

import "./OriginalManufacturing.css";

const OriginalManufacturing = (props) => {
    return(
        <div className="OriginalManufacturing">
            <div className="OriginalManufacturing__left"></div>
            {props.langSelected == 'FR' ?
            <div className="OriginalManufacturing__right">
                <h1 className="OriginalManufacturing__right__title">Tout part de l'orange</h1>
                <p className="OriginalManufacturing__right__description">L’Original Combier Triple Sec est fabriqué à partir d’écorces d’oranges d’Haïti macérées dans l’alcool pendant 24 heures. Leur distillation dans les alambics en cuivre centenaires procure une liqueur hautement parfumée aux saveurs douces et amères.</p>
            </div>
            :
            <div className="OriginalManufacturing__right">
                <h1 className="OriginalManufacturing__right__title">Everything begins with orange</h1>
                <p className="OriginalManufacturing__right__description">
                Original Combier Triple Sec is made from Haitian orange peel macerated in alcohol for 24 hours. Distillation in 19th-century copper stills produces a highly fragrant liquor with sweet and bitter flavors.</p>
            </div>
            }
            
        </div>
    )
}

export default OriginalManufacturing;