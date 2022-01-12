import React from "react";
import { Link } from "react-router-dom";

import "./Meridor.css";

import MeridorRose from "../../assets/HD-Roses-05881.jpg"
import MeridorRoses from "../../assets/HD-Roses-05201.jpg"
import MeridorAffiche from "../../assets/GC189.jpg"
import MeridorCocktail from "../../assets/Meridor460.jpg"


const Meridor = (props) => {

    React.useEffect(() => {

        // We select every elements with the class .anim
        const ElementsToAnimate = document.querySelectorAll('.Meridor__anim');

        //We create an intersection observer to know when the element is in the viewport
        // More details here : https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API
        const observer = new IntersectionObserver((entries) => {

            // we can see all the details available
            // console.log(entries)
            let delay = 1;

            entries.forEach(entry => {

                // delay = delay + 0.4;
                // When the element.s are in the user browser we add the class reponsible for the animation
                if (entry.isIntersecting){
                    // console.log(entry)
                    // console.log(delay)
                    entry.target.classList.add('slide-top'),
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

    return (
        <div className="Meridor">
            <div className="Meridor__First">
                <div className="Meridor__empty__margin"></div>
                <div className="Meridor__First__text Meridor__anim">
                    <div className="Meridor__First__text__left">
                        {props.langSelected == 'FR' ?
                        <h1 className="Meridor__First__text__left__title">Qu'est-ce que c'est ?</h1>
                        :
                        <h1 className="Meridor__First__text__left__title">What is it ?</h1>
                        }
                        
                    </div>
                    <div className="Meridor__First__empty"></div>
                </div>
                <div className="Meridor__First__text__right Meridor__anim">
                    <div className="Meridor__First__empty"></div>
                    {props.langSelected == 'FR' ?
                    <div className="Meridor__First__text__right__content">
                        <p>Premier London Dry Gin créé en Vallée de la Loire, Gin Meridor est issu d'une seule et unique distillation de tous les ingrédients dans les alambics d’époque. Baies de genévrier, graines de coriandre, écorces de citron, racines d'iris, cubèbe et réglisse s'associent à merveille aux deux botaniques emblématiques du Val de Loire : pétales de rose et fleurs de sureau ramassés à la main.</p>
                        <p><strong>Allure :</strong> cristalline.</p>
                        <p><strong>En bouche :</strong> nez floral subtilement épicé et finale poivrée.</p>
                    </div> 
                    :
                    <div className = "Meridor__First__text__right__content">
                        <p> The first London Dry Gin created in the Loire Valley, Gin Meridor is made from a single distillation of all the ingredients in period stills. Juniper berries, coriander seeds, lemon peel, iris roots, cubeb and liquorice combine wonderfully with the two emblematic botanicals of the Loire Valley: hand-picked rose petals and elderflower. </p>
                        <p> <strong> Allure: </strong> crystalline. </p>
                        <p> <strong> In the mouth: </strong> subtly spicy floral nose and peppery finish. </p>
                    </div>
                    }
                    
                </div>
                <div className="Meridor__First__text Meridor__anim">
                    <div className="Meridor__First__text__left">
                    {props.langSelected == 'FR' ?
                        <h1 className="Meridor__Second__text__left__title">La fabrication</h1>
                    :
                        <h1 className="Meridor__Second__text__left__title">The making</h1>
                    }
                    </div>
                    <div className="Meridor__First__empty"></div>
                </div>
                <div className="Meridor__First__text__right Meridor__anim">
                    <div className="Meridor__First__empty"></div>
                    {props.langSelected == 'FR' ?
                    <div className="Meridor__First__text__right__content">
                    <p>London Dry Gin, appellation à part entière - distillation de tous les ingrédients, à l'issue dernière distillation on ne rajoute rien. 1er London Dry Gin de la Loire ! 
                    Technicité du traitement des fleurs. Liée à la finesse de l'outil de distillation en col de cygne - chauffe douce en bain marie.</p>
                    </div> 
                    :
                    <div className = "Meridor__First__text__right__content">
                    <p> London Dry Gin, full name - distillation of all the ingredients, at the end of the last distillation nothing is added. 1st London Dry Gin from the Loire!
                    Technicality of flower treatment. Linked to the finesse of the gooseneck distillation tool - gentle heating in a bain-marie. </p>
                    </div>
                    }
                    
                </div>
                <div className="Meridor__First__text Meridor__anim">
                    <img className="MeridorRose" src={MeridorRose} alt="photo rose" />
                    <div className="Meridor__First__empty"></div>
                </div>
                <div className="Meridor__First__text__right Meridor__anim">
                    <div className="Meridor__First__empty"></div>
                    <img className="MeridorRose" src={MeridorRoses} alt="photo rose" />
                </div>
                <div className="Meridor__video Meridor__anim">
                    <iframe width="960" height="539" src="https://www.youtube.com/embed/KpyTMGKLNlM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="Meridor__First__text Meridor__anim">
                    <div className="Meridor__First__text__left">
                    {props.langSelected == 'FR' ?
                    <h1 className="Meridor__First__text__left__title">Bref rappel historique</h1>
                    :
                    <h1 className = "Meridor__First__text__left__title"> Brief historical reminder </h1>
                    }     
                    </div>
                    <div className="Meridor__First__empty"></div>
                </div>
                <div className="Meridor__First__text__right Meridor__anim">
                    <div className="Meridor__First__empty"></div>
                    <div className="Meridor__First__text__right__content">
                    {props.langSelected == 'FR' ?
                    <p>Gin Meridor doit son nom à la dame de Monsoreau devenue Diane de Meridor sous la plume d’Alexandre Dumas. conte autour de Méridor (cf. cocktail "Le Jardin secret"). Passage « Dame de Montsoreau » d'Alexandre Dumas qui avait été immortalisée dans une oeuvre d'Alexandre Dumas.</p>
                    :
                    <p> Gin Meridor owes its name to the Lady of Monsoreau who became Diane de Meridor from the pen of Alexandre Dumas. tale about Méridor (cf. cocktail "Le Jardin secret"). Passage "Dame de Montsoreau" by Alexandre Dumas which had been immortalized in a work by Alexandre Dumas. </p>
                    } 
                    </div> 
                </div>
                <div className="Meridor__First__text Meridor__anim">
                    <img className="MeridorRose" src={MeridorAffiche} alt="photo rose" />
                    <div className="Meridor__First__empty"></div>
                </div>
            </div>
            <div className="Meridor">
                <div className="Meridor__container">
                    <div className="Meridor__container__left">
                        <img className="Meridor__container__left__img" src={MeridorCocktail} alt="" />
                    </div>
                    {props.langSelected == 'FR' ?
                    <div className="Meridor__container__right">
                        <h2 className="Meridor__container__right__title">Savourez-le ...</h2>
                        <p className="Meridor__container__right__description">au mieux toutes les qualités de l’Elixir Combier, servez-le en fin de repas, bien frais ou sur glace, où il dévoilera toute sa complexité. Pour ls plus aventureux, faites-en bon usage pour revisiter et revigorez des grands classiques du cocktail : Crusta, Mule, Swizzle, Sazerac...</p>
                    </div>
                    :
                    <div className = "Meridor__container__right">
                        <h2 className = "Meridor__container__right__title"> Savor it ... </h2>
                        <p className = "Meridor__container__right__description"> all the qualities of Elixir Combier at best, serve it at the end of a meal, chilled or on ice, where it will reveal all its complexity. For the more adventurous, make good use of it to revisit and reinvigorate great cocktail classics: Crusta, Mule, Swizzle, Sazerac ... </p>
                    </div>
                    }
                    
                </div>
                {props.langSelected == 'FR' ?
                <div className="Meridor__footer" onClick={GotoBottleHub}>Découvrir un autre produit de la Distillerie Combier</div>
                :
                <div className = "Meridor__footer" onClick = {GotoBottleHub}> Discover another product from the Distillerie Combier  </div>
                }
            </div>
        </div>
    )
}

export default Meridor;