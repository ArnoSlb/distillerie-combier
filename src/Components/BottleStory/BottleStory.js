import React from "react";
import OriginalCombier from "../OriginalCombier/OriginalCombier";

import "./BottleStory.css";

const BottleStory = (props) => {

    if(props.bottle == "original"){
        return (<OriginalCombier/>)
    }

    console.log(props.bottle)
    return (
        <h1>{props.bottle}</h1>
    )
}

export default BottleStory