import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';
import BTGallery from './components/BTGallery/Index';
import Title from  '../Title/index';

class GalleryPlaces extends Component {

    render () {
        return (
            <section className="places-section odd">
                <Container>
                    <Title highlight={this.props.places.title.highlight} class_title='section-title' normal={this.props.places.title.normal} />
                    <Row>
                        <Col>
                            <BTGallery images={this.props.places.data}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }

}

export default GalleryPlaces;