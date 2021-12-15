import React from "react";
import OriginalCombier from "../OriginalCombier/OriginalCombier";
import ElixirCombier from "../ElixirCombier/ElixirCombier";
import Meridor from "../Meridor/Meridor";

import "./BottleStory.css";

const BottleStory = (props) => {

    if(props.bottle == "original"){
        return (<OriginalCombier/>)
    } else if(props.bottle == "elixir"){
        return (<ElixirCombier/>)
    } else if(props.bottle == "meridor"){
        return (<Meridor/>)
    } else {
        return (<h1>{props.bottle}</h1>)
    }  
}

export default BottleStory