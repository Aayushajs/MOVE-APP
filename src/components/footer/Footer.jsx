import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";
 

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                 aayushj004@gmail.com 
                 || Contect as +91 9302633266
                </div>
                <div className="socialIcons">
                    <a href="https://instagram.com/aayush.ajs"> <span className="icon">
                        <FaFacebookF />
                    </span></a>
                    <span className="icon" >
                    <a href="https://instagram.com/aayushajs?igshid=NTc4">  <FaInstagram /></a>
                    </span>
                   <a href="https://github.com/Aayushajs">  <span className="icon">
                        <FaGithub />
                    </span></a>
                    <a href="https://www.linkedin.com/in/aayush-jain-00752430b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "> <span className="icon" >
                        <FaLinkedin/> 
                    </span></a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
