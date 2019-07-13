import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Datatable from '../../../components/Datatable/index';
import './style.css';

class TourDetails extends Component {
    state = {
        data: this.props.data
    }

    render() {
        return (
            <section className="tour-details">
                <Container>
                    <Row>
                        <Col md={12}>
                            <h4 className="section-title tink-color-orange mt-3">Thông tin các chuyến đi</h4>
                            <Datatable data={this.state.data} />
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default TourDetails;
