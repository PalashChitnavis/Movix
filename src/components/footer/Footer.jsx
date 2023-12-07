/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

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
                Explore movies effortlessly on the Movix website, crafted under Shariq Ansaris guidance and made using React, SaaS, and the TMDB API. The user-friendly interface enhances your movie search, providing a seamless blend of tech and entertainment. Immerse yourself in the cinematic world with a click!
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a target="_blank" style={{textDecoration: "none"}} href="https://www.instagram.com/palash_chitnavis/"><FaInstagram /></a>
                    </span>
                    <span className="icon">
                        <a target="_blank" style={{textDecoration: "none"}} href="https://github.com/PalashChitnavis"><FaGithub /></a>
                    </span>
                    <span className="icon">
                        <a target="_blank" style={{textDecoration: "none"}} href="https://www.linkedin.com/in/palash-chitnavis-83b109254/"><FaLinkedin /></a>
                    </span>
                </div>
                <div className="infoText gap">Made by Palash Chitnavis</div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
