import React from "react";
import footerImg from "/src/assets/head.png";
import facebook from "/src/assets/facebook.svg";
import instagram from "/src/assets/instagram.svg";
import "./Footer.scss";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__left">
                <ul>
                    <li>Your Account</li>
                    <li>Sign Up</li>
                    <li>Log in</li>
                    <li>Help</li>
                </ul>
                <ul>
                    <li>Discover</li>
                    <li>Events</li>
                    <li>Online</li>
                    <li>Local Guides</li>
                </ul>
            </div>

            <div className="footer__center">
                <img src={footerImg} alt="Logo" className="footer__logo" />
            </div>

            <div className="footer__right">
                <p className="footer__follow">Follow us</p>
                <div className="footer__icons">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={facebook}
                            alt="Facebook"
                            className="footer__icon"
                        />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={instagram}
                            alt="Instagram"
                            className="footer__icon"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;