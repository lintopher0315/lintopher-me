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
            <Row id="row">
                <Col>
                    <img src={img[0]} />
                </Col>
                <Col>
                    <img src={img[1]} />
                </Col>
                <Col>
                    <img src={img[2]} />
                </Col>
            </Row>
        )
    })

    return (
        <div>
            <Container fluid>
                {grid}
            </Container>
        </div>
    )
}

export default Home;