import React from "react";
import OriginalCombier from "../OriginalCombier/OriginalCombier";
import ElixirCombier from "../ElixirCombier/ElixirCombier";

import "./BottleStory.css";

const BottleStory = (props) => {

    if(props.bottle == "original"){
        return (<OriginalCombier/>)
    } else if(props.bottle == "elixir"){
        return (<ElixirCombier/>)
    }

    console.log(props.bottle)
    return (
        <h1>{props.bottle}</h1>
    )
}

export default BottleStory