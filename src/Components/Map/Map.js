import React, {useState} from 'react';
import { disablePageScroll, enablePageScroll, clearQueueScrollLocks } from 'scroll-lock';

import './Map.css';
import video from "../../assets/Intro.mp4";
import LogoCombierTransparent from "../../assets/Combier_logo_transparent.png";
import SalledesAlembics from "../../assets/salle_des_alembic.jpg";
import ArrowDown from "../../assets/Bottom_Arrow.png";
import EmblemeCoin from "../../assets/Embleme_coin.png";


const Map = (props) => {

    // lower numbers = faster playback
    const playbackConst = 550;

    React.useEffect(() => {

        if(window.innerWidth/window.innerHeight > 16/9){
            document.getElementById('v0').style.height = "auto"
            document.getElementById('v0').style.width = "100vw"
        } else {
            document.getElementById('v0').style.height = "100vh"
            document.getElementById('v0').style.width = "auto"
        }

        window.onresize = (() => {
            if(window.innerWidth/window.innerHeight > 16/9){
                document.getElementById('v0').style.height = "auto"
                document.getElementById('v0').style.width = "100vw"
            } else {
                document.getElementById('v0').style.height = "100vh"
                document.getElementById('v0').style.width = "auto"
            }
        })


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
            // console.log('hauteur nécessaire pour lire la video : ' + setHeight.style.height)

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
       
        const {scrollTop, scrollHeight, clientHeight} = document.documentElement

        

        // console.log(scrollTop, clientHeight, scrollHeight, window.screen.availHeight)

        // cleanup this component
        // You need to remove the event listener when the component is unmounted.
        // The useEffect hook helps you out with an optional return value in the callback function. 
        // You can return a function in the useEffect callback and that function will run when the component unmounts
        return () => {
            vid.removeEventListener('loadedmetadata', setPageHeight)
            enablePageScroll();
            clearQueueScrollLocks();
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

    const startDesktopExp = () => {
        clearQueueScrollLocks();
        enablePageScroll()
        document.querySelector('.Map_18__container').style.display = "none"
        document.querySelector('.Map__scrollToStart__container').style.display = "flex"
        document.querySelector('.Map__container').style.zIndex = "2"
        clearQueueScrollLocks();
    }

    return (
        <div className="Map" id="map">

            <section className="Map__container">
                <div className="Map__container__content"></div>
            </section>
            {props.langSelected == 'FR' ?
            <section className="Map__container">
                <div className="Map__container__content anim">
                    <h1>Bienvenue en France</h1>
                </div>
            </section> 
            :
            <section className="Map__container">
                <div className="Map__container__content anim">
                    <h1>Welcome in France</h1>
                </div>
            </section> 
            }
            {props.langSelected == 'FR' ?
            <section className="Map__container">
                 <div className="Map__container__content anim">
                     <h1>Au cœur du Val-de-Loire</h1>
                 </div>
             </section> 
            :
            <section className="Map__container">
                 <div className="Map__container__content anim">
                     <h1>In the heart of the Loire Valley</h1>
                 </div>
             </section> 
            }
            {props.langSelected == 'FR' ?
            <section className="Map__container">
                <div className="Map__container__content anim">
                    <h1>À Saumur</h1>
                </div>
            </section> 
            :
            <section className="Map__container">
            <div className="Map__container__content anim">
                <h1>In Saumur</h1>
            </div>
        </section> 
            }
        
            {props.langSelected == 'FR' ? 
            <section className="Map__container">
                <div className="Map__container__content anim">
                    <h1>Dans la Distillerie Combier</h1>
                    {/* <p>Start it like this</p> */}
                </div>
            </section>
            :
            <section className="Map__container">
                <div className="Map__container__content anim">
                    <h1>In the Distillerie Combier</h1>
                </div>
            </section>
            }

            <div id="set-height"></div>
            
            {props.langSelected == 'FR' ? 
            <div className="Map_coin">
                <div class="coin">
                    <div class="coin__front"></div>
                    <div class="coin__back"></div>
                </div>
                <p className="Map_coin__">Bienvenue à la Distillerie Combier pour une visite immersive pleine de surprises. </p>
                {/* <div className="Map_18__container">
                        <p className="Map_coin__ margin_btm">Avez-vous plus de 18 Ans ?</p>
                        <div className="Map_18__container__btn_start_exp_container">
                            <p className="Map_18__container__btn_start_exp" onClick={startDesktopExp}>Oui</p>
                            <p className="Map_18__container__btn_start_exp">Non</p>
                        </div>
                </div>     */}
                <div className='Map__scrollToStart__container'>
                    <p>Scroller pour commencer l’expérience. </p>
                    <img className="Map_coin__arrow" src={ArrowDown} alt="" />
                </div> 
                {/* <p className="Warning_alcool">L'ABUS D'ALCOOL EST DANGEREUX POUR LA SANTÉ, À CONSOMMER AVEC MODÉRATION</p> */}
            </div>
            :
            <div className="Map_coin">
                <div class="coin">
                    <div class="coin__front"></div>
                    <div class="coin__back"></div>
                </div>
                <p className="Map_coin__">Welcome to the Distillerie Combier  for an immersive visit full of surprises. </p>
                {/* <div className="Map_18__container">
                        <p className="Map_coin__ margin_btm">Are you over 18 ?</p>
                        <div className="Map_18__container__btn_start_exp_container">
                            <p className="Map_18__container__btn_start_exp" onClick={startDesktopExp}>Yes</p>
                            <p className="Map_18__container__btn_start_exp">No</p>
                        </div>
                </div>   */}
                <div className='Map__scrollToStart__container'>
                    <p>Scroll to start </p>
                    <img className="Map_coin__arrow" src={ArrowDown} alt="" />
                </div>
                {/* <p className="Warning_alcool">ALCOHOL ABUSE IS DANGEROUS FOR YOUR HEALTH, CONSUME WITH MODERATION</p> */}
            </div>
            }
            <video id="v0" class="v0" tabIndex="0" autobuffer="true" preload="true" src={video}></video>
        </div>
    )
}

export default Map