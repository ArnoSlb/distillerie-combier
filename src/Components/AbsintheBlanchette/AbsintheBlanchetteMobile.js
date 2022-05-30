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
                    <div className="box event6">
                        <div className="pinSection">
                            <div className="bg">
                            <video controls width="70%" src={FeaturetteAbsinthe} >Sorry, your browser doesn't support embedded videos.</video>
                            </div>
                        </div>
                    </div>
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
                </div>
    )
}

export default AbsintheBlanchette