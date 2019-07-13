import React, { Component } from "react";
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Select from 'react-select';
import $ from 'jquery';
import SweetAlert from 'sweetalert-react';
import * as Constants from '../../../../../constants';
import '../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import './style.css';

const data = {
    services: [
        {
            label: 'Visa',
            value: 1
        },
        {
            label: 'Xe đưa đón sân bay',
            value: 2
        },
        {
            label: 'Khách sạn',
            value: 3
        },
        {
            label: 'Vé máy bay',
            value: 4
        }
    ]
};

class ServiceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            service: null,
            is_show_alert: false,
            is_show_err_alert: false
        };
        this.handleChangeService = this.handleChangeService.bind(this);
    
        this.sendService = this.sendService.bind(this);
    }

    sendService() {
        $('button[name="send-service"]').attr("disabled", true);
        let m_this = this;
        let queryString = $('.form-service').serialize();

        fetch(`${Constants.BE_API_SEND_SERVICE}?${queryString}`)
            .then(res => {
                return res.json();
            }).then(res => {
                if (res.code && res.code === 'SEND_SU') {
                    m_this.setState(() => ({ is_show_alert: true }));
                } else {
                    m_this.setState(() => ({ is_show_err_alert: true }));
                }
            });
    }

    handleChangeService(service) {
        this.setState({
            service: service
        });
    }

    render() {
        return (
            <Container>
                <SweetAlert
                    show={this.state.is_show_alert}
                    title="Gửi yêu cầu dịch vụ thành công"
                    text="Hệ thống đã ghi nhận dữ liệu và gửi cho người phụ trách xử lý yêu cầu. Xin cảm ơn."
                    onConfirm={() => this.setState({ is_show_alert: false })}
                />
                <SweetAlert
                    show={this.state.is_show_err_alert}
                    title="Gửi yêu cầu dịch vụ không thành công"
                    text="Đã có lỗi xảy ra trong quá trình gửi thông tin yêu cầu dịch vụ, xin hãy thử lại. Xin cảm ơn."
                    onConfirm={() => this.setState({ is_show_err_alert: false })}
                />
                <Form className="form-service">
                    <Row>
                        <Col className="service-options">
                            <Select
                                value={this.state.service}
                                onChange={this.handleChangeService}
                                options={data.services}
                                placeholder="Chọn loại dịch vụ"
                                name="type"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Họ tên" name="name" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Email" name="email" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Điện thoại" name="phone" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Ghi chú" as="textarea" rows="5" name="note" />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="form-submit">
                            <Button variant="outline-tink-orange" type="button" name="send-service" onClick={this.sendService}>Gửi yêu cầu dịch vụ</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}

export default ServiceForm;