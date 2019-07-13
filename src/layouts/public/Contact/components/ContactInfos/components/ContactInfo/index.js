import React, { Component } from "react";
import renderHTML from 'react-render-html';
import './style.css';

class ContactInfo extends Component {
    render () {
        return (
            <div className="contact-info">
                <div className="icon">
                    <i className={this.props.contact.icon_class}></i>
                </div>
                <div className="info">
                    <p className="title">{this.props.contact.title}</p>
                    <p>{renderHTML(this.props.contact.content)}</p>
                </div>
            </div>
        );
    }
}

export default ContactInfo;