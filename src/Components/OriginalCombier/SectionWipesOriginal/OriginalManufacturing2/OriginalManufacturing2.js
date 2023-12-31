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
            let delay = 0.3;

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

        const ElementsToAnimate2 = document.querySelectorAll('.polaroid');

        const observer2 = new IntersectionObserver((entries) => {

            // we can see all the details available
            // console.log(entries)
            let delay = 1;

            entries.forEach(entry => {

                delay = delay + 1;
                // When the element.s are in the user browser we add the class reponsible for the animation
                if (entry.isIntersecting){
                    // console.log(entry)
                    // console.log(delay)
                    entry.target.classList.add('reveal'),
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
        ElementsToAnimate2.forEach(Element => {
            observer2.observe(Element)
        })  
    },[])

    return(
        <div className="OriginalManufacturing2">
            <div className="OriginalManufacturing2__1 Original__manufacturing__anim">
                <img className="polaroid" src={ImgOriginalManufacturing1} alt="" />
                {props.langSelected == 'FR' ? 
                <p>1. Autrefois transportées entières par la Loire puis épluchées à Saumur, la distillerie reçoit aujourd’hui les écorces préalablement séchées sous le soleil haïtien. Elles sont réhydratées dans l’eau durant 24h pour leur rendre leur forme initiale.</p>
                :
                <p>1. Transported on the Loire barges, oranges initially arrived as whole fruit and were peeled in Saumur. Today the distillery receives its orange peel ready dried under the Haitian sun. The peel is rehydrated in water for 24 hours to return it to its original state.</p>
                }       
            </div>
            <div className="OriginalManufacturing2__2 Original__manufacturing__anim">
                <img className="polaroid" src={ImgOriginalManufacturing2} alt="" />
                {props.langSelected == 'FR' ?
                <p>2. Zestage des écorces : on sépare la partie intérieure la plus amère, le ziste, de la partie extérieure, le zeste, en les passant une à une à la main dans une zesteuse, une machine à enlever le zeste. Cette étape primordiale et traditionnelle assure une liqueur ronde des plus aromatiques.</p>
                :
                <p>2. Zesting the peel: the bitterest inner part, the ziste, is separated from the outer part, the zest, by pushing the peel by hand through a zester machine to remove the zest. This essential and traditional process ensures a highly aromatic and rounded liquor.</p>
                }
            </div>
            <div className="OriginalManufacturing2__3 Original__manufacturing__anim">
                <img className="polaroid" src={ImgOriginalManufacturing3} alt="" />
                {props.langSelected == 'FR' ?
                <p>3. Les écorces zestées sont ensuite mise à macérer dans de l'alcool neutre durant 24h et commencent ici à exprimer tout leur parfum.</p>
                :
                <p>3. The zested rinds are macerated in neutral alcohol for 24 hours when they begin to express all their fragrance.</p>
                }
            </div>
        </div>
    )
}

export default OriginalManufacturing2;