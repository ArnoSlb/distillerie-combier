import React, {useEffect} from "react";
import * as THREE from './three.module.js';
import { VRButton } from './VRButton.js';
import FileJson from './app.json'

import './Scene360.css';

const Scene360 = () => {

    React.useEffect(() => {
        window.THREE = THREE; // Used by APP Scripts.
        window.VRButton = VRButton; // Used by APP Scripts.

        var loader = new THREE.FileLoader();
        
        loader.load( './app.json', function ( text ) {

            console.log(this)
            console.log(typeof FileJson)
            console.log(text)
            console.log(loader)
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
            console.log(progress)
        }, function (error){
            console.log(error)
        } );
    },[])

    return(
        <div className="Scene360">
            <div className="Scene360__player"></div>
        </div>
    )
}

export default Scene360