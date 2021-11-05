import React from "react";
import "./Empty.css"


const Empty = ({randomColor}) => {

    return(
        <div className="Empty" style={{ backgroundColor: randomColor }}></div>
    )
}

export default Empty