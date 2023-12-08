import React from 'react';
import FacebookLogo from "../../assets/Facebooklogo.png";
import GithubLogo from "../../assets/githublogo.png";
import InstagramLogo from "../../assets/Instagram.png";
import './style.css';

function Footer() {
  return (
    <div className="footer-container">
      <a href="https://www.facebook.com/eDDyBoWTV/" target="_blank" rel="noopener noreferrer">
        <img src={FacebookLogo} height="50px" alt="Facebook logo" />
      </a>
      <a href="https://github.com/eDDyBoWbOw/" target="_blank" rel="noopener noreferrer">
        <img src={GithubLogo} height="45px" alt="Github logo" />
      </a>
      <a href="https://www.instagram.com/3bowsforeddy/" target="_blank" rel="noopener noreferrer">
        <img src={InstagramLogo} height="40px" alt="Instagram logo" />
      </a>
    </div>
  );
}

export default Footer;
