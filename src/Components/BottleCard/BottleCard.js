import React from "react";

import './BottleCard.css';
import Picture from '../../assets/original_combier.jpg'

const BottleCard =(props) => {

    // console.log(props)

    React.useEffect(() => {

        // We select every elements with the class .anim
        const ElementsToAnimate = document.querySelectorAll('.BottleCard__anim');

        //We create an intersection observer to know when the element is in the viewport
        // More details here : https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API
        const observer = new IntersectionObserver((entries) => {

            // we can see all the details available
            // console.log(entries)
            let delay = 0;

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

        document.querySelector('.BottleHub__bottleContainer').firstChild.classList.add('BottleCard--selected');
        
    },[])

    const bottleSelected = (e) => {

        let BottleHubContainer = e.target.parentNode.parentNode
        let targetCard = e.target.parentNode;
        let idBottle = targetCard.getAttribute("id")

        console.log(BottleHubContainer.childNodes)

        BottleHubContainer.childNodes.forEach(card => {
            card.classList.remove('BottleCard--selected')
        })
        e.target.parentNode.classList.add('BottleCard--selected')
        
        if(idBottle == "elixir"){
            document.querySelector('.BottleCard--selected').style.borderColor = "#dc3545"
        }else if (idBottle == "meridor") {
            document.querySelector('.BottleCard--selected').style.borderColor = "#74b6ff"
        } else if (idBottle == "blanchette"){
            document.querySelector('.BottleCard--selected').style.borderColor = "#adaaa2"
        }else {
            document.querySelector('.BottleCard--selected').style.borderColor = "rgb(255, 165, 47)"
        }

        props.setBottle(idBottle)
    }


    return (
        <div className="BottleCard BottleCard__anim" id={props.data.id}>
            <img className="BottleCard__picture" src={props.data.img} alt="" />
            <h3 className="BottleCard__title">{props.data.title}</h3>
            <p className="BottleCard__description">{props.data.description}</p>
            <div className="BottleCard__discover" onClick={bottleSelected}>Découvrir</div>
            <img src="../../assets/Combier_logo.png" alt="" />
        </div>
    )
}

export default BottleCard;