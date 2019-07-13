import React, { Component, Fragment } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import renderHTML from 'react-render-html';
import Banner from '../components/Banner/index';
import LoadingIndicator from '../components/LoadingIndicator/index';
import * as Constants from '../../../constants';
import './style.css';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: null,
            data: null,
            is_loading: true
        }

        this.showLoading = this.showLoading.bind(this);
        this.hideLoading = this.hideLoading.bind(this);
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

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.slug !== prevState.slug) {
            return { slug: nextProps.slug };
        }
        else {
            return null;
        }
    }

    componentDidUpdate() {
        const { page } = this.props.match.params
        if (page !== this.state.page) {
            fetch(`${Constants.BE_API_PAGE}/${page}`)
                .then(res => {
                    return res.json();
                }).then(res => {
                    this.setState(() => ({ data: res.data, page: page }));
                    document.title = "Tavivu.net | " + res.title;
                    this.hideLoading();
                });
        }

    }

    componentDidMount() {
        const { page } = this.props.match.params
        fetch(`${Constants.BE_API_PAGE}/${page}`)
            .then(res => {
                return res.json();
            }).then(res => {
                this.setState(() => ({ data: res.data, page: page }));
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

export default Page;