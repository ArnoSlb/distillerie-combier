import react from "react";

import "./MentionsLegales.css"

import MentionsLegalesDocument from "../../assets/mentions_legales_blinkl_2022.pdf"

const MentionsLegales =(props) => {



    return <div className="MentionsLegales">
        <iframe className="MentionsLegales__iframe" src={MentionsLegalesDocument}></iframe>
    </div>
}

export default MentionsLegales