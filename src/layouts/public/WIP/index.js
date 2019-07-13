import React, { Component, Fragment } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

class WIP extends Component {
    render() {
        return (
            <Fragment>
                <section className='main-content wip'>
                    <Container>
                        <Row>
                            <Col>
                            <h3>Trang web đang được xây dựng</h3>
                            <p>Trang web này đang được xây dựng, xin hãy quay lại sau...</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Fragment>
        );
    }
}

export default WIP;