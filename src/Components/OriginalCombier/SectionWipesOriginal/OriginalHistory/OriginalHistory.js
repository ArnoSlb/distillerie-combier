import React from "react";

import "./OriginalHistory.css"

import OriginalHistoryBottle from "../../../../assets/original_history_bottle.jpg"
import OriginalHistoryArchive from "../../../../assets/archives_etiquette_triple_sec.png"
import OriginalHistoryBeaurepaire from "../../../../assets/archives_municipales_rue_beaurepaire.jpg"
import OriginalHistoryPub from "../../../../assets/pub_ancienne_curacao_combier.png"

const OriginalHistory = () => {
    return(
        <div className="OriginalHistory">
            {/* <h1 className="OriginalHistory__title">L'Histoire de l'Original Combier</h1> */}
            <div className="OriginalHistory__container">
                <div className="OriginalHistory__container__left">
                    <h2 className="OriginalHistory__container__left__title1">L'INVENTION DU TRIPLE SEC</h2>
                    <h2 className="OriginalHistory__container__left__title">ou l'Histoire de l'Original Combier</h2>
                    <p className="OriginalHistory__container__left__description">La Hollande, l’île de Curaçao, la Vallée de la Loire : cette improbable conjonction va donner des fruits inattendus ! L’Original Combier a été d’abord élaboré avec un alambic situé dans l’arrière-boutique de la confiserie Combier-Destre, créée en décembre 1834 par Jean-Baptiste Combier et son épouse Joséphine Destre. Très probablement inspiré par ses liens familiaux avec la Hollande - détenant alors l’Île de Curaçao, dans les Caraïbes – et profitant de la livraison régulière d’agrumes par la Loire, Jean-Baptiste Combier met au point une technique de distillation des écorces qui lui permet d’obtenir la toute première liqueur d’oranges transparente : le Triple Sec.</p>
                </div>
                <div className="OriginalHistory__container__right">
                    {/* <img className="OriginalHistory__container__right_OriginalHistoryBottle" src={OriginalHistoryBottle} alt="" /> */}
                    <img className="OriginalHistory__container__right_OriginalHistoryArchive" src={OriginalHistoryArchive} alt="" />
                    {/* <img className="OriginalHistory__container__right_OriginalHistoryBeaurepaire" src={OriginalHistoryBeaurepaire} alt="" /> */}
                    <img className="OriginalHistory__container__right_OriginalHistoryPub" src={OriginalHistoryPub} alt="" />
                </div>
            </div>
        </div>
    )
}

export default OriginalHistory