import React from "react";

const Profile = ({ activeTab }) => {
  const handleOpenResume = () => {
    const filePath = `${process.env.PUBLIC_URL}/Tauany_SilvaSantos_Resume.pdf`;
    const newWindow = window.open(filePath, '_blank');
    if (newWindow) {
      newWindow.focus();
    } else {
      console.error('Failed to open new window. It might be blocked by a pop-up blocker.');
    }
  };

  return (
    <div className={`profile-container ${activeTab !== "about" && activeTab !== null ? 'blur' : ''}`}>
      <div id="profile" className="profile">
        <h2 id="about" className="title">About me!</h2>
        <p className="intro">
          As a software developer, I've transitioned from a developer analyst to full-stack development, spending over a year building a user-friendly application. Currently, I'm immersed in technical support while refining my skills. My focus is on merging technical expertise with client-centric solutions, aiming to create software that truly enhances user experiences. I'm committed to pushing boundaries and turning my passion for coding into a purposeful career.
        </p>
        <button
          className="btn-resume"
          onClick={handleOpenResume}
          aria-label="Open resume in a new tab"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Profile;
