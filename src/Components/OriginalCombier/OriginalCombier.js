import React from "react";
import { useEffect } from "react";
import { Controller, Scene } from 'react-scrollmagic';
import SectionWipesOriginal from "./SectionWipesOriginal/SectionWipesOriginal";

import originalCombierPresentation from "../../assets/LOriginalCombier652_HD.jpg"
import OriginalCombierOrange from "../../assets/Orange_HD.png"

import "./OriginalCombier.css";

const OriginalCombier = (props) => {

    console.log(props)

    React.useEffect(() => {

        // We select every elements with the class .anim
        const ElementsToAnimate = document.querySelectorAll('.OriginalCombier__anim');

        //We create an intersection observer to know when the element is in the viewport
        // More details here : https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API
        const observer = new IntersectionObserver((entries) => {

            // we can see all the details available
            // console.log(entries)
            let delay = 0;

            entries.forEach(entry => {

                delay = delay + 1;
                // When the element.s are in the user browser we add the class reponsible for the animation
                if (entry.isIntersecting){
                    // console.log(entry)
                    // console.log(delay)
                    entry.target.classList.add('slide-in-bottom'),
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


        // We select every elements with the class .anim
        const ElementsToAnimate2 = document.querySelectorAll('.OriginalCombier__anim2');

        //We create an intersection observer to know when the element is in the viewport
        // More details here : https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API
        const observer2 = new IntersectionObserver((entries) => {

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
        ElementsToAnimate2.forEach(Element => {
            observer2.observe(Element)
        }) 

        
    },[])

    return (
        <div id="OriginalCombier" className="OriginalCombier">
            {props.langSelected == 'FR' ? 
            <div className="OriginalCombier__title__container">
                <div className="OriginalCombier__title__container__left">
                    <div className="OriginalCombier__title__container__left__whitecontainer">
                        <img className="OriginalCombier__title__container__left__whitecontainer__orange OriginalCombier__anim" src={OriginalCombierOrange} alt="Orange picture" />
                        <h2>Qu'est-ce que c'est ?</h2>
                        <p className="OriginalCombier__anim2">La première liqueur d’oranges triple sec, parfaitement transparente, telle fût l’innovation majeure du fondateur de la distillerie, Jean-Baptiste Combier. Obtenue en distillant les écorces d’oranges douces et amères avec de l’eau et du sucre sans aucun ajout d’arôme, la recette et le procédé sont resté inchangés depuis 1834.</p>
                        <p className="OriginalCombier__anim2"><strong>Allure : </strong> À l’oeil scintillant et cristallin au joli gras fluide et léger, L’Original Combier concentre au nez toute la richesse de la fleur d’oranger. En bouche : Il allie la fraîcheur du zeste d’orange amère à la rondeur de l’orange douce pour une finale gourmande.</p>
                        <p className="OriginalCombier__anim2"><strong>En bouche : </strong> Complexité épicée, safranée, persistance aromatique hors du commun. </p>
                    </div>
                </div>
                <h1 className="OriginalCombier__title">L'Original Combier triple sec</h1>
            </div>
            : 
            <div className="OriginalCombier__title__container">
                <div className="OriginalCombier__title__container__left">
                    <div className="OriginalCombier__title__container__left__whitecontainer">
                        <img className="OriginalCombier__title__container__left__whitecontainer__orange OriginalCombier__anim" src={OriginalCombierOrange} alt="Orange picture" />
                        <h2>What is it ?</h2>
                        <p className="OriginalCombier__anim2">The first triple sec orange liqueur, perfectly transparent, such was the major innovation of the founder of the distillery, Jean-Baptiste Combier. Obtained by distilling sweet and bitter orange peels with water and sugar without any added flavor, the recipe and process have remained unchanged since 1834.</p>
                        <p className="OriginalCombier__anim2"><strong>Pace : </strong> With a sparkling and crystalline eye and a pretty fluid and light fat, L’Original Combier concentrates all the richness of orange blossom on the nose. Taste: It combines the freshness of bitter orange zest with the roundness of sweet orange for a gourmet finish.</p>
                        <p className="OriginalCombier__anim2"><strong>In mouth : </strong> Spicy, saffron complexity, extraordinary aromatic persistence.</p>
                    </div>
                </div>
                <h1 className="OriginalCombier__title">The Original Combier triple sec</h1>
            </div>
            }
            <div className="OriginalCombier__made__container">
                <SectionWipesOriginal langSelected={props.langSelected}/>
            </div>
        </div>
    )
}

export default OriginalCombier;