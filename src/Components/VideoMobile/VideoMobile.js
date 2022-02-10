import React from "react";
import video from "../../assets/FlyOver11.mp4"

import './VideoMobile.css'

const VideoMobile = () => {


    React.useEffect(() => {

        // We select every elements with the class .anim
        const videoFile = document.querySelector('.VideoMobile__file');

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
        <div className="VideoMobile">
            <video className="VideoMobile__file" autoPlay={true} autobuffer="true" preload="true" src={video}></video>
        </div>  
        
    )
}

export default VideoMobile