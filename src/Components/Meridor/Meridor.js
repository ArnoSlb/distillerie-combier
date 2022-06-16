import React from "react";
import { Link } from "react-router-dom";

import useDeviceDetect from '../../../src/useDeviceDetect';

import "./Meridor.css";

import MeridorRose from "../../assets/HD-Roses-05881.jpg"
import MeridorRoses from "../../assets/HD-Roses-05201.jpg"
import MeridorAffiche from "../../assets/GC189.jpg"
import MeridorCocktail from "../../assets/Meridor460.jpg"
import CocktailHand from "../../../src/assets/vintage-hand.svg"
import RoseVideo from "../../assets/Videos/Rose-Combier-Distillerie.mp4"
import FleurDeSureau from "../../assets/fleur-de-sureau.jpg"


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
                    console.log(entry.target.firstChild)
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

    const {scrollTop, scrollHeight, clientHeight} = document.documentElement

    const pixelToHub = 11750 +  (clientHeight * 3.23)

    const GotoBottleHub = () => {

        if(isMobile == true){
            window.location.replace("https://combier.blinkl.com/?s=")
        } else {
            scrollTo({
                top: pixelToHub,
                left: 0,
                behavior: 'smooth'
            });
        }
    }


    return (
        <div className="Meridor">
            <div className="Meridor_bg_container">
                <div className="Meridor_bg_sticky">
                    <img src={MeridorRose} alt="" />
                </div>
            </div>
            <div className="Meridor__First">
                {isMobile ?
                <div></div>
                :
                <div className="Meridor__empty__margin"></div>
                }
                
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
                        <p>Premier London Dry Gin créé en Vallée de la Loire, Gin Meridor est issu d'une seule et unique distillation de tous les ingrédients dans les alambics historiques de la Distillerie. Baies de genévrier, graines de coriandre, écorces de citron, racines d'iris, cubèbe et réglisse s'associent à merveille aux deux botaniques emblématiques du Val de Loire : des pétales de rose et des fleurs de sureau, ramassés à la main. 
                        Cristallin, avec un nez floral subtilement épicé, Gin Meridor envoûte par la douceur des pétales de rose et fleurs de sureau du Val de Loire, et ravive la finale par ses notes poivrées.</p>
                    </div> 
                    :
                    <div className = "Meridor__First__text__right__content">
                        <p>Gin Meridor is the First London Dry Gin created in the Loire Valley. Made from a single distillation of all ingredients in Distillerie Combier's historic stills: juniper berries, coriander seeds, lemon peel, iris roots, cubeb, and licorice combine wonderfully with two botanicals that are emblematic of the Loire Valley: rose petals and elderflowers, picked by hand.
                        Crystalline, with a subtly spicy floral nose, Gin Meridor captivates with the sweetness of rose petals and elderflowers from the Loire Valley. The finish with its peppery notes revives the palate.</p>
                    </div>
                    }
                    
                </div>
                <div className="Meridor__First__text Meridor__anim">
                    <div className="Meridor__First__text__left">
                    {props.langSelected == 'FR' ?
                        <h1 className="Meridor__Second__text__left__title">Savoir-faire</h1>
                    :
                        <h1 className="Meridor__Second__text__left__title">Craftsmanship</h1>
                    }
                    </div>
                    <div className="Meridor__First__empty"></div>
                </div>
                <div className="Meridor__First__text__right Meridor__anim">
                    <div className="Meridor__First__empty"></div>
                    {props.langSelected == 'FR' ?
                    <div className="Meridor__First__text__right__content">
                    <p>Distillé en « Small Batch » dans de rares alambics fabriqués par la célèbre société Egrot (1780), chaque distillation ne produit que 360 bouteilles. Cette méthode authentique et artisanale contribue à le rendre unique. Les alambics en cuivre à longs cols de cygne, parfaitement adaptés à ce type de spiritueux, permettent d’extraire un maximum de parfums des 8 botaniques soigneusement sélectionnées. </p>
                    </div> 
                    :
                    <div className = "Meridor__First__text__right__content">
                    <p> Authentic, artisanal methods contribute to making Gin Meridor unique. Each small batch produces only 360 bottles, distilled in rare 19th-century stills from the famous Egrot company (1780). The copper stills with their long swan necks are perfectly adapted to this type of spirit, extracting a maximum of flavors from the eight carefully selected botanicals.</p>
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
                <div className="Meridor__First__text Meridor__anim">
                    {props.langSelected == 'FR' ?
                    <div className="Meridor__First__text__right__content">
                    <p>La Distillerie Combier a développé un savoir-faire spécifique autour de la distillation de fleurs aux extraits précieux et fragiles. Chaque été, l'équipe se mobilise pour sélectionner et cueillir les variétés les plus aromatiques, signatures du Gin Meridor.</p>
                    </div> 
                    :
                    <div className = "Meridor__First__text__right__content">
                    <p>The Combier Distillery has developed specific know-how around the distillation of flowers, extracting their precious and fragile aromas. Every summer, the Combier team gathers to select and pick the most aromatic varieties which contribute to Gin Meridor's signature taste.</p>
                    </div>
                    }     
                    <div className="Meridor__First__empty"></div>
                </div>
                <div className="Meridor__First__text__right Meridor__anim">
                    <div className="Meridor__First__empty"></div>
                    <img className="MeridorRose" src={FleurDeSureau} alt="photo rose" />
                </div>
                <div className="Meridor__video Meridor__anim">
                    <video controls width="100%" src={RoseVideo} >Sorry, your browser doesn't support embedded videos.</video>
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
                    <p>Ce gin original et romantique doit son nom à l’illustre Dame de Montsoreau qui vécue au 16ème siècle dans le Château du même nom sur les bords de Loire pas loin de Saumur. Cette amoureuse intrépide est devenue Diane de Meridor sous la plume d’Alexandre Dumas en 1846. Le château de Montsoreau surplombe l'eau de la Loire à quelques encablures de Saumur. La blondeur de sa pierre de tuffeau met en valeur la volupté des jardins fleuris de la vallée.</p>
                    :
                    <p> This original and romantic gin owes its name to the illustrious Lady of Montsoreau, who lived in the 16th century in the château of the same name on the banks of the Loire not far from Saumur. Her tragic love story inspired Alexandre Dumas, who gave her the name Diane de Meridor in his novel published in 1846. The Château of Montsoreau overlooks the waters of the Loire not far from Saumur. Its blond tufa stone is a perfect background for the voluptuous flowers of the valley.</p>
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
                    <h2 className="OriginalCocktail__container__right__title">Conclusion gourmande</h2>
                    <p className="OriginalCocktail__container__right__description">Evocateur des bords de Loire et de ses jardins parfumés, le Gin Meridor se déguste dans des cocktails classiques comme le White Lady, le Corpse Reviver.</p>
                    <Link className="OriginalCocktail__container__right__description" to="https://www.combier.fr/degustation/cocktail/347-white-lady.html">WHITE LADY</Link>
                    <Link className="OriginalCocktail__container__right__description" to="https://www.combier.fr/degustation/cocktail/352-corpse-reviver-n2.html">CORPSE REVIVER N°2</Link>
                    <p className="OriginalCocktail__container__right__description">ou des créations maisons comme Le Jardin Secret, où fleurs de sureau et roses apportent une délicate note de litchi.</p> 
                    <Link className="OriginalCocktail__container__right__description" to=" https://www.combier.fr/collections/cocktails/415-cocktail-gin-meridor-sureau-concombre-bib-3l.html"> COCKTAIL GIN MERIDOR / SUREAU / CONCOMBRE</Link>
                   
                    <div className="OriginalCoktail__container__right__linkhub" onClick={GotoBottleHub}>
                        {/* <img src={CocktailHand} alt="" /> */}
                        <p>Découvrir un autre produit de la Distillerie</p>
                        <img src={CocktailHand} alt="" />
                    </div>
                    <div className="OriginalCoktail__container__right__linkRecipe" onClick={eshopRedirection}>
                        <p >Recettes et Boutique</p>
                    </div>
                </div>
                :
                <div className="OriginalCocktail__container__right">
                    <h2 className="OriginalCocktail__container__right__title">Gourmet conclusion</h2>
                    <p className="OriginalCocktail__container__right__description">Evocative of the banks of the Loire and its fragrant gardens, Gin Meridor can be enjoyed in classic cocktails like White Lady or Corpse Reviver.</p>
                    <Link className="OriginalCocktail__container__right__description" to="https://www.combier.fr/degustation/cocktail/347-white-lady.html">WHITE LADY</Link>
                    <Link className="OriginalCocktail__container__right__description" to="https://www.combier.fr/degustation/cocktail/352-corpse-reviver-n2.html">CORPSE REVIVER N°2</Link>
                    <p className="OriginalCocktail__container__right__description"> It also takes to the spotlight in Combier cocktail creations such as Le Jardin Secret, where the elderflowers and roses combine to introduce a delicate note of lychee.
                    </p> 
                    <Link className="OriginalCocktail__container__right__description" to=" https://www.combier.fr/collections/cocktails/415-cocktail-gin-meridor-sureau-concombre-bib-3l.html"> COCKTAIL GIN MERIDOR / ELDERBERRY / CUCUMBER</Link>
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