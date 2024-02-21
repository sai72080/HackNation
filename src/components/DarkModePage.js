import React, { useEffect } from 'react';
import './Css/dark_mode.css'; 

const DarkModePage = () => {
  const darkmode = () => {
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', !wasDarkmode);
    const bodyElement = document.body;
    bodyElement.classList.toggle('dark-mode', !wasDarkmode);
  };

  useEffect(() => {
    const onLoad = () => {
      document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
    };

    onLoad();
  }, []);

  return (
    <main>
      <div className="container">
        <div className="container-center">
          <h1 className="container_head">hello page 1</h1>
          <a href="page2.html" className="container_link">
            go to next page
          </a>
          <div></div>
          <button className="container_btn" onClick={darkmode}>
            change
          </button>
        </div>
      </div>
    </main>
  );
};

export default DarkModePage;
