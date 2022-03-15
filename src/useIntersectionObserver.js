import React, { useEffect, useState} from "react";

const useIntersectionObserver = (reference) => {
    const [isVisible, setIsVisible] = useState(false)
    const pathUrl = window.location.pathname

    useEffect(() => {
        const handleIntersect = (entries, observer) => {
            if(entries[0].isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entries[0].target)
                observer.disconnect()
            }
        }

        //Create the observer, passing in the callback
        const observer = new IntersectionObserver(handleIntersect);

        console.log(pathUrl)

        //If we have a ref value, start observing it
        if(reference && pathUrl != "/mentionslegales" ) {
            observer.observe(reference.current);
        }

        // If unmounting, disconnect the observer
        return () => observer.disconnect();
    },[reference])

    // If we have a reference, then begin observing the underlying DOM node, reference.current.
    // We need a check to ensure we have a reference before trying to observe it. Otherwise, an error will occur.
    // Finally, return a function in our useEffect that will disconnect the observer if the component unmounts.

    return isVisible;
}

export default useIntersectionObserver;