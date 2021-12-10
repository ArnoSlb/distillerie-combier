import React from "react";
import * as THREE from './three.module.js';
import { VRButton } from './VRButton.js';

import './Scene360.css';

const Scene360 = () => {

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
            <div className="Scene360__player"></div>
            <div className="Scene360__popin" onClick={() => document.querySelector('.Scene360__popin').style.display = "none"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, repellendus! Repudiandae reprehenderit et sint quam natus quae molestias placeat illum, numquam ex deserunt? Nesciunt, dignissimos nemo minima nihil ex porro!</div>
        </div>
    )
}

export default Scene360