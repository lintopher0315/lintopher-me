import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const IMGS = [
    ["autobeats_img.png", "chessview_img.png", "gozero_img.png"],
    ["seashell_img.png", "betterbnb_img.png", "imageworks_img.png"],
    ["quickmath_img.png", null, null],
]

const MISC_IMGS = [
    ["cses_img.png", null, null],
]

const TITLES = [
    ["Spotify Browser Player/Visualizer", "CLI for Chess Analysis", "RL Bot for Go"],
    ["Basic Shell Implementation", "BnB Application/Extension", "Digital Image Processing"],
    ["Simple Arithmetic Practice Site", null, null],
]

const MISC_TITLES = [
    ["CSES Problem Set", null, null],
]

const DESCS = [
    ["a 3D Spotify visualizer straight from the browser", "a lightweight command line interface for viewing and analyzing lichess games", "an RL bot based off of Monte Carlo Tree Search for the Go board game, from scratch"],
    ["a simple UNIX-based shell written in C", "a web app and extension that allows quick access to rental listings information for travelers", "a short collection of image processing experiments"],
    ["a tool that enables basic math practice and competition over the web", null, null],
]

const MISC_DESCS = [
    ["my personal solutions to the CSES problem set", null, null],
]

function Home() {

    let grid = IMGS.map((img, i) => {
        return (
            <Row id="row" key={i}>
                <Col id="left-col" xs={12} sm={12} md={4}>
                    {img[0]!==null ? <img src={require(`./../res/${img[0]}`)} id="left-img" alt="" /> : <div></div>}
                    <div id="card-desc" style={{paddingLeft: '3px'}}>
                        {DESCS[i][0]}
                    </div>
                    <div id="card-title">
                        <p><Link id="card-link" to={IMGS[i][0].substring(0, IMGS[i][0].indexOf("_"))}>{TITLES[i][0]}</Link></p>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={4}>
                    {img[1]!==null ? <img src={require(`./../res/${img[1]}`)} id="center-img" alt="" /> : <div></div>}
                    <div id="card-desc" style={{paddingLeft: '12px'}}>
                        {DESCS[i][1]}
                    </div>
                    <div id="card-title">
                        <p id="card-title-text-mid">{IMGS[i][1]!==null ? <Link id="card-link" to={IMGS[i][1].substring(0, IMGS[i][1].indexOf("_"))}>{TITLES[i][1]}</Link> : <div></div>}</p>
                    </div>
                </Col>
                <Col id="right-col" xs={12} sm={12} md={4}>
                    {img[2]!==null ? <img src={require(`./../res/${img[2]}`)} id="right-img" alt="" /> : <div></div>}
                    <div id="card-desc" style={{paddingLeft: '24px'}}>
                        {DESCS[i][2]}
                    </div>
                    <div id="card-title">
                        <p id="card-title-text-right">{IMGS[i][2]!==null ? <Link id="card-link" to={IMGS[i][2].substring(0, IMGS[i][2].indexOf("_"))}>{TITLES[i][2]}</Link> : <div></div>}</p>
                    </div>
                </Col>
            </Row>
        )
    })

    let misc_grid = MISC_IMGS.map((img, i) => {
        return (
            <Row id="row" key={i}>
                <Col id="left-col" xs={12} sm={12} md={4}>
                    {img[0]!==null ? <img src={require(`./../res/${img[0]}`)} id="left-img" alt="" /> : <div></div>}
                    <div id="card-desc" style={{paddingLeft: '3px'}}>
                        {MISC_DESCS[i][0]}
                    </div>
                    <div id="card-title">
                        <p><Link id="card-link" to={MISC_IMGS[i][0].substring(0, MISC_IMGS[i][0].indexOf("_"))}>{MISC_TITLES[i][0]}</Link></p>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={4}>
                    {img[1]!==null ? <img src={require(`./../res/${img[1]}`)} id="center-img" alt="" /> : <div></div>}
                    <div id="card-desc" style={{paddingLeft: '12px'}}>
                        {MISC_DESCS[i][1]}
                    </div>
                    <div id="card-title">
                        <p id="card-title-text-mid">{MISC_IMGS[i][1]!==null ? <Link id="card-link" to={MISC_IMGS[i][1].substring(0, MISC_IMGS[i][1].indexOf("_"))}>{MISC_TITLES[i][1]}</Link> : <div></div>}</p>
                    </div>
                </Col>
                <Col id="right-col" xs={12} sm={12} md={4}>
                    {img[2]!==null ? <img src={require(`./../res/${img[2]}`)} id="right-img" alt="" /> : <div></div>}
                    <div id="card-desc" style={{paddingLeft: '24px'}}>
                        {MISC_DESCS[i][2]}
                    </div>
                    <div id="card-title">
                        <p id="card-title-text-right">{MISC_IMGS[i][2]!==null ? <Link id="card-link" to={MISC_IMGS[i][2].substring(0, MISC_IMGS[i][2].indexOf("_"))}>{MISC_TITLES[i][2]}</Link> : <div></div>}</p>
                    </div>
                </Col>
            </Row>
        )
    })

    return (
        <div>
            <div id="category">
                Development
            </div>
            <Container fluid>
                {grid}
            </Container>
            <div id="category" style={{paddingTop: '7vh'}}>
                Miscellaneous
            </div>
            <Container fluid>
                {misc_grid}
            </Container>
        </div>
    )
}

export default Home;