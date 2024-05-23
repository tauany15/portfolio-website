import React from "react";

function Education({ activeTab }) {
    return (
        <div id="education" className={`education-container ${activeTab !== "education" && activeTab !== null ? 'blur' : ''}`}>
            <section className="grid-education-item1">
                <h3 className="education-title">Studies</h3>
                <h4>✨ Bachelor Degree: Information Systems</h4>
                <p>Federal University of Minas Gerais - 08/2017</p>
                <h4>✨ The Complete 2023 Web Development Bootcamp</h4>
                <p>Udemy.com - 09/2023</p>
                <h4>✨ Front-End Development Course</h4>
                <p>McMaster University - In progress</p>
            </section>

            <section className="grid-education-item2">
                <h3 className="education-title">Skills</h3>
                <div className="grid-items">
                    <p><i className="fa-brands fa-js"></i> JavaScript</p>
                    <p><i className="fa-brands fa-react"></i> React</p>
                    <p><i className="fa-brands fa-html5"></i> HTML5</p>
                    <p><i className="fa-brands fa-css3-alt"></i> CSS3</p>
                    <p><i className="fa-brands fa-java"></i> Java</p>
                    <p><i className="fa-solid fa-database"></i> SQL</p>
                </div>
            </section>
        </div>
    )
};

export default Education;