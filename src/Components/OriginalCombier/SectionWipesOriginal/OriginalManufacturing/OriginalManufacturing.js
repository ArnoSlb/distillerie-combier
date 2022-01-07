import React from "react";

import "./OriginalManufacturing.css";

const OriginalManufacturing = (props) => {
    return(
        <div className="OriginalManufacturing">
            <div className="OriginalManufacturing__left"></div>
            {props.langSelected == 'FR' ?
            <div className="OriginalManufacturing__right">
                <h1 className="OriginalManufacturing__right__title">Tout part de l'orange</h1>
                <p className="OriginalManufacturing__right__description">L’Original Combier Triple Sec est fabriqué à partir d’écorces d’oranges d’Haïti macérées dans l’alcool pendant 24 heures. Leur distillation dans les alambics en cuivre centenaires procure une liqueur hautement parfumée aux saveurs douces et amères. Autrefois transportées entières sur la Loire et épluchées à Saumur, la distillerie reçoit aujourd’hui les écorces préalablement séchées sous le soleil haïtien.</p>
            </div>
            :
            <div className="OriginalManufacturing__right">
                <h1 className="OriginalManufacturing__right__title">Everything starts from orange</h1>
                <p className="OriginalManufacturing__right__description">
Original Combier Triple Sec is made from Haitian orange peels macerated in alcohol for 24 hours. Their distillation in century-old copper stills provides a highly fragrant liquor with sweet and bitter flavors. Once transported whole to the Loire and peeled in Saumur, the distillery now receives the bark previously dried under the Haitian sun.</p>
            </div>
            }
            
        </div>
    )
}

export default OriginalManufacturing;