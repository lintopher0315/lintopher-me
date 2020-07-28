import React from 'react';

function About() {
    return (
        <div>
            <div id="about-title">
                About Me
            </div>
            <p id="about-text">
                Hello, my name is Christopher Lin. I'm currently a full-time student in my third year of studying Computer Science at Purdue University.
                As far as interests go, it depends on my mood. I enjoy lots of things such as competitive programming, web development, command line tools, etc.
                In fact, here's a collection of technologies that have grabbed my attention:
            </p>
            <div style={{paddingTop: '15px'}}>
                <img src={require("./../res/java.svg")} alt="1" id="about-icon" style={{filter: 'invert(23%) sepia(53%) saturate(3889%) hue-rotate(176deg) brightness(93%) contrast(101%)'}} />
                <img src={require("./../res/javascript.svg")} alt="1" id="about-icon" style={{filter: 'invert(89%) sepia(41%) saturate(1021%) hue-rotate(340deg) brightness(105%) contrast(94%)'}} />
                <img src={require("./../res/net.svg")} alt="1" id="about-icon" style={{filter: 'invert(19%) sepia(19%) saturate(7093%) hue-rotate(253deg) brightness(92%) contrast(92%)'}} />
                <img src={require("./../res/cplusplus.svg")} alt="1" id="about-icon" style={{filter: 'invert(19%) sepia(98%) saturate(2183%) hue-rotate(190deg) brightness(90%) contrast(101%)'}} />
                <img src={require("./../res/node.svg")} alt="1" id="about-icon" style={{filter: 'invert(42%) sepia(92%) saturate(535%) hue-rotate(74deg) brightness(95%) contrast(74%)'}} />
                <img src={require("./../res/flask.svg")} alt="1" id="about-icon" style={{filter: 'invert(25%) sepia(97%) saturate(1717%) hue-rotate(340deg) brightness(94%) contrast(98%)'}} />
                <img src={require("./../res/aws.svg")} alt="1" id="about-icon" style={{filter: 'invert(35%) sepia(16%) saturate(1014%) hue-rotate(174deg) brightness(98%) contrast(92%)'}} />
                <img src={require("./../res/vim.svg")} alt="1" id="about-icon" style={{filter: 'invert(35%) sepia(90%) saturate(3808%) hue-rotate(130deg) brightness(94%) contrast(99%)'}} />
                <img src={require("./../res/python.svg")} alt="1" id="about-icon" style={{filter: 'invert(42%) sepia(23%) saturate(1249%) hue-rotate(166deg) brightness(94%) contrast(90%)'}} />
                <img src={require("./../res/mongodb.svg")} alt="1" id="about-icon" style={{filter: 'invert(65%) sepia(18%) saturate(4281%) hue-rotate(73deg) brightness(86%) contrast(57%)'}} />
                <img src={require("./../res/linux.svg")} alt="1" id="about-icon" style={{filter: 'invert(80%) sepia(45%) saturate(770%) hue-rotate(347deg) brightness(97%) contrast(104%)'}} />
                <img src={require("./../res/react.svg")} alt="1" id="about-icon" style={{filter: 'invert(85%) sepia(11%) saturate(5574%) hue-rotate(164deg) brightness(102%) contrast(97%)'}} />
            </div>
            <p id="about-text">
                I've learned a lot during my college years and I plan to continue doing so.
                For now though, feel free to browse through some of the things I've been working on the past few years.
            </p>
        </div>
    )
}

export default About;