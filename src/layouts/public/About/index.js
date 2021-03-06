import React, { Component, Fragment } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import renderHTML from 'react-render-html';
import Banner from '../components/Banner/index';
import LoadingIndicator from '../components/LoadingIndicator/index';
import * as Constants from '../../../constants';
import './style.css';

class About extends Component {
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
        fetch(`${Constants.BE_API_ABOUT}`)
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
                <section className='main-content'>
                    <Container>
                        <Row>
                            <Col>
                                {this.state.data ? renderHTML(this.state.data.content) : null}
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Fragment>
        );
    }
}

export default About;