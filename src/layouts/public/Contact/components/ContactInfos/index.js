import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import ContactInfo from './components/ContactInfo/index';
import './style.css';

class ContactInfos extends Component {
    allContact = (contacts) => {
        var result = null;

        result = contacts.map((contact, index) => {
            return (
                <ContactInfo contact={contact} key={index} />
            );
        });

        return result;
    }

    render () {
        return (
            <Row>
                <Col>
                    <h4>{this.props.company.name}</h4>
                    {this.allContact(this.props.company.contacts)}
                </Col>
            </Row>
        );
    }
}

export default ContactInfos;