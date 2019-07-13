import React, { Component, Fragment } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Banner from '../components/Banner/index';
import ContactInfos from './components/ContactInfos/index';
import ContactForm from './components/ContactForm/index';
import GoogleMap from '../components/GoogleMap/index';
import LoadingIndicator from '../components/LoadingIndicator/index';
import * as Constants from '../../../constants';
import './style.css';

class Contact extends Component {
    state = {
        data: null,
        is_loading: true
    }

    showLoading() {
        this.setState(() => ({ is_loading: true }));
    }

    hideLoading() {
        let m_this = this;
        setTimeout(function () {
            m_this.setState(() => ({ is_loading: false }));
        }, 300);
    }

    componentDidMount() {
        fetch(`${Constants.BE_API_CONTACT}`)
            .then(res => {
                return res.json();
            }).then(res => {
                this.setState(() => ({ data: res.data }));
                document.title = "Tavivu.net | " + res.title;
                this.hideLoading();
            });
    }

    render() {
        return (
            <Fragment>
                {this.state.is_loading ? <LoadingIndicator /> : null}
                {this.state.data ? <Banner banner={this.state.data.banner} /> : null}
                <section className="main-content">
                    <Container>
                        <Row>
                            <Col md={4} className="contact-infos">
                                {this.state.data ? <ContactInfos company={this.state.data.company} /> : null}
                            </Col>
                            <Col md={8}>
                                <ContactForm />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="google-map">
                    {this.state.data ? <GoogleMap lat={this.state.data.company.latitude} lng={this.state.data.company.longtitude} /> : null}
                </section>
            </Fragment>
        );
    }
}

export default Contact;