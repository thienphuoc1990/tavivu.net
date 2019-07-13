import React, { Component } from 'react';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';

class BannerImage extends Component {
    render() {
        return (
            <section className="top-banner" style={{ backgroundImage: "url('" + this.props.banner.image + "')" }}>
                <div className="overlay"></div>
                {(this.props.title) ?
                    <div className="overlay-section">
                        <Container>
                            <Row>
                                <Col className="text-center">
                                    <div className="title">
                                        <h3>{this.props.title}</h3>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    : null}
            </section>
        );

    }
}

export default BannerImage;