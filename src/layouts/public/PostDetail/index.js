import React, { Component, Fragment } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Banner from '../components/Banner/index';
import LoadingIndicator from '../components/LoadingIndicator/index';
import renderHTML from 'react-render-html';
import $ from 'jquery';
import * as Constants from '../../../constants';
import './style.css';

class PostDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            request_post: null,
            data: null,
            banner: null,
            is_loading: true
        }

        this.prepareBannerData = this.prepareBannerData.bind(this);
        this.showLoading = this.showLoading.bind(this);
        this.hideLoading = this.hideLoading.bind(this);
    }

    prepareBannerData() {
        let banner = this.state.data.banner;

        this.setState(() => ({ banner: banner }));
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

    componentDidUpdate() {
        const { post } = this.props.match.params
        if (post !== this.state.request_post) {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            fetch(`${Constants.BE_API_POSTS}/${post}`)
            .then(res => {
                return res.json();
            }).then(res => {
                this.setState(() => ({ data: res.data, request_post: post }));
                this.prepareBannerData();
                document.title = "Tavivu.net | " + res.title;
                this.hideLoading();
            });
        }

    }

    componentDidMount() {
        const { post } = this.props.match.params
        fetch(`${Constants.BE_API_POSTS}/${post}`)
        .then(res => {
            return res.json();
        }).then(res => {
            this.setState(() => ({ data: res.data, request_post: post }));
            this.prepareBannerData();
            document.title = "Tavivu.net | " + res.title;
            this.hideLoading();
        });
    }

    render() {
        return (
            <Fragment>
            {this.state.is_loading ? <LoadingIndicator /> : null}
            {this.state.banner ? <Banner banner={this.state.banner} title={this.state.data.news.title} /> : null}
                <section className='main-content'>
                    <Container>
                        <Row>
                            <Col>
                                {this.state.data ? renderHTML(this.state.data.news.content) : null}
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Fragment>
            );
        }
    }

    export default PostDetail;
