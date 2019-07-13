import React, { Component } from "react";
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import $ from 'jquery';
import SweetAlert from 'sweetalert-react';
import * as Constants from '../../../../../constants';
import '../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import './style.css';

class OrderTour extends Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.orderTour = this.orderTour.bind(this);
        this.handleChangeTourDetail = this.handleChangeTourDetail.bind(this);

        this.state = {
            tour: this.props.tour,
            tour_detail: null,
            show: false
        };
    }

    orderTour() {
        $('button[name="order-tour"]').attr("disabled", true);
        let m_this = this;
        let queryString = $('.form-order-tour').serialize();

        fetch(`${Constants.BE_API_ORDER_TOUR}?${queryString}`)
            .then(res => {
                return res.json();
            }).then(res => {
                if (res.code && res.code === 'SEND_SU') {
                    m_this.setState(() => ({ is_show_alert: true }));
                } else {
                    m_this.setState(() => ({ is_show_err_alert: true }));
                }
                m_this.handleClose();
            });
    }

    handleChangeTourDetail(detail) {
        this.setState({
            tour_detail: detail
        });
    }

    handleClose() {
        this.setState(() => ({ show: false }));
    }

    handleShow() {
        this.setState(() => ({ show: true }));
    }

    render() {
        return (
            <section className="order-tour">
                <div className="fix-button">
                    <Button className="pulse-button" onClick={this.handleShow}>
                        Đặt ngay tour này
                    </Button>
                </div>
            <SweetAlert
                show={this.state.is_show_alert}
                title="Đặt tour thành công"
                text="Hệ thống đã ghi nhận dữ liệu và gửi cho người phụ trách. Xin cảm ơn."
                onConfirm={() => this.setState({ is_show_alert: false })}
            />
            <SweetAlert
                show={this.state.is_show_err_alert}
                title="Đặt tour không thành công"
                text="Đã có lỗi xảy ra trong quá trình đặt tour, xin hãy thử lại. Xin cảm ơn."
                onConfirm={() => this.setState({ is_show_err_alert: false })}
            />
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Bạn đang đặt tour {this.state.tour.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="form-order-tour">
                            <Form.Control name="tour_id" type="hidden" value={this.state.tour.id} />
                            <Row>
                                <Col xs={6} className="mb-3">
                                    <Select
                                        name="tour_detail_id"
                                        onChange={this.handleChangeTourDetail}
                                        options={this.state.tour.tour_detail_options}
                                    />
                                </Col>
                                <Col xs={6} className="mb-3">
                                    <Form.Control placeholder="Số lượng người lớn" name="tickets" />
                                </Col>
                                <Col xs={6} className="mb-3">
                                    <Form.Control placeholder="Số lượng trẻ em" name="kid_tickets" />
                                </Col>
                                <Col xs={6} className="mb-3">
                                    <Form.Control placeholder="Số lượng em bé" name="baby_tickets" />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="mb-3">
                                    <Form.Control placeholder="Họ tên" name="name" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} className="mb-3">
                                    <Form.Control placeholder="Email" name="email" />
                                </Col>
                                <Col xs={6} className="mb-3">
                                    <Form.Control placeholder="Điện thoại" name="phone" />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="mb-3">
                                    <Form.Control placeholder="Địa chỉ" name="address" />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="mb-3">
                                    <Form.Control placeholder="Ghi chú" as="textarea" rows="3" name="notes" />
                                </Col>
                            </Row>
                            <Row>

                            </Row>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="outline-tink-orange" type="button" name="order-tour" onClick={this.orderTour}>Đặt tour</Button>
                        {/* <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button> */}
                    </Modal.Footer>
                </Modal>
            </section>
        );
    }
}

export default OrderTour;
