import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Title from '../Title/index';
import './style.css';

class Social extends Component {
    render() {
        return (
            <section className="social">
                <Row>
                    <Col>
                        <Title class_title={'min-section-title'} content={'Kết nối với chúng tôi'} />
                        <ul className="list-icon">
                            <li><a href="facebook.com" className="facebook"><i className="fab fa-facebook-square"></i></a></li>
                            <li><a href="google.com" className="google"><i className="fab fa-google-plus-square"></i></a></li>
                            <li><a href="twitter.com" className="twitter"><i className="fab fa-twitter-square"></i></a></li>
                            <li><a href="youtube.com" className="youtube"><i className="fab fa-youtube-square"></i></a></li>
                        </ul>
                    </Col>
                </Row>
            </section>
        );
    }
}

export default Social;