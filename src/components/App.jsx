import React, { useState, useEffect } from "react";
import Tabs from "./Tab";
import Header from "./Introduction";
import Profile from "./Profile";
import Education from "./Education";
import Contact from "./Contact";

function App() {
    const [activeTab, setActiveTab] = useState(null);

    const handleSetActiveTab = (tabId) => {
        setActiveTab(tabId);
    };

    useEffect(() => {

        const handleScroll = () => {
            setActiveTab(null);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <Tabs activeTab={activeTab} onSetActiveTab={handleSetActiveTab} />
            <Header />
            <Profile id="about" activeTab={activeTab} />
            <Education id="education" activeTab={activeTab} />
            <Contact id="contact" activeTab={activeTab} />
        </div>
    );
}

export default App;