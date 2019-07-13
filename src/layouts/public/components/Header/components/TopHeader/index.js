import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import './style.css';

class TopHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="top-header" className="fixed-top">
                    <Container>
                        <Row>
                            <Col md={6}>
                                <ul className="horiz-list horiz-left">
                                    <li><a href={"mailto:" + this.props.data.contact_info.email}><i className="fas fa-envelope"></i>{this.props.data.contact_info.email}</a></li>
                                    <li><a href={"tel:" + this.props.data.contact_info.phone_number}><i className="fas fa-phone"></i>Hotline: {this.props.data.contact_info.phone}</a></li>
                                </ul>
                            </Col>
                            <Col md={6}>
                                <ul className="horiz-list horiz-right">
                                    {/* <li><Link to="/sign-in"><i className="fas fa-sign-in-alt"></i>Đăng nhập</Link></li> */}
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default TopHeader;