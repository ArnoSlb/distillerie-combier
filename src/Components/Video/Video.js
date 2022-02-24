import React from "react";
import video from "../../assets/Intro_map.mp4"

import './Video.css'

const Video = () => {


    React.useEffect(() => {

        // We select every elements with the class .anim
        const videoFile = document.querySelector('.Video__file');

        //We create an intersection observer to know when the element is in the viewport
        // More details here : https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API
        const observer = new IntersectionObserver((entry) => {

            if (entry[0].isIntersecting){
                // console.log('Lancer la vidéo')
                videoFile.play()
            } else {
                // console.log('Mettre en pause')
                videoFile.pause()
            }
        })

        observer.observe(videoFile)

    }, [])
    

    return(
        <div className="Video">
            <video className="Video__file" autobuffer="true" preload="true" playsInline={true} src={video}></video>
        </div>  
        
    )
}

export default Video