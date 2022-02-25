import React from "react";
import * as THREE from './three.module.js';
import { VRButton } from './VRButton.js';

import './Scene360.css';
import Scene360Loader from '../Scene360_Loader/Scene360Loader';
import Scene360Data from "./Scene360Data.js";
import Scene360DataPlus from "./Scene360DataPlus.js";

import useDeviceDetect from '../../useDeviceDetect';

import Logo360Sphere from "../../assets/360-Logo-sphere.png"

const Scene360 = (props) => {

    const { isMobile } = useDeviceDetect();

    let indexArray
    let indexCard = -1
    let indexCardPlus = 0
    let myInterval
    let myIntervalPlus

    console.log(props, 'je suis dans la scene360')

    const exitSceneIntro = () => {
        document.querySelector('.Scene360__intro').style.display = "none"
    }

    const TextPopIn = () => {
        indexCard = indexCard + 1
        if (indexCard == 6){
            document.querySelector('.Scene360__popin').style.display = "none"
            clearInterval(myInterval);
        } else {
            document.querySelector('.Scene360__popin').style.display = "flex"

            {props.langSelected == 'FR' ? 
            document.querySelector('.Scene360__popin').innerText = Scene360Data[indexCard].textFr
            :
            document.querySelector('.Scene360__popin').innerText = Scene360Data[indexCard].textEn
            }
        }
    }

    const TextPopInPlus = () => {
        indexCardPlus = indexCardPlus + 1
        console.log(Scene360DataPlus[0].length)
        if (indexCardPlus == Scene360DataPlus[indexArray].length){
            document.querySelector('.Scene360__popin__plus').style.display = "none"
            clearInterval(myIntervalPlus);
        } else {
            document.querySelector('.Scene360__popin__plus').style.display = "flex"

            {props.langSelected == 'FR' ? 
            document.querySelector('.Scene360__popin__plus').innerText = Scene360DataPlus[indexArray][indexCardPlus].textFr
            :
            document.querySelector('.Scene360__popin__plus').innerText = Scene360DataPlus[indexArray][indexCardPlus].textEn
            }
        }
    }
    React.useEffect(() => {
        window.addEventListener('enter_frustrum_for_alambic_animation', () => {
            document.querySelector('.Scene360__popin__plus').style.display = "none"
            clearInterval(myIntervalPlus);
            
            console.log('je rentre dans le frustrum')
            
            indexCard = -1
            myInterval = setInterval(TextPopIn, 6000)
        });

        window.addEventListener('quit_frustrum_for_alambic_animation', () => {
            console.log('je quitte le frustrum')
            document.querySelector('.Scene360__popin').style.display = "none"
            clearInterval(myInterval);
        });

        window.addEventListener('Infos_le_savoir_faire_du_confiseur', () => {
            document.querySelector('.Scene360__popin').style.display = "none"
            clearInterval(myInterval);
            clearInterval(myIntervalPlus);
            document.querySelector('.Scene360__popin__plus').style.display = "flex"
            console.log('infos sur le bouton plus')

            indexCardPlus = 0
            indexArray = 0

            {props.langSelected == 'FR' ? 
            document.querySelector('.Scene360__popin__plus').innerText = Scene360DataPlus[indexArray][indexCardPlus].textFr
            :
            document.querySelector('.Scene360__popin__plus').innerText = Scene360DataPlus[indexArray][indexCardPlus].textEn
            }

            myIntervalPlus = setInterval(TextPopInPlus, 6000)
        });

        window.addEventListener('Infos_Structure_metalique', () => {
            document.querySelector('.Scene360__popin').style.display = "none"
            clearInterval(myInterval);
            clearInterval(myIntervalPlus);
            document.querySelector('.Scene360__popin__plus').style.display = "flex"
            console.log('infos sur le bouton plus')

            indexCardPlus = 0
            indexArray = 1

            {props.langSelected == 'FR' ? 
            document.querySelector('.Scene360__popin__plus').innerText = Scene360DataPlus[indexArray][indexCardPlus].textFr
            :
            document.querySelector('.Scene360__popin__plus').innerText = Scene360DataPlus[indexArray][indexCardPlus].textEn
            }

            myIntervalPlus = setInterval(TextPopInPlus, 6000)
        })
    })

    React.useEffect(() => {

        window.THREE = THREE; // Used by APP Scripts.
        window.VRButton = VRButton; // Used by APP Scripts.

        var loader = new THREE.FileLoader();
        
        loader.load( 'https://landings.blinkl.com/distillerie-combier/expe3D/combier.json', function ( text ) {

            var player = new THREE.App();
            player.loadAsync( JSON.parse(text) )

            // interprétation du fichier .json
            .then(() => {
                player.setSize( window.innerWidth, window.innerHeight );
                player.play();
    
                const Scene360Player = document.querySelector('.Scene360__player');
                Scene360Player.style.display = "block"
    
                document.querySelector('.Scene360Loader').style.display = "none"
                document.querySelector('.Scene360').style.height = "180vh"
    
                Scene360Player.appendChild( player.dom );
    
                window.addEventListener( 'resize', function () {
    
                    player.setSize( window.innerWidth, window.innerHeight );
    
                } );
            }).catch((error) => {
                console.error(error)
            })

        // téléchargement du fichier .json
        }, function (progress){
            // console.log(progress)
        }, function (error){
            console.error(error)
        } );
    },[])

    return(
        <div className="Scene360">   
            <Scene360Loader/>    
            <div className="Scene360__player">
            {props.langSelected == 'FR' ? 
                <div className="Scene360__intro">
                    <p>Vous arrivez dans la Salle des Alambics, à visiter en 360 °</p>
                    <p>Déplacez vous en orientant votre téléphone ou en utilisant votre souris sur ordinateur</p>
                    <img src={Logo360Sphere} alt="" />
                    <div id="button_scene_intro" onClick={exitSceneIntro}>OK J'ai compris</div>
                </div>
            : 
                <div className="Scene360__intro">
                    <p>You arrive in the Alambics Room, to visit in 360 °</p>
                    <p>Move around by pointing your phone or using your mouse on the computer</p>
                    <img src={Logo360Sphere} alt="" />
                    <div id="button_scene_intro" onClick={exitSceneIntro}>OK Understood</div>
                </div>
            }
                <img src={Logo360Sphere} alt="" />
                {isMobile && ( <div className="Scene360__ScrollGrip"></div>)}
                <div className="Scene360__popin" 
                onClick={() => document.querySelector('.Scene360__popin').style.display = "none"}
                ></div>
                <div className="Scene360__popin__plus" 
                onClick={() => document.querySelector('.Scene360__popin').style.display = "none"}
                ></div>
            </div>
            
        </div>
    )
}

export default Scene360