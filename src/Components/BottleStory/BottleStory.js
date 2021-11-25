import React from "react";

import "./BottleStory.css";

const BottleStory = (props) => {

    console.log(props.bottle)
    return (
        <h1>{props.bottle}</h1>
    )
}

export default BottleStory