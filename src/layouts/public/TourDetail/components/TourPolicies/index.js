import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import renderHTML from 'react-render-html';
import './style.css';

class TourPolicies extends Component {
    state = {
        tour: this.props.tour
    }

    render() {
        return (
            <section className="tour-policies">
                <Container>
                    <Row>
                        <Col>
                            <div className="content">{(this.state.tour.tour_policies) ? renderHTML(this.state.tour.tour_policies) : null}</div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default TourPolicies;
