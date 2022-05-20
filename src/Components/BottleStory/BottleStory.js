import React from "react";
import OriginalCombier from "../OriginalCombier/OriginalCombier";
import ElixirCombier from "../ElixirCombier/ElixirCombier";
import Meridor from "../Meridor/Meridor";
import AbsintheBlanchette from "../AbsintheBlanchette/AbsintheBlanchette";

import "./BottleStory.css";

const BottleStory = (props) => {

    if(props.bottle == "original"){
        return (<OriginalCombier langSelected={props.langSelected}/>)
    //} else if(props.bottle == "elixir"){
    //     return (<ElixirCombier langSelected={props.langSelected}/>)
    } else if(props.bottle == "meridor"){
        return (<Meridor langSelected={props.langSelected}/>)
    // } else if(props.bottle == "blanchette"){
    //     return (<AbsintheBlanchette langSelected={props.langSelected}/>)
    } else {
        return (<div></div>)
    }  
}

export default BottleStory