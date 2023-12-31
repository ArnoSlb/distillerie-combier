import React from "react";

import "./OriginalHistory.css"

import OriginalHistoryBottle from "../../../../assets/original_history_bottle.jpg"
import OriginalHistoryArchive from "../../../../assets/archives_etiquette_triple_sec.png"
import OriginalHistoryBeaurepaire from "../../../../assets/archives_municipales_rue_beaurepaire.jpg"
import OriginalHistoryPub from "../../../../assets/pub_ancienne_curacao_combier.png"

import useDeviceDetect from '../../../../useDeviceDetect';

const OriginalHistory = (props) => {

    const { isMobile } = useDeviceDetect();
    let delay

    React.useEffect(() => {

        // We select every elements with the class .anim
        const ElementsToAnimateHistory = document.querySelectorAll('.OriginalHistory__anim');

        //We create an intersection observer to know when the element is in the viewport
        // More details here : https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API
        const observerHistory = new IntersectionObserver((entries) => {

            // we can see all the details available
            // console.log(entries)
            {isMobile ?
                delay = 0
                :
                delay = 1
            }
            

            entries.forEach(entry => {
               
                {isMobile ?
                    delay = 0
                    :
                    delay = delay + 1;
                }
                
                // When the element.s are in the user browser we add the class reponsible for the animation
                if (entry.isIntersecting){
                    entry.target.classList.add('reveal-history'),
                    entry.target.style.animationDelay = delay + "s"
                } else {
                    // if we want the animation to play over and over again
                    // we need to remove the class 
                    // if we want the naimation to only play ONE time
                    // let the "else" instrcution empty
                    // entry.target.classList.remove('slide-right')
                }
            })
        })

        //We have to loop on every elements to observe them individually
        ElementsToAnimateHistory.forEach(Element => {
            observerHistory.observe(Element)
        }) 
    },[]) 

    return(
        <div className="OriginalHistory">
            {/* <h1 className="OriginalHistory__title">L'Histoire de l'Original Combier</h1> */}
            <div className="OriginalHistory__container">
                {props.langSelected == 'FR' ? 
                <div className="OriginalHistory__container__left OriginalHistory__anim">
                    <h2 className="OriginalHistory__container__left__title2 OriginalHistory__anim">Décembre 1834</h2>
                    {/* <p></p> */}
                    <h2 className="OriginalHistory__container__left__title1 OriginalHistory__anim">L'INVENTION DU TRIPLE SEC</h2>
                    <h2 className="OriginalHistory__container__left__title OriginalHistory__anim">ou l'Histoire de L'Original Combier</h2>
                    <p className="OriginalHistory__container__left__description OriginalHistory__anim">La Hollande, l’île de Curaçao, la Vallée de la Loire : cette improbable conjonction va donner des fruits inattendus ! L’Original Combier a été d’abord élaboré avec un alambic situé dans l’arrière-boutique de la confiserie Combier-Destre, créée en décembre 1834 par Jean-Baptiste Combier et son épouse Joséphine Destre. Très probablement inspiré par ses liens familiaux avec la Hollande - détenant alors l’Île de Curaçao, dans les Caraïbes – et profitant de la livraison régulière d’agrumes par la Loire, Jean-Baptiste Combier met au point une technique de distillation des écorces qui lui permet d’obtenir la toute première liqueur d’oranges transparente : le Triple Sec.</p>
                </div>
                :
                <div className="OriginalHistory__container__left OriginalHistory__anim">
                    <h2 className="OriginalHistory__container__left__title1 OriginalHistory__anim">December 1834</h2>
                    {/* <p></p> */}
                    <h2 className="OriginalHistory__container__left__title1 OriginalHistory__anim">THE INVENTION OF TRIPLE SEC</h2>
                    <h2 className="OriginalHistory__container__left__title OriginalHistory__anim">or the History of L'Original Combier</h2>
                    <p className="OriginalHistory__container__left__description OriginalHistory__anim">Holland, the island of Curaçao, the Loire Valley: this improbable conjunction was to bear unexpected fruits! L'Original Combier was first made in a small copper still in the back room of the Combier-Destre confectionery shop, opened in Saumur in December 1834 by Jean-Baptiste Combier and his wife, Joséphine Destre. 
                    At the time, the island of Curaçao in the Caribbean was owned by the Dutch. Very likely inspired by his wife's family ties with Holland, Jean-Baptiste Combier perfected a technique of distilling the peel from the citrus fruits regularly delivered by barges on the Loire. His invention allowed him to create the first completely transparent orange liqueur: Triple Sec.</p>
                </div>
                }
                
                <div className="OriginalHistory__container__right">
                    {/* <img className="OriginalHistory__container__right_OriginalHistoryBottle" src={OriginalHistoryBottle} alt="" /> */}
                    <img className="OriginalHistory__container__right_OriginalHistoryArchive OriginalHistory__anim" src={OriginalHistoryArchive} alt="" />
                    {/* <img className="OriginalHistory__container__right_OriginalHistoryBeaurepaire" src={OriginalHistoryBeaurepaire} alt="" /> */}
                    <img className="OriginalHistory__container__right_OriginalHistoryPub OriginalHistory__anim" src={OriginalHistoryPub} alt="" />
                </div>
            </div>
        </div>
    )
}

export default OriginalHistory;