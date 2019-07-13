import React, { Component } from "react";
import { Container, Col, Form, Button } from 'react-bootstrap';
import Select from 'react-select';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './style.css';

class Filters extends Component {
    render() {
        return (
            <section className="filters">
                <Container>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="fromPlace" className="mb-3">
                                <Select
                                    value={this.props.fromPlace}
                                    onChange={this.props.handleChangeFromPlace}
                                    options={this.props.from_places_options}
                                    placeholder="Chọn nơi đi"
                                />
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="toPlace" className="mb-3">
                                <Select
                                    value={this.props.toPlace}
                                    onChange={this.props.handleChangeToPlace}
                                    options={this.props.to_places_options}
                                    placeholder="Chọn nơi đến"
                                />
                            </Form.Group>

                            <Form.Group as={Col} md="2" controlId="startDate" className="mb-3">
                                <DatePicker
                                    selected={this.props.startDate}
                                    onChange={this.props.handleChangeStartDate}
                                    className="form-control"
                                    placeholderText="Chọn ngày đi"
                                />
                            </Form.Group>

                            <Form.Group as={Col} md="2" controlId="submit" className="text-center">
                                <Button variant="outline-tink-orange" onClick={this.props.handleSearchTours}>
                                    Tìm kiếm
                                </Button>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Container>
            </section>
        );
    }
}

export default Filters;