import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <div className="tabs" tabindex="1">
            <ul className="nav-tab">
                <li><Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >About</Link></li>
                <li><Link
                    activeClass="active"
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Education</Link></li>
                <li><Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Contact</Link></li>
            </ul>
        </div>
    );
};

export default Tabs;