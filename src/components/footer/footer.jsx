    import React from "react";
    import "./Footer.scss";
    import footerImg from "/src/assets/head.png";
    import facebook from "/src/assets/facebook.svg";
    import instagram from "/src/assets/instagram.svg";

    const Footer = () => {
        return (
    <footer className="footer">
    <nav className="footer__nav" aria-label="Footer navigation">
        <section className="footer__links footer__links-account">
        <h4>Your Account</h4>
        <ul>
            <li><a href="/account">Your Account</a></li>
            <li><a href="/signup">Sign Up</a></li>
            <li><a href="/login">Log in</a></li>
            <li><a href="/help">Help</a></li>
        </ul>
        </section>

        <section className="footer__links footer__links-discover">
        <h4>Discover</h4>
        <ul>
            <li><a href="/events">Events</a></li>
            <li><a href="/online">Online</a></li>
            <li><a href="/local-guides">Local Guides</a></li>
        </ul>
        </section>

        <figure className="footer__logo-figure">
        <a href="/" className="footer__logo-link">
            <img src={footerImg} alt="Company Logo" className="footer__logo" />
        </a>
        </figure>

        <section className="footer__social">
        <p>Follow us</p>
        <ul className="footer__social-list">
            <li>
            <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
            >
                <img src={facebook} alt="" className="footer__icon" />
            </a>
            </li>
            <li>
            <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
            >
                <img src={instagram} alt="" className="footer__icon" />
            </a>
            </li>
        </ul>
        </section>
    </nav>

    <address className="footer__copyright">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
    </address>
    </footer>

        );
    };

    export default Footer;