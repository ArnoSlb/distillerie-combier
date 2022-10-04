import React from 'react'

import "./ElixirCombier.css"

import ElixirTrain from "../../assets/affiche_joueur_carte_1887_6_2fi34.jpg"
import ElixirRaspail from "../../assets/portrait_raspail.jpg"
import ElixirHD from "../../assets/Exilir2485_HD.jpg"
import ElixirCartonBleu from "../../assets/carton_bleu_elixir_4_2fi90.jpg"
import ElixirAffiche from "../../assets/affiche_elixir.jpg"
import ElixirAffiche01 from "../../assets/affiche01_elixir.jpg"
import ElixirAffiche02 from "../../assets/affiche02_elixir.jpg"
import ElixirFamille from "../../assets/elixir_combier_pour_toute_famille_1900_4bfi79.jpg"

import ElixirCocktail from "./ElixirCocktail/ElixirCocktail"

import useDeviceDetect from '../../useDeviceDetect';

const ElixirCombier = (props) => {

    const { isMobile } = useDeviceDetect();

    const GotoBottleHub = () => {

        const {scrollTop, scrollHeight, clientHeight} = document.documentElement

        // console.log(scrollTop, clientHeight, scrollHeight, window.screen.availHeight)

        const pixelToHub = 4680 +  (clientHeight * 3.23)

        window.scrollTo({
            top: pixelToHub,
            left: 0,
            behavior: 'smooth'
        });
    }

    React.useEffect(() => {

        var delayInMilliseconds = 1000; //1 second

        const ElixirTransitionText = () => {
            // document.querySelector('.zoom-text').style.display = "none"
            // document.querySelector('.ElixirCombier__WhatIsIt').style.display = "flex"
            document.querySelector('.ElixirCombier__WhatIsIt').classList.add('ElixirCombier__opacity__anim')
        }

        var myTimeOut = setTimeout(ElixirTransitionText, delayInMilliseconds);

         // We select every elements with the class .anim
         const ElementsToAnimate = document.querySelectorAll('.ElixirCombier__firstslide__anim');

         //We create an intersection observer to know when the element is in the viewport
         // More details here : https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API
         const observer = new IntersectionObserver((entries) => {
 
             // we can see all the details available
             // console.log(entries)
             let delay = 4;
 
             entries.forEach(entry => {
 
                 delay = delay + 1;
                 // When the element.s are in the user browser we add the class reponsible for the animation
                 if (entry.isIntersecting){
                     // console.log(entry)
                     // console.log(delay)
                     entry.target.classList.add('zoom-text'),
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

        // si on est rendu en bas de la page alors .ElixierCombier.style.overflowX: hidden; */
        // else overlowX: initial
        //Sinon le scroll passe en horizontal alors qu'on est pas rendu en bas de la page

        const scrollToRight = () => {

            const {scrollTop, scrollHeight, clientHeight} = document.documentElement

            // console.log(scrollTop, clientHeight, scrollHeight)

                if( scrollTop + clientHeight == scrollHeight){
                    // console.log("je passe en scroll horizontal")
                    document.querySelector('.ElixirCombier').style.overflowX = "hidden";
                } else {
                    document.querySelector('.ElixirCombier').style.overflowX = "initial";
                }
        }

        // {isMobile ? 
        //     console.log("mobile detected")
        //     : 
        //     window.addEventListener('scroll', scrollToRight)
        // }
        
        return () => {
            window.removeEventListener('scroll', scrollToRight);
            // clearTimeout(myTimeOut)
            }
    },[]);

    return (
        <div className="ElixirCombier">
            <div className="ElixirCombier__HorizontalBlock">
                <div className="ElixirCombier__HorizontalBlock__slide one">
                    <div className="ElixirCombier__WhatIsIt">
                    {props.langSelected == 'FR' ?
                        <div className="ElixirCombier__WhatIsIt__Left">
                            <h4 className="ElixirCombier__WhatIsIt__Left__title">Qu'est ce que c'est ?</h4>
                            <p className="ElixirCombier__WhatIsIt__Left__text">Liqueur hygénique de dessert, l'Elixir Combier est composée d’une quinzaine d’épices et de plantes infusées avant distillation. Ses ingrédients proviennent autant de la vallée de la Loire que de contrées beaucoup plus lointaines telles que l’Afrique, l’Inde et l’Asie.</p>
                            <p className="ElixirCombier__WhatIsIt__Left__text">Cardamome, muscade, myrrhe, girofle, cannelle, safran, aloès, orange, citron viennent combiner leurs saveurs pour offrir une incroyable persistance aromatique en bouche. D'une limpidité jaune dorée éclatante, sa complexité épicée peut rappeler, pour les amateurs du genre, celle d’une chartreuse.</p>
                        </div>
                    :
                        <div className="ElixirCombier__WhatIsIt__Left">
                            <h4 className="ElixirCombier__WhatIsIt__Left__title">What is it ?</h4>
                            <p className="ElixirCombier__WhatIsIt__Left__text">A classic hygenic dessert liqueur, Elixir Combier comprises over fifteen spices and plants infused before distillation. Its ingredients are sourced both from the Loire Valley and more distant lands such as Africa, India and Asia.</p>
                            <p className="ElixirCombier__WhatIsIt__Left__text">The combination of cardamom, nutmeg, myrrh, cloves, cinnamon, saffron, aloe, orange, and lemon flavors offer an incredible aromatic persistence in the mouth. A dazzling clear golden yellow, its spicy complexity will appeal to lovers of Chartreuse.</p>

                        </div>
                    }
                        <div className="ElixirCombier__WhatIsIt__Right">
                            <img className="ElixirCombier__WhatIsIt__Right__Img" src={ElixirHD} alt="Affiche Elixir Combier" />
                        </div>
                    </div>
                </div>
                <div className="ElixirCombier__HorizontalBlock__slide four">
                <img className='ElixirRaspail' src={ElixirRaspail}></img>
                {props.langSelected == 'FR' ?
                    <div className="ElixirCombier__History">
                        <h3 className="ElixirCombier__History__title">Bref rappel historique</h3>
                        <p className="ElixirCombier__History__description">
                            C’est en 1852 que Jean-Baptiste Combier met au point la recette de cet élixir inspiré des travaux du célèbre Docteur Raspail. Parmi ses nombreuses recettes médicinales, celle d’une « Liqueur hygiénique de dessert » - censé procurer longue vie et favoriser la digestion. 
                            Jean-Baptiste Combier cherche à conserver les vertus de ce breuvage tout en le rendant délicieux. Après de nombreux essais de distillation, l’alchimie fonctionne. Le distillateur décide d’envoyer son élixir amélioré à Raspail, qui la déclare fameuse. Sa lettre de louanges est conservée dans les archives de la distillerie
                        </p>
                    </div>
                :
                    <div className = "ElixirCombier__History">
                        <h3 className = "ElixirCombier__History__title">Brief historical reminder</h3>
                        <p className = "ElixirCombier__History__description">
                            It was in 1852 that Jean-Baptiste Combier perfected the recipe for this elixir inspired by the work of the famous Doctor Raspail. Among his many medicinal recipes, that of a "Hygienic Dessert Liqueur" - supposed to provide long life and promote digestion. Jean-Baptiste Combier seeks to preserve the virtues of this beverage while making it delicious. After many distillation trials, the alchemy works. The distiller decides to send his improved elixir to Raspail, who declares it famous. His letter of praise is kept in the archives of the distillery.
                        </p>
                    </div>
                }
                </div>
                <div className="ElixirCombier__HorizontalBlock__slide five">
                    <div className="ElixirCombier__History__2">
                        <img className="ElixirCombier__History__2__Affiche board" src={ElixirAffiche} alt="Affiche Elixir" />
                        <img className="ElixirCombier__History__2__Affiche board" src={ElixirAffiche02} alt="Affiche Elixir" />
                        <img className="ElixirCombier__History__2__Affiche board" src={ElixirCartonBleu} alt="Affiche Elixir" />
                        <img className="ElixirCombier__History__2__Affiche01 board" src={ElixirAffiche01} alt="Affiche Elixir" />
                        <img className="ElixirCombier__History__2__Affiche01 board" src={ElixirTrain} alt="Affiche Elixir" />
                        <img className="ElixirCombier__History__2__Affiche01 board" src={ElixirFamille} alt="Affiche Elixir" /> 
                    </div>  
                </div>
                <ElixirCocktail langSelected={props.langSelected}/>
            </div>
        </div>
    )
}

export default ElixirCombier;