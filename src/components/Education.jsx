import React from "react";

function Education({ activeTab }) {
  const isBlurred = activeTab !== "education" && activeTab !== null;

  const studies = [
    {
      title: "Bachelor Degree: Information Systems",
      institution: "Federal University of Minas Gerais",
      date: "Completed 08/2017",
    },
    {
      title: "The Complete 2023 Web Development Bootcamp",
      institution: "Udemy.com",
      date: "Completed 09/2023",
    },
    {
      title: "Front-End Development Course",
      institution: "McMaster University",
      date: "Completed 08/2024",
    },
  ];

  const skills = [
    { name: "JavaScript", icon: "fa-brands fa-js" },
    { name: "React", icon: "fa-brands fa-react" },
    { name: "HTML5", icon: "fa-brands fa-html5" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt" },
    { name: "Java", icon: "fa-brands fa-java" },
    { name: "SQL", icon: "fa-solid fa-database" },
  ];

  return (
    <div id="education" className={`education-container ${isBlurred ? "blur" : ""}`}>
      <section className="education-studies">
        <h3 className="education-title">Studies</h3>
        {studies.map(({ title, institution, date }, idx) => (
          <article key={idx} className="study-item">
            <h4>✨ {title}</h4>
            <p>{institution} - <em>{date}</em></p>
          </article>
        ))}
      </section>

      <section className="education-skills">
        <h3 className="education-title">Skills</h3>
        <div className="skills-grid">
          {skills.map(({ name, icon }, idx) => (
            <div key={idx} className="skill-item" aria-label={name}>
              <i className={icon} aria-hidden="true"></i>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Education;
