import React from 'react'
import { Link } from "react-router-dom";

import "./ElixirCombier.css"

import ElixirTrain from "../../assets/affiche_joueur_carte_1887_6_2fi34.jpg"
import ElixirRaspail from "../../assets/portrait_raspail.jpg"
import ElixirHD from "../../assets/Exilir2485_HD.jpg"
import Elixir2482HD from "../../assets/Exilir2482_HD.jpg"
import ElixirCartonBleu from "../../assets/carton_bleu_elixir_4_2fi90.jpg"
import ElixirColette from "../../assets/extrait_colette.jpg"
import ElixirAffiche from "../../assets/affiche_elixir.jpg"
import ElixirAffiche01 from "../../assets/affiche01_elixir.jpg"
import ElixirAffiche02 from "../../assets/affiche02_elixir.jpg"
import ElixirTestament from "../../assets/archive_petit_courrier_elixir_01-1912.jpg"
import ElixirGigi from "../../assets/gigi-italian-movie-poster.jpeg"

const ElixirCombier = () => {

    React.useEffect(() => {

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

                     var delayInMilliseconds = 8000; //1 second

                    const ElixirTransitionText = () => {
                        document.querySelector('.zoom-text').style.display = "none"
                        document.querySelector('.ElixirCombier__WhatIsIt').style.display = "flex"
                        document.querySelector('.ElixirCombier__WhatIsIt').classList.add('ElixirCombier__opacity__anim')
                    }

                    var myTimeOut = setTimeout(ElixirTransitionText, delayInMilliseconds);

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

            console.log(scrollTop, clientHeight, scrollHeight)

                if( scrollTop + clientHeight == scrollHeight){
                    console.log("je passe en scroll horizontal")
                    document.querySelector('.ElixirCombier').style.overflowX = "hidden";
                } else {
                    document.querySelector('.ElixirCombier').style.overflowX = "initial";
                }
        }

        window.addEventListener('scroll', scrollToRight)
        
        return () => {
            window.removeEventListener('scroll', scrollToRight);
            // clearTimeout(myTimeOut)
            }
    },[]);

    return (
        <div className="ElixirCombier">
            <div className="ElixirCombier__HorizontalBlock">
                <div className="ElixirCombier__HorizontalBlock__slide one">
                    <p className="ElixirCombier__WhatIsIt__Title ElixirCombier__firstslide__anim">ELIXIR COMBIER</p>
                    <div className="ElixirCombier__WhatIsIt">
                        <div className="ElixirCombier__WhatIsIt__Left">
                            <h4 className="ElixirCombier__WhatIsIt__Left__title">Qu'est ce que c'est ?</h4>
                            <p className="ElixirCombier__WhatIsIt__Left__text">Cet élixir, liqueur hygiénique est composée d’une quinzaine d’épices et de plantes infusées avant distillation. Ses ingrédients proviennent de la vallée de la Loire et de contrées beaucoup plus lointaines telles que l’Afrique, l’Inde et l’Asie. Cardamome, muscade, myrrhe, girofle, cannelle, safran, aloès, orange, citron viennent combiner leurs saveurs pour offrir une incroyable persistance aromatique en bouche. </p>
                        </div>
                        <div className="ElixirCombier__WhatIsIt__Right">
                            <img className="ElixirCombier__WhatIsIt__Right__Img" src={ElixirTrain} alt="Affiche Elixir Combier" />
                        </div>
                    </div>
                </div>
                <div className="ElixirCombier__HorizontalBlock__slide two">
                    <div className="ElixirCombier__WhatIsIt__Two">
                        <div className="ElixirCombier__WhatIsIt__Two_container">
                            <img className="ElixirCombier__WhatIsIt__Two__Img" src={ElixirHD} alt="Photo Elixir" />
                        </div>  
                        <div className="ElixirCombier__WhatIsIt__Two_container">
                            <p className="ElixirCombier__WhatIsIt__Two__text"><strong>Allure : </strong>Une limpidité jaune dorée éclatante.</p>
                            <p className="ElixirCombier__WhatIsIt__Two__text"><strong>En bouche : </strong>Sa complexité épicée offre une persistance en bouche, qui peut rappeler, pour les amateurs du genre, celle d’une chartreuse.</p>
                        </div> 
                        <div className="ElixirCombier__WhatIsIt__Two_container">
                            <img className="ElixirCombier__WhatIsIt__Two__Img" src={ElixirCartonBleu} alt="Veille pancarte bleu Elixir" />
                        </div>   
                    </div>
                </div>
                <div className="ElixirCombier__HorizontalBlock__slide three">
                    <div className="Elixir__Combier__Manufacturing">
                        <h4 className="Elixir__Combier__Manufacturing__title">La Fabrication</h4>
                        <div className="Elixir__Combier__Manufacturing__description">
                            <p>1. Sélection et pesage des ingrédients avant macération en cuve.</p>
                            <p>2. Les épices, plantes et agrumes vont infuser durant plusieurs semaines.</p>
                            <p>3. L’ensemble est distillé pour obtenir un esprit des plus aromatiques.</p>
                        </div>
                    </div>
                </div>
                <div className="ElixirCombier__HorizontalBlock__slide four">
                    <div className="ElixirCombier__History">
                        <h3 className="ElixirCombier__History__title">Un peu d'histoire</h3>
                        <p className="ElixirCombier__History__description">
                            C’est en 1852 que Jean-Baptiste Combier met au point la recette de cet élixir inspiré des travaux du célèbre Docteur Raspail.
                            Chimiste et botaniste, François-Vincent Raspail est un philanthrope qui veut œuvrer pour le bien de ses contemporains. Il rédige et publie en 1845 un « Manuel de la santé ». Parmi ses nombreuses recettes, une liqueur médicinale - « L’élixir hygiénique de dessert » - censé procurer une longue vie, apaiser les maux d’estomac et favoriser la digestion.
    
                            Sa recette contient du camphre, dont le botaniste use et abuse dans ses préparations. Thérapeutique certes, mais avec un goût prononcé qui ne plaît pas au plus grand nombre. Jean-Baptiste Combier cherche à conserver les vertus de ce breuvage, tout en le rendant délicieux. Fort de son expérience de confiseur et distillateur, il teste plusieurs recettes. Après de nombreux essais, il parvient à une composition exotique d’herbes et de plantes aromatiques, osé certes, mais l’alchimie fonctionne.
    
                            Le distillateur décide d’envoyer son élixir revu et modifié à Raspail. Opposant notoire au régime, ce dernier est alors emprisonné à la citadelle de Doullens. Il goûte la liqueur et répond aussitôt à Jean-Baptiste. Il la déclare fameuse. Sa lettre de louanges est conservée par la distillerie dans ses archives.
                        </p>
                    </div>
                </div>
                <div className="ElixirCombier__HorizontalBlock__slide five">
                    <div className="ElixirCombier__History__2">
                        <img className="ElixirCombier__History__2__Raspail board" src={ElixirRaspail} alt="Portrait de Raspail" />
                        <img className="ElixirCombier__History__2__Affiche board" src={ElixirAffiche} alt="Affiche Elixir" />
                        <img className="ElixirCombier__History__2__Affiche board" src={ElixirAffiche02} alt="Affiche Elixir" />
                        <img className="ElixirCombier__History__2__Testament board" src={ElixirTestament} alt="Testament Elixir" />
                        <img className="ElixirCombier__History__2__Gigi board" src={ElixirGigi} alt="Elixir Gigi" />
                        <img className="ElixirCombier__History__2__Colette board" src={ElixirColette} alt="Extrait Colette" />
                        <img className="ElixirCombier__History__2__Affiche01 board" src={ElixirAffiche01} alt="Affiche Elixir" />
                        
                    </div>  
                </div>
                <div className="ElixirCombier__HorizontalBlock__slide six">
                    <div className="ElixirCocktail">
                        <div className="ElixirCocktail__container">
                            <div className="ElixirCocktail__container__left">
                                <img className="ElixirCocktail__container__left__img" src={Elixir2482HD} alt="" />
                            </div>
                            <div className="ElixirCocktail__container__right">
                                <h2 className="ElixirCocktail__container__right__title">Savourez-le ...</h2>
                                <p className="ElixirCocktail__container__right__description">Pour savourez au mieux toutes les qualités de l’Elixir Combier, servez-le en fin de repas, bien frais ou sur glace, où il dévoilera toute sa complexité. Pour ls plus aventureux, faites-en bon usage pour revisiter et revigorez des grands classiques du cocktail : Crusta, Mule, Swizzle, Sazerac...</p>
                            </div>
                        </div>
                        <Link to="#BottleHub"><div className="ElixirCocktail__footer">Découvrir un autre produit de la Distillerie Combier</div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ElixirCombier;