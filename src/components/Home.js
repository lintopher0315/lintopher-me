import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const IMGS = [
    ["https://picsum.photos/300/200", "https://picsum.photos/300/200", "https://picsum.photos/300/200"],
    ["https://picsum.photos/300/200", "https://picsum.photos/300/200", "https://picsum.photos/300/200"],
    ["https://picsum.photos/300/200", null, null],
]

function Home() {

    let grid = IMGS.map((img, i) => {
        return (
            <Row id="row" key={i}>
                <Col id="left-col">
                    <img src={img[0]} />
                </Col>
                <Col>
                    <img src={img[1]} id="center-img"/>
                </Col>
                <Col id="right-col">
                    <img src={img[2]} id="right-img"/>
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