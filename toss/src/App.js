import './App.css';
import React from 'react';
import Logo from "../src/assets/images/toss_logo.svg"
import Mainimage from "../src/assets/images/main-background-image.png";

function App() {
  return (
    <div className = "TossPage">
      <nav className = "navbar">
        <div className = "navbar_default">
          <div className = "navbar_inner">
            <div className = "logo_container">
              <a className = "logo" href = "/">
                <span className = "icon">
                  <img src={Logo} style={{width: "65px", height: "20px"}} />
                </span>
              </a> 
            </div>
            <div className = "navbar_content">
              <ul className = "navbar-menu">
                <li className = "navbar-item">
                  <a href = "/team">회사 소개</a>
                </li>
                <li className = "navbar-item">
                  <a href = "/support">고객센터</a>
                </li>
                <li className = "navbar-item">
                  <a href = "/faq">자주 묻는 질문</a>
                </li>
                <li className = "navbar-item">
                  <a href = "/tosscert">토스인증서</a>
                </li>
                <li className = "navbar-item">
                  <a href = "/career">채용</a>
                </li>
                <div className = "language">
                  <li className = "navbar-item"><a className = "korean">KOR</a></li>
                  <span className = "shortgray">|</span>
                  <li className = "navbar-item"><a className = "english">ENG</a></li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* <section className = "main-page">
        <div className = "main-section">
          <div className = "main-background-image">
            <img src = {Mainimage} className = "main-image"></img>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default App;
