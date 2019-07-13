import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Title from '../Title/index';
import './style.css';

class Contact extends Component {
    render() {
        return (
            <section className="contact">
                <Row>
                    <Col>
                        <Title class_title={'min-section-title'} content={'Liên hệ'} />
                        <p><span>{this.props.contact.company_name}</span></p>
                        <p><span>Trụ sở:</span>{this.props.contact.address}</p>
                        <p><span>Điện thoại:</span>{this.props.contact.phone}</p>
                        <p><span>Fax:</span>{this.props.contact.fax}</p>
                        <p><span>Email:</span>{this.props.contact.email}</p>
                        <p><span>Hot line:</span>{this.props.contact.hotline}</p>
                    </Col>
                </Row>
            </section>
        );
    }
}

export default Contact;