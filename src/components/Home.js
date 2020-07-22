import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const IMGS = [
    ["autobeats_img.png", "chessview_img.png", "gozero_img.png"],
    ["seashell_img.png", "betterbnb_img.png", "imageworks_img.png"],
    ["quickmath_img.png", null, null],
]

const TITLES = [
    ["Spotify Browser Player/Visualizer", "CLI for Chess Analysis", "RL Bot for Go"],
    ["Basic Shell Implementaion", "BnB Application/Extension", "Digital Image Processing"],
    ["Simple Arithmetic Practice Site", null, null],
]

const DESCS = [
    ["a 3D Spotify visualizer straight from the browser", "a lightweight command line interface for viewing and analyzing lichess games", "an RL bot based off of Monte Carlo Tree Search for the Go board game, from scratch"],
    ["a simple UNIX-based shell written in C", "a web app and extension that allows quick access to rental listings information for travelers", "a short collection of image processing experiments"],
    ["a tool that enables basic math practice and competition over the web", null, null],
]

function Home() {

    let grid = IMGS.map((img, i) => {
        return (
            <Row id="row" key={i}>
                <Col id="left-col">
                    {img[0]!==null ? <img src={require(`./../res/${img[0]}`)} id="left-img"/> : <div></div>}
                    <div id="card-desc" style={{paddingLeft: '3px'}}>
                        {DESCS[i][0]}
                    </div>
                    <div id="card-title">
                        <p>{TITLES[i][0]}</p>
                    </div>
                </Col>
                <Col>
                    {img[1]!==null ? <img src={require(`./../res/${img[1]}`)} id="center-img"/> : <div></div>}
                    <div id="card-desc" style={{paddingLeft: '12px'}}>
                        {DESCS[i][1]}
                    </div>
                    <div id="card-title">
                        <p id="card-title-text-mid">{TITLES[i][1]}</p>
                    </div>
                </Col>
                <Col id="right-col">
                    {img[2]!==null ? <img src={require(`./../res/${img[2]}`)} id="right-img"/> : <div></div>}
                    <div id="card-desc" style={{paddingLeft: '24px'}}>
                        {DESCS[i][2]}
                    </div>
                    <div id="card-title">
                        <p id="card-title-text-right">{TITLES[i][2]}</p>
                    </div>
                </Col>
            </Row>
        )
    })

    return (
        <Container fluid>
            {grid}
        </Container>
    )
}

export default Home;