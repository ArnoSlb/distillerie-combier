import React, {useState} from 'react';

import './Map.css'
import video from "../../assets/fingers.mp4"


const Map = () => {

    // lower numbers = faster playback
    const playbackConst = 1000;

    React.useEffect(() => {

        // get page height from video duration
        const setHeight = document.getElementById("set-height");

        // select video element     
        let vid = document.getElementById("v0");

        // console.log(map.offsetTop) 
        // We get the distance in pxl between the top of the document and the component
        // setDistComponentFromTop(map.offsetTop)

        // We select every elements with the class .anim
        const ElementsToAnimate = document.querySelectorAll('.anim');

        //We create an intersection observer to know when the element is in the viewport
        // More details here : https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API
        const observer = new IntersectionObserver((entries) => {

            // we can see all the details available
            // console.log(entries)

            entries.forEach(entry => {

                // When the element.s are in the user browser we add the class reponsible for the animation
                if (entry.isIntersecting){
                    // console.log(entry)
                    entry.target.classList.add('tracking-in-expand')
                } else {
                    // if we want the animation to play over and over again
                    // we need to remove the class 
                    // if we want the naimation to only play ONE time
                    // let the "else" instrcution empty
                    entry.target.classList.remove('tracking-in-expand')
                }
            })
        })

        //We have to loop on every elements to observe them individually
        ElementsToAnimate.forEach(Element => {
            observer.observe(Element)
        })

        // dynamically set the page height according to video length
        const setPageHeight = () => {
            setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
            console.log('hauteur nécessaire pour lire la video : ' + setHeight.style.height)

            // When txt added you can set the setHeight.style.height to 0
            // Otherwise you will have the height x2
            setHeight.style.height = 0

            //Set the video size in css
            const vidRatio = vid.videoWidth / vid.videoHeight;
            // console.log(vidRatio)

            let screenRatio = window.innerWidth / window.innerHeight;
            // console.log(screenRatio)

            // adapt video size depend on the viewport ratio
            // if (screenRatio > vidRatio){
            //     vid.style.width = "100%";
            //     vid.style.height = "auto";
            // } else {
            //     vid.style.width = "auto";
            //     vid.style.height = "100%";
            // }
        }

        //When metadata are loaded, dynamically set the page height according to video length
        vid.addEventListener('loadedmetadata', setPageHeight);

        // cleanup this component
        // You need to remove the event listener when the component is unmounted.
        // The useEffect hook helps you out with an optional return value in the callback function. 
        // You can return a function in the useEffect callback and that function will run when the component unmounts
        return () => {
            vid.removeEventListener('loadedmetadata', setPageHeight)
        }

    // With the empty array we tell the useEffect hook to only run when the component first renders.
    }, []);

    
    // Use requestAnimationFrame for smooth playback
    // We're creating a loop to make the video frame number update every screen refresh (ex:60Hz for my screen) so 60times/sec
    const scrollPlay = () => {  
        
        const map = document.getElementById('map');

        // We get the distance in pxl between the top of the document and the component with map.offsetTop
        // We get the distance where we are in the document from the top with window.pageYOffset
        // We get the speed of play of the video with playbackConst
        let frameNumber  = (window.pageYOffset - map.offsetTop)/playbackConst;

        let vid = document.getElementById("v0"); 
        // console.log(vid)

        vid.currentTime = frameNumber;

        window.requestAnimationFrame(scrollPlay);
    }

    window.requestAnimationFrame(scrollPlay);

    return (
        <div className="Map" id="map">

            <section className="Map__container">
                <div className="Map__container__content">
                    <h1>Distillerie Combier</h1>
                    <p>Scroller vers le bas pour commencer</p>
                </div>
            </section>

            <section className="Map__container">
                <div className="Map__container__content anim">
                    <h1>Step 1</h1>
                    <p>Start it like this</p>
                </div>
            </section> 

            <section className="Map__container">
                {/* <div className="Map__container__content" ref={ref}> */}
                <div className="Map__container__content anim">
                    <h1>Step 2</h1>
                    <p>Start it like this</p>
                </div>
            </section> 

            <section className="Map__container">
                <div className="Map__container__content anim">
                    <h1>Step 3</h1>
                    <p>Start it like this</p>
                </div>
            </section>

            <section className="Map__container">
                <div className="Map__container__content anim">
                    <h1>Step 4</h1>
                    <p>Start it like this</p>
                </div>
            </section> 

            <div id="set-height"></div>

            <video id="v0" tabIndex="0" autobuffer="true" preload="true" src={video}></video>
        </div>
    )
}

export default Map