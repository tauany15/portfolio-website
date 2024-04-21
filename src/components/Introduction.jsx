import React from "react";

function Header() {
    return(
        <div className="top-container">
            {/* <img className="top-cloud" src={require("../assets/cloud.png")} alt="Cloud"/> */}
            <h2>Hello! I'm Tauany.</h2>
            <h3>A multidiciplinary developer with a passion for learning and creating new things.</h3>
            <i class="fa fa-angle-down fa-bounce top-icon" aria-hidden="true"></i>
        </div>
    );
}

export default Header;