import React, {useEffect} from "react";
import * as THREE from './three.module.js';
import { VRButton } from './VRButton.js';

import './Scene360.css';

const Scene360 = () => {

    React.useEffect(() => {
        window.THREE = THREE; // Used by APP Scripts.
        window.VRButton = VRButton; // Used by APP Scripts.

        var loader = new THREE.FileLoader();
        loader.load( 'app.json', function ( text ) {

            var player = new THREE.App();
            player.load( JSON.parse( text ) );
            player.setSize( window.innerWidth, window.innerHeight );
            player.play();

            document.body.appendChild( player.dom );

            window.addEventListener( 'resize', function () {

                player.setSize( window.innerWidth, window.innerHeight );

            } );

        } );
    },[])

    return(
        <div>Scene 360</div>
    )
}

export default Scene360