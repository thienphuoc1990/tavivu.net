import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import renderHTML from 'react-render-html';
import './style.css';

class TourInfo extends Component {
    state = {
        tour: this.props.tour
    }

    render() {
        return (
            <section className="tour-infos">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="infos">
                                <div className="info">
                                    <span className="text-uppercase">Thời gian: </span>
                                    <span className="font-weight-bold">{this.state.tour.time_range}</span>
                                </div>
                                <div className="info">
                                    <span className="text-uppercase">Phương tiện: </span>
                                    <span className="font-weight-bold">{this.state.tour.vehicle}</span>
                                </div>
                                <div className="info">
                                    <span className="text-uppercase">Điểm xuất phát: </span>
                                    <span className="font-weight-bold">{this.state.tour.from_place}</span>
                                </div>
                                <div className="info">
                                    <span className="text-uppercase">Điểm đến: </span>
                                    <span className="font-weight-bold">{this.state.tour.to_place}</span>
                                </div>
                                <div className="info">
                                    <span className="text-uppercase">Tour này có gì hay: </span>
                                    { (this.state.tour.tour_attractions) ? renderHTML(this.state.tour.tour_attractions) : null}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default TourInfo;
