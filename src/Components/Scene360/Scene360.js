import React from "react";
import * as THREE from './three.module.js';
import { VRButton } from './VRButton.js';

import './Scene360.css';

import Logo360Sphere from "../../assets/360-Logo-sphere.png"

const Scene360 = (props) => {

    React.useEffect(() => {
        window.THREE = THREE; // Used by APP Scripts.
        window.VRButton = VRButton; // Used by APP Scripts.

        var loader = new THREE.FileLoader();
        
        loader.load( 'https://landings.blinkl.com/combier/expe3D/combier.json', function ( text ) {

            var player = new THREE.App();
            player.load( JSON.parse(text) );
            player.setSize( window.innerWidth, window.innerHeight );
            player.play();

            const Scene360Player = document.querySelector('.Scene360__player');

            Scene360Player.appendChild( player.dom );

            window.addEventListener( 'resize', function () {

                player.setSize( window.innerWidth, window.innerHeight );

            } );
        }, function (progress){
            // console.log(progress)
        }, function (error){
            console.log(error)
        } );

        window.addEventListener('nom_de_l_event', () => {
            console.log('jouvre la fenetre dans la scene 360')
            document.querySelector('.Scene360__popin').style.display = "flex"
        })
    },[])

    return(
        <div className="Scene360">
            {props.langSelected == 'FR' ? 
                <div className="Scene360__intro">
                    <p>Vous arrivez dans la Salle des Alambics, à visiter en 360 °</p>
                    <p>Déplacez vous en orientant votre téléphone ou en utilisant votre souris sur ordinateur</p>
                    <img src={Logo360Sphere} alt="" />
                </div>
            : 
                <div className="Scene360__intro">
                    <p>You arrive in the Alambics Room, to visit in 360 °</p>
                    <p>Move around by pointing your phone or using your mouse on the computer</p>
                    <img src={Logo360Sphere} alt="" />
                </div>
            }
            <div className="Scene360__player">
                <img src={Logo360Sphere} alt="" />
            </div>
            <div className="Scene360__popin" onClick={() => document.querySelector('.Scene360__popin').style.display = "none"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, repellendus! Repudiandae reprehenderit et sint quam natus quae molestias placeat illum, numquam ex deserunt? Nesciunt, dignissimos nemo minima nihil ex porro!</div>
        </div>
    )
}

export default Scene360