import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const IMGS = [
    ["https://picsum.photos/300/200", "https://picsum.photos/300/200", "https://picsum.photos/300/200"],
    ["https://picsum.photos/300/200", "https://picsum.photos/300/200", "https://picsum.photos/300/200"],
    ["https://picsum.photos/300/200", null, null],
]

const TITLES = [
    ["Spotify Browser Player/Visualizer", "CLI for Chess Analysis", "RL Bot for Go"],
    ["Basic Shell Implementaion", "BnB Application/Extension", "Digital Image Processing"],
    ["Simple Arithmetic Practice Site", null, null],
]

function Home() {

    let grid = IMGS.map((img, i) => {
        return (
            <Row id="row" key={i}>
                <Col id="left-col">
                    <img src={img[0]} />
                    <div id="card-title">
                        <p>{TITLES[i][0]}</p>
                    </div>
                </Col>
                <Col>
                    <img src={img[1]} id="center-img"/>
                    <div id="card-title">
                        <p id="card-title-text-mid">{TITLES[i][1]}</p>
                    </div>
                </Col>
                <Col id="right-col">
                    <img src={img[2]} id="right-img"/>
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