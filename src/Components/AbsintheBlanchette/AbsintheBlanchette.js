import React from "react";
import { Link } from "react-router-dom";
import { Controller, Scene } from 'react-scrollmagic';

import "./AbsintheBlanchette.css"
import BlanchetteCoktailImg from "../../assets/Blanchette2600_BD.jpg"

const AbsintheBlanchette = () => {

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
                                {/* <div className="image"></div> */}
                                <div className="AbsintheBlanchette__bg">
                                    <div className="AbsintheBlanchette__bg__part">L'Absinthe</div>
                                    <div className="AbsintheBlanchette__bg__part">Blanchette</div>
                                </div>
                            </div>
                        </div>
                </Scene>
                <Scene duration={'200%'} indicators={false} triggerElement={".event2"} triggerHook={"onEnter"} pin={'.event2 .pinSection'}>
                    <div className="box event2">
                        <div className="pinSection">
                            <div className="bg">
                                <div className="AbsintheBlanchette__bg__part">
                                    <h2 className="AbsintheBlanchette__whatisit__title">Qu'est ce que c'est ?</h2>
                                </div>
                                <div className="AbsintheBlanchette__bg__part">
                                    <p className="AbsintheBlanchette__whatisit__descritpion">Produite par la Distillerie Combier entre 1899 et 1915, et de nouveau
                                    dans les mêmes alambics depuis 2006, la Blanchette est une authentique absinthe blanche avec un style “Suisse“ à dominante anisée. Ingrédients : anis vert d’Espagne, grande absinthe
                                    petite absinthe, fenouil de Provence et
                                    hysope.
                                    Associant grandes et petites absinthes à l’anis vert, au fenouil et à
                                    l’hysope, elle est très rafraîchissante. La
                                    Blanchette se consomme allongée d’eau fraîche, sans sucre, car elle
                                    n’est pas amère. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Scene>
                <Scene duration={'200%'} indicators={false} triggerElement={".event3"} triggerHook={"onEnter"} pin={'.event3 .pinSection'}>
                    <div className="box event3">
                        <div className="pinSection">
                            <div className="bg black">
                                <div className="AbsintheBlanchette__bg__part">
                                    <h2 className="AbsintheBlanchette__whatisit__title">Qu'est ce que c'est ?</h2>
                                </div>
                                <div className="AbsintheBlanchette__bg__part">
                                    <p className="AbsintheBlanchette__whatisit__descritpion">Produite par la Distillerie Combier entre 1899 et 1915, et de nouveau
                                    dans les mêmes alambics depuis 2006, la Blanchette est une authentique absinthe blanche avec un style “Suisse“ à dominante anisée. Ingrédients : anis vert d’Espagne, grande absinthe
                                    petite absinthe, fenouil de Provence et
                                    hysope.
                                    Associant grandes et petites absinthes à l’anis vert, au fenouil et à
                                    l’hysope, elle est très rafraîchissante. La
                                    Blanchette se consomme allongée d’eau fraîche, sans sucre, car elle
                                    n’est pas amère. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Scene>
                <Scene duration={'200%'} indicators={false} triggerElement={".event4"} triggerHook={"onEnter"} pin={'.event4 .pinSection'}>
                    <div className="box event4">
                        <div className="pinSection">
                            <div className="bg black">
                                <div className="AbsintheBlanchette__bg__part AbsintheBlanchette__bg__part--full">
                                    <div className="AbsintheBlanchette__whitecontainer">
                                        <h2 className="AbsintheBlanchette__whatisit__title__whitecontainer">Qu'est ce que c'est ?</h2>
                                        <div className="AbsintheBlanchette__whatisit__description__whitecontainer">
                                            <p><strong>Allure :</strong>  Translucide, elle s'habille d'un trouble lacté et givré avec un peu d'eau - d'où son nom de "Blanchette".</p>
                                            <p><strong>En bouche :</strong>  Avec un nez empli de fraîcheur ou l’on capte d’abord l’anis vert, la Blanchette est herbacée et très parfumée. L’anis vert d’Espagne et le
                                            fenouil de Provence lui confèrent naturellement une note sucrée. Sensation soyeuse en bouche et dépourvue en amertume garantie.</p> 
                                        </div>
                                    </div>
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
                                    <div className="AbsintheBlanchette__whitecontainer">
                                        <h2 className="AbsintheBlanchette__whatisit__title__whitecontainer">La Fabrication</h2>
                                        <div className="AbsintheBlanchette__whatisit__description__whitecontainer">
                                            <p>Trois plantes essentielles entrent dans la composition de ce spiritueux fameux dont la distillation demande un grand savoir-faire : l’anis, le fenouil et la plante d’absinthe elle-même, qui donne son nom à la boisson. 1. Pesée des botaniques. 2. Remplissage des alambics avec les botaniques et l'alcool à 96%. 3. Distillation </p> 
                                        </div>
                                    </div>
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
                                <iframe width="960" height="539" src="https://www.youtube.com/embed/KpyTMGKLNlM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </Scene>
                <Scene duration={'100%'} indicators={false} triggerElement={".event7"} triggerHook={"onEnter"} pin={'.event7 .pinSection'}>
                    <div className="box event7">
                        <div className="pinSection">
                        <div className="bg">
                                <div className="AbsintheBlanchette__bg__part AbsintheBlanchette__bg__part--full">
                                    <div className="AbsintheBlanchette__whitecontainer">
                                        <h2 className="AbsintheBlanchette__whatisit__title__whitecontainer">L'Histoire</h2>
                                        <div className="AbsintheBlanchette__whatisit__description__whitecontainer">
                                            <p>Commercialisée à l'origine entre 1899 et 1915 - c'était même la référence la mieux vendue à l’époque - Blanchette est une reproduction de la recette de l'époque et fait partie des absinthes élaborées par l'historien Ted Breaux.  - Ce dont on a besoin : carte des emplacements précis. NB: Absinthe Entêtée à mentionner dans Carte région producteur (Grande Absinthe) - petite absinthe achetée ailleurs. 
                                            - Insister sur "produits" - pas producteurs. Plus sur l'approvisionnement.</p> 
                                        </div>
                                    </div>
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
                    <div className="BlanchetteCocktail__container__right">
                        <h2 className="BlanchetteCocktail__container__right__title">Note Gourmande</h2>
                        <p className="BlanchetteCocktail__container__right__description">Si vous avez la chance d'être équipé d'une fontaine à absinthe, versez 3 cl d’absinthe dans un verre à pied, puis positionnez sur ce dernier la cuillère plate à absinthe. Et ouvrez le robinet de la fontaine pour y faire couler l'eau goutte à goutte sur le sucre. Sans fontaine, il y a toujours un salut : une carafe d’eau fraîche avec une cuillère de tous les jours ! Pour préparer l'un des plus vieux cocktails connus, le Sazerac, on utilise l'absinthe pour lui donner un peps herbacé. L'absinthe se révèle un excellent arôme pour les crèmes glacées maisons, les gâteaux, mais aussi pour flamber vos gambas, vos filets de truite ou en gelée avec vos huîtres !</p>
                    </div>
                </div>
                <Link to="#BottleHub"><div className="BlanchetteCocktail__footer">Découvrir un autre produit de la Distillerie Combier</div></Link>
            </div>
        </div>
    )
}

export default AbsintheBlanchette