import React from "react";
import { Link } from "react-router-dom";
import { Controller, Scene } from 'react-scrollmagic';
import useDeviceDetect from '../../useDeviceDetect';

import "./AbsintheBlanchette.css"
import BlanchetteCoktailImg from "../../assets/E.Batz_1639_absinthe_HD.jpg"
import AbsintheGrenier from "../../assets/absinthe-grenier.jpg"
import FeaturetteAbsinthe from "../../assets/Videos/Featurette_Absynthe.mp4"
import CocktailHand from "../../assets/vintage-hand.svg"

const AbsintheBlanchette = (props) => {

    const instagramRedirection = () => {
        window.open('https://www.instagram.com/distilleriecombier/?hl=fr', "_blank") || window.location.replace('https://www.instagram.com/distilleriecombier/?hl=fr');
    }
    const eshopRedirection = () => {
        window.open('https://www.combier.fr/collections/absinthes/243-absinthe-blanchette.html', "_blank") || window.location.replace('https://www.combier.fr/collections/absinthes/243-absinthe-blanchette.html');
    }
    const contactRedirection = () => {
        window.open('https://www.combier.fr/distillerie/boutique-et-contact/', "_blank") || window.location.replace('https://www.combier.fr/distillerie/boutique-et-contact/');
    }
    const mentionslegalesRedirection = () => {
        window.open('https://combier.blinkl.com/mentionslegales', "_blank") || window.location.replace('https://www.combier.blinkl.com/mentionslegales');
    }

    const { isMobile } = useDeviceDetect();

    const homeRedirection = () => {
        if(isMobile == true){
            location.reload(); 
        } else {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }

    const {scrollTop, scrollHeight, clientHeight} = document.documentElement

    console.log(scrollTop, clientHeight, scrollHeight, window.screen.availHeight)

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
        <div className="AbsintheBlanchette">
            {/* <div className="AbsintheBlanchette__bg">
                <div className="AbsintheBlanchette__bg__part">L'Absinthe</div>
                <div className="AbsintheBlanchette__bg__part">Blanchette</div>
            </div> */}
            <Controller>
                <Scene duration={'100%'} indicators={false} triggerElement={".event2"} triggerHook={"onEnter"} pin={'.event1 .pinSection'}>
                        <div className="box event1">
                            <div className="pinSection">
                            {props.langSelected == 'FR' ?
                                <div className="AbsintheBlanchette__bg">
                                    <div className="AbsintheBlanchette__bg__part">L'Absinthe</div>
                                </div>
                            :
                                <div className="AbsintheBlanchette__bg">
                                    <div className="AbsintheBlanchette__bg__part">The Absinthe</div>
                                </div>
                            }
                                
                            </div>
                        </div>
                </Scene>
                <Scene duration={'200%'} indicators={false} triggerElement={".event2"} triggerHook={"onEnter"} pin={'.event2 .pinSection'}>
                    <div className="box event2">
                        <div className="pinSection">
                        {props.langSelected == 'FR' ?
                            <div className="bg">
                                <div className="AbsintheBlanchette__bg__part">
                                    <div className="AbsintheBlanchette__bg__part__title">
                                        <h2 className="AbsintheBlanchette__whatisit__title">Qu'est-ce que c'est ?</h2>
                                    </div>
                                </div>
                                <div className="AbsintheBlanchette__bg__part">
                                    <div className="AbsintheBlanchette__bg__part__description">
                                        <p className="AbsintheBlanchette__whatisit__descritpion">En 1895, James Combier, le fils de Jean-Baptiste, fait planter les premiers plants d’absinthe au sein de son domaine du Ruau, dans la région de Saumur. Quatre ans plus tard, la maison Combier commercialise Blanchette, une authentique absinthe blanche de style “Suisse“ à dominante anisée.</p>
                                    </div>
                        
                                </div>
                            </div>
                        :
                            <div className="bg">
                                <div className="AbsintheBlanchette__bg__part">
                                    <div className="AbsintheBlanchette__bg__part__title">
                                        <h2 className="AbsintheBlanchette__whatisit__title">What is it ?</h2>
                                    </div>
                                </div>
                                <div className="AbsintheBlanchette__bg__part">
                                    <div className="AbsintheBlanchette__bg__part__description">
                                        <p className="AbsintheBlanchette__whatisit__descritpion">In 1895, Jean-Baptiste's son, James Combier, began growing wormwood at his Ruau estate in the Saumur region. Four years later, the Combier distillery produced the first bottle of Blanchette, a white absinthe in the "Swiss" style with a predominant aniseed flavor.</p>
                                    </div>
                        
                                </div>
                            </div>
                        }      
                        </div>
                    </div>
                </Scene>
                <Scene duration={'200%'} indicators={false} triggerElement={".event3"} triggerHook={"onEnter"} pin={'.event3 .pinSection'}>
                    <div className="box event3">
                        <div className="pinSection">
                        {props.langSelected == 'FR' ?
                            <div className="bg">
                            <div className="AbsintheBlanchette__bg__part">
                                    <div className="image"></div>
                            </div> 
                            <div className="AbsintheBlanchette__bg__part">
                                <div className="AbsintheBlanchette__bg__part__description">
                                    <p className="AbsintheBlanchette__whatisit__descritpion">Blanchette est fabriquée par la Distillerie Combier de 1899 jusqu'à l'interdiction de l'absinthe en 1915. Depuis 2006, cette absinthe historique est de nouveau distillée dans les mêmes alambics. Associant grandes et petites absinthes à l’anis vert, au fenouil et à l’hysope, elle est très rafraîchissante.</p>
                                </div>
                            </div>
                        </div>
                    :
                        <div className="bg">
                            <div className="AbsintheBlanchette__bg__part">
                                    <div className="image"></div>
                            </div> 
                            <div className="AbsintheBlanchette__bg__part">
                                <div className="AbsintheBlanchette__bg__part__description">
                                    <p className="AbsintheBlanchette__whatisit__descritpion">Distillerie Combier made Blanchette from 1899 until absinthe was banned in France in 1915. Production of this historical absinthe was resumed in 2006, using the original stills. The recipe combining grand wormwood and roman wormwood with green anise, fennel, and hyssop, makes it very refreshing.</p>
                                </div>
                    
                            </div>
                        </div>
                        }      
                        </div>
                    </div>
                </Scene>
                <Scene duration={'200%'} indicators={false} triggerElement={".event4"} triggerHook={"onEnter"} pin={'.event4 .pinSection'}>
                    <div className="box event4">
                        <div className="pinSection">
                            <div className="bg black">
                                <div className="AbsintheBlanchette__bg__part AbsintheBlanchette__bg__part--full">
                                {props.langSelected == 'FR' ?
                                    <div className="AbsintheBlanchette__whitecontainer">
                                        <div className="AbsintheBlanchette__whatisit__description__whitecontainer">
                                            <p>Translucide, elle s'habille d'un trouble lacté et givré au contact de l'eau - d'où son nom de "Blanchette".</p>
                                            <p>
                                            Avec un nez empli de fraîcheur ou l’on capte d’abord l’anis vert, la Blanchette est herbacée et très parfumée. L’anis vert d’Espagne et le fenouil de Provence lui confèrent naturellement une note sucrée. Dépourvue en amertume, sensation soyeuse en bouche garantie.</p> 
                                        </div>
                                    </div>
                                :
                                    <div className = "AbsintheBlanchette__whitecontainer">
                                        <div className = "AbsintheBlanchette__whatisit__description__whitecontainer">
                                            <p> Translucent, it takes on a milky, frosty cloudiness when in contact with water - hence the name "Blanchette". </p>
                                            <p> Blanchette is herbaceous and very fragrant with a fresh green anise nose. A lack of bitterness guarantees a silky mouthfeel. Spanish green anise and fennel from Provence give it a natural sweetness. </p>
                                        </div>
                                    </div>
                                }
                                </div>
                                <div className="AbsintheBlanchette__bg__part">
                                    <div className="image"></div>
                                </div> 
                            </div>    
                        </div>
                    </div>
                </Scene>
                <Scene duration={'200%'} indicators={false} triggerElement={".event5"} triggerHook={"onEnter"} pin={'.event5 .pinSection'}>
                    <div className="box event5">
                        <div className="pinSection">
                            <div className="bg">
                                <div className="AbsintheBlanchette__bg__part AbsintheBlanchette__bg__part--full">
                                {props.langSelected == 'FR' ?
                                    <div className="AbsintheBlanchette__whitecontainer">
                                        <div className="AbsintheBlanchette__whatisit__description__whitecontainer">
                                            <p>Trois plantes essentielles entrent dans la composition de ce spiritueux fameux dont la distillation demande un grand savoir-faire : l’anis, le fenouil et la plante d’absinthe elle-même, qui donne son nom à la boisson. </p>
                                            <p>Elle est élaborée tout au long de trois étapes principales : 
                                                <br></br> 1. Pesée des botaniques. 
                                                <br/> 2. Remplissage des alambics avec les botaniques et l'alcool à 96%.
                                                <br/> 3. Et bien sûr, la distillation. 
                                            </p> 
                                        </div>
                                    </div>
                                :
                                    <div className = "AbsintheBlanchette__whitecontainer">
                                        <div className = "AbsintheBlanchette__whatisit__description__whitecontainer">
                                        <p>Three ingredients are essential to the composition of this famous spirit: anise, fennel, and the wormwood or absinthe plant itself, which gives the drink its name.</p>
                                            <p>Its production requires great expertise throughout the three stages:  
                                                <br></br> 1. carefully weighing the botanicals.
                                                <br/> 2. filling the stills with the botanicals and 96% alcohol. 
                                                <br/> 3. and, of course, the distillation process itself. 
                                            </p> 
                                        </div>
                                    </div>
                                }
                                    
                                </div>
                                <div className="AbsintheBlanchette__bg__part">
                                    <div className="image"></div>
                                </div> 
                            </div> 
                        </div>
                    </div>
                </Scene>
                <Scene duration={'200%'} indicators={false} triggerElement={".event6"} triggerHook={"onEnter"} pin={'.event6 .pinSection'}>
                    <div className="box event6">
                        <div className="pinSection">
                            <div className="bg">
                            <video controls width="70%" src={FeaturetteAbsinthe} >Sorry, your browser doesn't support embedded videos.</video>
                            </div>
                        </div>
                    </div>
                </Scene>
                <Scene duration={'200%'} indicators={false} triggerElement={".event7"} triggerHook={"onEnter"} pin={'.event7 .pinSection'}>
                    <div className="box event7">
                        <div className="pinSection">
                        <div className="bg">
                                <div className="AbsintheBlanchette__bg__part AbsintheBlanchette__bg__part--full">
                                {props.langSelected == 'FR' ?
                                    <div className="AbsintheBlanchette__whitecontainer">
                                        <h2 className="AbsintheBlanchette__whatisit__title__whitecontainer">La fée verte</h2>
                                        <div className="AbsintheBlanchette__whatisit__description__whitecontainer">
                                            <p>«  L’[…]absinthe reste le symbole de toute une époque : celle du Paris 1900, du Moulin Rouge, de Verlaine et des impressionnistes… La « fée verte », comme disaient les poètes [...], était l’apéritif favori des Français d’avant la guerre de 14. Tout le monde en buvait, les hommes et les femmes (Degas les a peintes) avec tout un cérémonial fait d’une cuillère trouée posée sur le verre et surmontée d’un morceau de sucre.* »
                                            </p> 
                                            <p>* Extraits du Courrier de L’ouest, 30/12/2004, Jean-Yves Lignel. </p> 
                                        </div>
                                    </div>
                                :
                                    <div className = "AbsintheBlanchette__whitecontainer">
                                        <h2 className = "AbsintheBlanchette__whatisit__title__whitecontainer"> The green fairy </h2>
                                        <div className = "AbsintheBlanchette__whatisit__description__whitecontainer">
                                            <p> "[…]absinthe remains the symbol of an entire era: Paris in 1900, the Moulin Rouge, Verlaine, and the Impressionists… The "green fairy", as the poets called it […], was France's favorite aperitif before the First World War. Everyone drank it, both men and women (Degas painted them) partaking in the ritual of placing a perforated spoon over the glass, surmounted by a lump of sugar .* »</p>
                                            <p> * Extracts from Courrier de l'Ouest newspaper, 12/30/2004, Jean-Yves Lignel. </p>
                                        </div>
                                    </div>
                                }                    
                                </div>
                                <div className="AbsintheBlanchette__bg__part">
                                    <div className="image"></div>
                                </div> 
                            </div> 
                        </div>
                    </div>
                </Scene>
                <Scene duration={'100%'} indicators={false} triggerElement={".event8"} triggerHook={"onEnter"} pin={'.event8 .pinSection'}>
                    <div className="box event8">
                        <div className="pinSection">
                        <div className="bg">
                                <div className="AbsintheBlanchette__bg__part AbsintheBlanchette__bg__part--full">
                                {props.langSelected == 'FR' ?
                                    <div className="AbsintheBlanchette__whitecontainer">
                                        <h2 className="AbsintheBlanchette__whatisit__title__whitecontainer">La fée verte</h2>
                                        <div className="AbsintheBlanchette__whatisit__description__whitecontainer">
                                        <p> « Tout ça jusqu’à ce que l’absinthe soit officiellement interdite en France en 1915* ".</p>

                                        <p> L’absinthe est autorisé de nouveau depuis 2001 après preuve de son innocuité. La Distillerie Combier participe à l’écriture de l’Histoire de l’absinthe et à sa redécouverte avec la réédition de l’absinthe Blanchette en 2006. </p>
                                        </div>
                                    </div>
                                :
                                    <div className = "AbsintheBlanchette__whitecontainer">
                                        <h2 className = "AbsintheBlanchette__whatisit__title__whitecontainer"> The green fairy </h2>
                                        <div className = "AbsintheBlanchette__whatisit__description__whitecontainer">
                                            <p> "All that continued until absinthe was officially banned in France in 1915*".</p>

                                            <p> Absinthe was authorized again in 2001, having been proven harmless and Distillerie Combier played a significant role in its rediscovery with the reissue of absinthe Blanchette in 2006 </p>
                                        </div>
                                    </div>
                                }
                                    
                                </div>
                                <div className="AbsintheBlanchette__bg__part">
                                    <div className="image"></div>
                                </div> 
                            </div> 
                        </div>
                    </div>
                </Scene>
            </Controller>
            <div className="BlanchetteCocktail">
                <div className="BlanchetteCocktail__container">
                    <div className="BlanchetteCocktail__container__left">
                        <img className="BlanchetteCocktail__container__left__img" src={BlanchetteCoktailImg} alt="" />
                    </div>
                    {props.langSelected == 'FR' ?
                    <div className="OriginalCocktail__container__right">
                        <h2 className="OriginalCocktail__container__right__title">Conclusion gourmande</h2>
                        <p className="OriginalCocktail__container__right__description">La Blanchette se consomme allongée d’eau fraîche. Si vous avez la chance d'être équipé d'une fontaine à absinthe, versez 3 cl d’absinthe dans un verre à pied puis ouvrez le robinet pour y faire couler l'eau goutte à goutte sur le sucre posée sur la traditionnelle cuillère à absinthe. Sans fontaine ? une carafe d’eau fraîche fait l'affaire. Vous pouvez aussi consommer Blanchette sans sucre car elle est peu amer.  Pour préparer l'un des plus vieux cocktails connus, le Sazerac, on utilise Blanchette pour lui donner un peps herbacé. L'absinthe se révèle un excellent arôme pour les crèmes glacées maison, les gâteaux et pour flamber gambas, filets de truite ou en gelée avec les huîtres ! </p>
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
                        <h2 className="OriginalCocktail__container__right__title">Gourmet conclusion</h2>
                        <p className="OriginalCocktail__container__right__description">Blanchette is best appreciated diluted with cool fresh water. If you are lucky enough to have an absinthe fountain, pour 3 cl of absinthe into a stemmed glass, then turn on the tap to let the water run drop by drop onto the sugar placed on the traditional absinthe spoon. No fountain? A carafe of cool water will do the trick. Because of its lack of bitterness, you can also drink Blanchette without sugar. Absinthe is excellent for flavoring homemade ice cream, cakes, flambéing shellfish, or in a jelly to go with oysters! When preparing a Sazerac, one of the oldest known cocktails, a dash of Blanchette can be used to give it a herbaceous pep. </p>
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

export default AbsintheBlanchette