import React from "react";

import "./Scene360Loader.css"

const Scene360Loader = () => {

    return (
        <div className="Scene360Loader">
            <div className="Scene360Loader__container">
                <div id="ctn">
                    <div class="loader loader_one"></div>
                    <div class="loader loader_two"></div>
                    <div class="loader loader_three"></div>
                </div>
                <h1>Chargement</h1>
            </div>
        </div>
    )
}

export default Scene360Loader