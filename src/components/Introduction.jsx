import React from "react";

function Header() {
    return (
        <div className="top-container">
            <img className="profile-img" src={require("../assets/profile-image.png")} alt="myself" />
            <h2>Hello! 👋 I'm Tauany.</h2>
            <h3>A multidiciplinary developer with a passion for learning and creating new things.</h3>
            <div className="top-icon"><i className="fa fa-angle-down fa-bounce" aria-hidden="true"></i></div>
        </div>
    );
}

export default Header;