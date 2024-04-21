import React from "react";
import Tabs from "./Tab";
import Header from "./Introduction";
import Profile from "./Profile";
import Education from "./Education";
import Contact from "./Contact";

function App() {
    return (
            <div>
                <Tabs />
                <Header />
                <Profile />
                <Education />
                <Contact />
            </div>
    );
}

export default App;