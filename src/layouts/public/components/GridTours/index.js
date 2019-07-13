import React, { Component } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Tour from './components/TourV2/index';
import Title from '../Title/index';
import './style.css';

class GridTours extends Component {

    printTours = (tours) => {
        var result = null;
        result = tours.map((tour, index) => {
            return (
                <Tour key={index} tour={tour} />
            )
        })
        return result
    }


    render() {

        return (
            <section className="grid-tours-section">
                <Container>
                    <Title highlight={this.props.tours.title.highlight} class_title='section-title' normal={this.props.tours.title.normal} />
                    <Row>
                        {this.printTours(this.props.tours.data)}
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <Link to={'/tours-quoc-te'}>
                                <Button variant="outline-tink-pink">Xem thêm</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default GridTours;
