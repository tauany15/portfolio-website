import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Tabs = ({ activeTab, onSetActiveTab }) => {

    return (
        <div className="tabs">
            <ul className="nav-tab">
                <li><Link
                    // activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => onSetActiveTab("about")}
                    className={activeTab === "about" ? "active" : ""}
                >About</Link></li>
                <li><Link
                    // activeClass="active"
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => onSetActiveTab("education")}
                    className={activeTab === "education" ? "active" : ""}
                >Education</Link></li>
                <li><Link
                    // activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => onSetActiveTab("contact")}
                    className={activeTab === "contact" ? "active" : ""}
                >Contact</Link></li>
            </ul>
        </div>
    );
};

export default Tabs;