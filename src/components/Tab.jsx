import React, { useRef, useEffect } from "react";

const Tabs = ({ activeTab, onSetActiveTab }) => {
  const tabsRef = useRef([]);

  const tabs = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  tabsRef.current = [];

  useEffect(() => {
    const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const target = tabsRef.current[activeIndex];
    if (target && typeof target.focus === "function") {
      target.focus();
    }
  }, [activeTab]);

  const handleClick = (tabId, index) => {
    const section = document.getElementById(tabId);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    onSetActiveTab(tabId);

    const tabElement = tabsRef.current[index];
    if (tabElement) {
      setTimeout(() => {
        tabElement.blur();
        onSetActiveTab(null);
      }, 500); 
    }
  };
  

  const handleKeyDown = (e, index) => {
    const lastIndex = tabs.length - 1;

    if (e.key === "ArrowRight") {
      const nextIndex = index === lastIndex ? 0 : index + 1;
      tabsRef.current[nextIndex].focus();
    }

    if (e.key === "ArrowLeft") {
      const prevIndex = index === 0 ? lastIndex : index - 1;
      tabsRef.current[prevIndex].focus();
    }

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick(tabs[index].id);
    }
  };

  const addToRefs = (el) => {
    if (el && !tabsRef.current.includes(el)) {
      tabsRef.current.push(el);
    }
  };

  return (
    <nav className="tabs" role="navigation" aria-label="Main navigation">
      <ul className="nav-tab" role="tablist">
        {tabs.map((tab, index) => (
          <li key={tab.id}>
            <a
              href={`#${tab.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(tab.id, index);
              }}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={activeTab === tab.id ? "active" : ""}
              tabIndex={0}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={tab.id}
              ref={addToRefs}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
