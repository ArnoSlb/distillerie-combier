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

    window.mobileAndTabletCheck = function() {
        let check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
      };

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

            if(mobileAndTabletCheck() == true){
                document.querySelector('.ElixirCombier').style.overflowX = "initial";
            } else {
                if( scrollTop + clientHeight == scrollHeight){
                    document.querySelector('.ElixirCombier').style.overflowX = "hidden";
                } else {
                    document.querySelector('.ElixirCombier').style.overflowX = "initial";
                }
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