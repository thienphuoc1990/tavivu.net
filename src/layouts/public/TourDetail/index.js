import React, { Component, Fragment } from "react";
import { Row, Col, Tab, Nav, Container } from "react-bootstrap";
import Banner from '../components/Banner/index';
import TourSchedules from './components/TourSchedules/index';
import TourInfo from './components/TourInfo/index';
import TourPolicies from './components/TourPolicies/index';
import TourDetails from './components/TourDetails/index';
import LoadingIndicator from '../components/LoadingIndicator/index';
import OrderTour from './components/OrderTour/index';
import GridTours from '../components/GridTours/index';
import $ from 'jquery';
import * as Constants from '../../../constants';
import './style.css';

class TourDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            request_tour: null,
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
        // banner.is_slider = true;
        // banner.slides = this.state.data.tour.images.map((image) => {
        //     return {
        //         image: image,
        //         title: this.state.data.tour.title,
        //         sub_title: this.state.data.tour.sub_title,
        //     };
        // });

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
        const { tour } = this.props.match.params
        if (tour !== this.state.request_tour) {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            fetch(`${Constants.BE_API_TOUR_DETAIL}/${tour}`)
                .then(res => {
                    return res.json();
                }).then(res => {
                    this.setState(() => ({ data: res.data, request_tour: tour }));
                    this.prepareBannerData();
                    document.title = "Tavivu.net | " + res.title;
                    this.hideLoading();
                });
        }

    }

    componentDidMount() {
        const { tour } = this.props.match.params
        fetch(`${Constants.BE_API_TOUR_DETAIL}/${tour}`)
            .then(res => {
                return res.json();
            }).then(res => {
                this.setState(() => ({ data: res.data, request_tour: tour }));
                this.prepareBannerData();
                document.title = "Tavivu.net | " + res.title;
                this.hideLoading();
                console.log(this.state.data.datatable);
            });
    }

    render() {
        return (
            <Fragment>
                {this.state.is_loading ? <LoadingIndicator /> : null}
                {this.state.banner ? <Banner banner={this.state.banner} title={this.state.data.tour.title} /> : null}

                <Container>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="tab-info">
                        <Row>
                            <Col>
                                <Nav fill variant="tabs" className="mt-3">
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab-info"><h4 className="section-title tink-color-orange">Thông tin tour</h4></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab-schedules"><h4 className="section-title tink-color-orange">Chương trình tour</h4></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab-policies"><h4 className="section-title tink-color-orange">Chính sách tour</h4></Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Tab.Content>
                                    <Tab.Pane eventKey="tab-info" className="schedule-content">
                                        {this.state.data ? <TourInfo tour={this.state.data.tour} /> : null}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab-schedules" className="schedule-content">
                                        {this.state.data ? <TourSchedules schedules={this.state.data.tour.schedules} /> : null}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab-policies" className="schedule-content">
                                        {this.state.data ? <TourPolicies tour={this.state.data.tour} /> : null}
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
                {(this.state.data && this.state.data.datatable.rows.length > 0) ? <TourDetails data={this.state.data.datatable} /> : null}
                {this.state.data ? (this.state.data.tour.active === 1 ? <OrderTour tour={this.state.data.tour} /> : null) : null}
                {this.state.data ? <GridTours tours={this.state.data.suggested_tours} /> : null}
            </Fragment>
        );
    }
}

export default TourDetail;
