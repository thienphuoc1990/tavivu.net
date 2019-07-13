import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import GridTour from '../../../components/GridTours/components/TourV2/index';
import ListTour from '../../../components/ListTour/index';
import './style.css';

class ToursList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_show_list: true
        };
        this.changeDisplayType = this.changeDisplayType.bind(this);
    }

    state = {
    }

    changeDisplayType() {
        this.setState({
            is_show_list: !this.state.is_show_list
        });
    }

    showTours = (tours) => {
        if (!this.state.is_show_list) {
            return (
                <section className="grid-tours-section">
                    <Row>
                        {this.showGridTours(tours)}
                    </Row>
                </section>
            );
        } else {
            return (
                <section className="list-tours-section">
                    <Row>
                        {this.showListTours(tours)}
                    </Row>
                </section>
            );
        }

    }

    showGridTours = (tours) => {
        var result = null;
        result = tours.map((tour, index) => {
            return (
                <GridTour key={index} tour={tour} />
            )
        })
        return result
    }

    showListTours = (tours) => {
        var result = null;
        result = tours.map((tour, index) => {
            return (
                <ListTour key={index} tour={tour} />
            )
        })
        return result
    }

    render() {
        return (
            <section className="main-content">
                <Container>
                    <Row>
                        <Col className="text-right display-icon">
                            <button className={(this.state.is_show_list) ? "active" : ""} onClick={this.changeDisplayType}><i className="fas fa-list"></i></button>
                            <button className={(!this.state.is_show_list) ? "active" : ""} onClick={this.changeDisplayType}><i className="fas fa-th"></i></button>
                        </Col>
                    </Row>
                    {this.showTours(this.props.tours)}
                </Container>
            </section>
        );
    }
}

export default ToursList;