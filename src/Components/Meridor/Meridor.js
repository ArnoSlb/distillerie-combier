import React from "react";
import { Link } from "react-router-dom";

import useDeviceDetect from '../../../src/useDeviceDetect';

import "./Meridor.css";

import MeridorRose from "../../assets/HD-Roses-05881.jpg"
import MeridorRoses from "../../assets/HD-Roses-05201.jpg"
import MeridorAffiche from "../../assets/GC189.jpg"
import MeridorCocktail from "../../assets/Meridor460.jpg"
import CocktailHand from "../../../src/assets/vintage-hand.svg"


const Meridor = (props) => {

    React.useEffect(() => {

        // We select every elements with the class .anim
        const ElementsToAnimate = document.querySelectorAll('.Meridor__anim');

        //We create an intersection observer to know when the element is in the viewport
        // More details here : https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API
        const observer = new IntersectionObserver((entries) => {

            // we can see all the details available
            // console.log(entries)
            let delay = 0.6;

            entries.forEach(entry => {

                // delay = delay + 0.4;
                // When the element.s are in the user browser we add the class reponsible for the animation
                if (entry.isIntersecting){
                    // console.log(entry.target)
                    // console.log(delay)
                    entry.target.classList.add('slide-top-Meridor'),
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

    const { isMobile } = useDeviceDetect();

    const homeRedirection = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    const instagramRedirection = () => {
        window.open('https://www.instagram.com/distilleriecombier/?hl=fr', "_blank") || window.location.replace('https://www.instagram.com/distilleriecombier/?hl=fr');
    }
    const eshopRedirection = () => {
        window.open('https://www.combier.fr/signatures/gin-meridor/', "_blank") || window.location.replace('https://www.facebook.com/pages/category/Company/Combier-Distillerie-152736078083339/');
    }
    const contactRedirection = () => {
        window.open('https://www.combier.fr/distillerie/boutique-et-contact/', "_blank") || window.location.replace('https://www.combier.fr/distillerie/boutique-et-contact/');
    }

    const GotoBottleHub = () => {

        const {scrollTop, scrollHeight, clientHeight} = document.documentElement

        // console.log(scrollTop, clientHeight, scrollHeight, window.screen.availHeight)

        

        const pixelToHub = 11750 +  (clientHeight * 3.23)

        window.scrollTo({
            top: pixelToHub,
            left: 0,
            behavior: 'smooth'
        });
    }


    return (
        <div className="Meridor">
            <div className="Meridor_bg_container">
                <div className="Meridor_bg_sticky">
                    <img src={MeridorRose} alt="" />
                </div>
            </div>
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
            <div className="OriginalCocktail">
            <div className="OriginalCocktail__container">
                <div className="OriginalCocktail__container__left">
                    <img className="OriginalCocktail__container__left__img" src={MeridorCocktail} alt="" />
                </div>
                {props.langSelected == 'FR' ?
                <div className="OriginalCocktail__container__right">
                    <h2 className="OriginalCocktail__container__right__title">Savourez-le...</h2>
                    <p className="OriginalCocktail__container__right__description">pur pour terminer un repas en douceur ou dans un des grands classiques du cocktail où l’Original Combier apporte toute sa vivacité : la Margarita, le Long Island, le Cosmopolitan, le Sidecar. La liste est longue. En cuisine, il apporte la note gastronomique aux préparations et aux flambages : soufflés, génoises, confitures, salades de fruits ou les fameuses crêpes Suzette.</p>
                    <div className="OriginalCoktail__container__right__linkhub" onClick={GotoBottleHub}>
                        {/* <img src={CocktailHand} alt="" /> */}
                        <p >Découvrir un autre produit de la Distillerie </p>
                        <img src={CocktailHand} alt="" />
                    </div>
                    <div className="OriginalCoktail__container__right__linkRecipe" onClick={eshopRedirection}>
                        <p >Recettes et Boutique</p>
                    </div>
                </div>
                :
                <div className="OriginalCocktail__container__right">
                    <h2 className="OriginalCocktail__container__right__title">Savor it ...</h2>
                    <p className="OriginalCocktail__container__right__description"> pure and smooth at the end of a meal or in one of the great cocktail classics where L'Original Combier contributes its essential lively zest: Margarita, Long Island, Cosmopolitan, Sidecar. The list is long. In the culinary arena, L'Original Combier adds a gastronomic accent to soufflés, pâtisseries, jams, fruit salads and flambées like the famous crêpes Suzette. </p>
                    <div className="OriginalCoktail__container__right__linkhub" onClick={GotoBottleHub}>
                        {/* <img src={CocktailHand} alt="" /> */}
                        <p> Discover another product from the Distillery </p>
                        <img src={CocktailHand} alt="" />
                    </div>
                    <div className="OriginalCoktail__container__right__linkRecipe" onClick={eshopRedirection}>
                        <p>Recipes and Shop</p>
                    </div>
                </div>
                }            
            </div>
            <div className="OriginalCocktail__footer">
                <div className="OriginalCocktail__footer__links">
                    {props.langSelected == 'FR' ?
                    <div className="OriginalCocktail__footer__link" onClick={homeRedirection}>Accueil</div>
                    :
                    <div className="OriginalCocktail__footer__link" onClick={homeRedirection}>Home</div>
                    }
                    {props.langSelected == 'FR' ?
                    <div className="OriginalCocktail__footer__link" onClick={eshopRedirection}>Boutique</div>
                    :
                    <div className="OriginalCocktail__footer__link" onClick={eshopRedirection}>E-shop</div>
                    }
                    
                    <div className="OriginalCocktail__footer__link" onClick={instagramRedirection}>Instagram</div>
                    <div className="OriginalCocktail__footer__link" onClick={contactRedirection}>Contact</div>
                </div>
                
                {props.langSelected == 'FR' ?
                <div className="OriginalCocktail__footer__signature " >
                    {/* <p className="OriginalCocktail__footer__link" onClick={mentionslegalesRedirection}>mentions légales</p> */}
                    <Link to="/mentionslegales">mentions légales</Link>
                    <p>L'ABUS D'ALCOOL EST DANGEREUX POUR LA SANTÉ, À CONSOMMER AVEC MODÉRATION</p>
                    <p>© 2022 - Distillé avec amour par Combier et Blinkl</p>
                </div> 
                :
                <div className="OriginalCocktail__footer__signature">
                    <p className="OriginalCocktail__footer__link" >Legal Notice</p>
                    <p>ALCOHOL ABUSE IS DANGEROUS FOR YOUR HEALTH, CONSUME WITH MODERATION</p>
                    <p>© 2022 - Distilled with love by Combier and Blinkl</p>
                </div>     
                } 
            </div>  
        </div>
    </div>
    )
}

export default Meridor;