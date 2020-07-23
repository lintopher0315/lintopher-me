import React from 'react';

function Footer() {
    return (
        <div id="footer">
            <div id="icon-container">
                <div id="footer-div">
                    <a href="https://github.com/lintopher0315" target="_blank" id="footer-link">
                        <img src={require("./../res/github.svg")} alt="1" id="footer-icon" />
                    </a>
                </div>
                <div id="footer-div">
                    <a href="mailto: lintopher@gmail.com" target="_blank" id="footer-link">
                        <img src={require("./../res/mail.svg")} alt="1" id="footer-icon" />
                    </a>
                </div>
                <div id="footer-div">
                    <a href="https://www.linkedin.com/in/christopher-lin-98146913b/" target="_blank" id="footer-link">
                        <img src={require("./../res/linkedin.svg")} alt="1" id="footer-icon" />
                    </a>
                </div>
                <div id="footer-div">
                    <a href="https://leetcode.com/physics_alpaca/" target="_blank" id="footer-link">
                        <img src={require("./../res/leetcode.svg")} alt="1" id="footer-icon" />
                    </a>
                </div>
            </div>
            <div id="footer-text-container">
                <p id="copyright-text">&copy; Christopher Lin 2020</p>
            </div>
        </div>
    )
}

export default Footer;