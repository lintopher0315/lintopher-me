import React from 'react';

function Footer() {
    return (
        <div id="footer">
            <div id="icon-container">
                <div id="footer-div">
                    <img src={require("./../res/github.svg")} alt="1" id="footer-icon" />
                </div>
                <div id="footer-div">
                    <img src={require("./../res/mail.svg")} alt="1" id="footer-icon" />
                </div>
                <div id="footer-div">
                    <img src={require("./../res/linkedin.svg")} alt="1" id="footer-icon" />
                </div>
                <div id="footer-div">
                    <img src={require("./../res/leetcode.svg")} alt="1" id="footer-icon" />
                </div>
            </div>
            <div id="footer-text-container">
                <p id="copyright-text">&copy; Christopher Lin 2020</p>
            </div>
        </div>
    )
}

export default Footer;