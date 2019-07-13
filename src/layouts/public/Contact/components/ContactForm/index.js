import React, { Component } from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';
import $ from 'jquery';
import SweetAlert from 'sweetalert-react';
import * as Constants from '../../../../../constants';
import '../../../../../../node_modules/sweetalert/dist/sweetalert.css';
import './style.css';

class ContactForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            is_show_alert: false,
            is_show_err_alert: false
        };
    
        this.sendContact = this.sendContact.bind(this);
    }
    
    sendContact() {
        $('button[name="send-contact"]').attr("disabled", true);
        let m_this = this;
        let queryString = $('.form-contact').serialize();

        fetch(`${Constants.BE_API_SEND_CONTACT}?${queryString}`)
            .then(res => {
                return res.json();
            }).then(res => {
                if(res.code && res.code === 'SEND_SU') {
                    m_this.setState(() => ({ is_show_alert: true }));
                }else{
                    m_this.setState(() => ({ is_show_err_alert: true }));
                }
            });
    }

    render() {
        return (
            <div>
                <SweetAlert
                    show={this.state.is_show_alert}
                    title="Gửi liên hệ thành công"
                    text="Hệ thống đã ghi nhận dữ liệu và gửi cho người phụ trách liên hệ. Xin cảm ơn."
                    onConfirm={() => this.setState({ is_show_alert: false })}
                />
                <SweetAlert
                    show={this.state.is_show_err_alert}
                    title="Gửi liên hệ không thành công"
                    text="Đã có lỗi xảy ra trong quá trình gửi thông tin liện hệ, xin hãy thử lại. Xin cảm ơn."
                    onConfirm={() => this.setState({ is_show_err_alert: false })}
                />
                <Form className="form-contact">
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
                            <Form.Control placeholder="Địa chỉ" name="address" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Nội dung" as="textarea" rows="3" name="content" />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="form-submit">
                            <Button variant="outline-tink-orange" type="button" name="send-contact" onClick={this.sendContact}>Gửi</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default ContactForm;