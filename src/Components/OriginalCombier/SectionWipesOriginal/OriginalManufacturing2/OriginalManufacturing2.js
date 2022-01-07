import React from "react";

import "./OriginalManufacturing2.css";

import ImgOriginalManufacturing1 from "../../../../assets/original_manufacturing_1.jpg"
import ImgOriginalManufacturing2 from "../../../../assets/original_manufacturing_2.jpg"
import ImgOriginalManufacturing3 from "../../../../assets/original_manufacturing_3.jpg"

const OriginalManufacturing2 = (props) => {

    React.useEffect(() => {

        // We select every elements with the class .anim
        const ElementsToAnimate = document.querySelectorAll('.Original__manufacturing__anim');

        //We create an intersection observer to know when the element is in the viewport
        // More details here : https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API
        const observer = new IntersectionObserver((entries) => {

            // we can see all the details available
            // console.log(entries)
            let delay = 1;

            entries.forEach(entry => {

                delay = delay + 0.4;
                // When the element.s are in the user browser we add the class reponsible for the animation
                if (entry.isIntersecting){
                    // console.log(entry)
                    // console.log(delay)
                    entry.target.classList.add('slide-right'),
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
        ElementsToAnimate.forEach(Element => {
            observer.observe(Element)
        })  
    },[])

    return(
        <div className="OriginalManufacturing2">
            <div className="OriginalManufacturing2__1 Original__manufacturing__anim">
                <img src={ImgOriginalManufacturing1} alt="" />
                {props.langSelected == 'FR' ? 
                <p>1. Les écorces sont réhydratées dans l'eau durant 24h pour leur rendre leur forme initiale.</p>
                :
                <p>1. The barks are rehydrated in water for 24 hours to return them to their initial shape.</p>
                }       
            </div>
            <div className="OriginalManufacturing2__2 Original__manufacturing__anim">
                <img src={ImgOriginalManufacturing2} alt="" />
                {props.langSelected == 'FR' ?
                <p>2. Zestage des écorces : on sépare la partie intérieure la plus amère, le ziste, de la partie extérieure, le zeste, en les passant une à une à la main dans une zesteuse, une machine à enlever le zeste. Cette étape primordiale et traditionnelle assure une liqueur ronde des plus aromatiques.</p>
                :
                <p>2. Zesting the peels: the bitterest inner part, the ziste, is separated from the outer part, the zest, by passing them one by one by hand through a zester, a machine to remove the zest. This primordial and traditional step ensures a round liquor of the most aromatic.</p>
                }
            </div>
            <div className="OriginalManufacturing2__3 Original__manufacturing__anim">
                <img src={ImgOriginalManufacturing3} alt="" />
                {props.langSelected == 'FR' ?
                <p>3. Les écorces zestées sont ensuite mise à macérer dans de l'alcool neutre durant 24h et commencent ici à exprimer tout leur parfum.</p>
                :
                <p>3. The zested rinds are then macerated in neutral alcohol for 24 hours and here begin to express all their fragrance. </p>
                }
            </div>
        </div>
    )
}

export default OriginalManufacturing2;