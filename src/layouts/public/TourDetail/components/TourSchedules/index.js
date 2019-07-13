import React, { Component } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import renderHTML from 'react-render-html';
import BannerSlider from '../../../components/Banner/components/BannerSlider/index';
import './style.css';

class TourSchedules extends Component {
    state = {
        schedules: this.props.schedules
    }

    renderTabKeys() {
        var result = null;
        result = this.state.schedules.map((schedule, idx) => {
            return (
                <Nav.Item key={idx}>
                    <Nav.Link eventKey={idx}>{schedule.short_title}</Nav.Link>
                </Nav.Item>
            );
        });
        return result;
    }

    renderTabContents() {
        var result = null;
        result = this.state.schedules.map((schedule, idx) => {
            return (
                <Tab.Pane key={idx} eventKey={idx} className="schedule-content">
                    <h5>{schedule.title}</h5>
                    <div className="content">{renderHTML(schedule.content)}</div>
                    <BannerSlider banner={{slides: schedule.images}} />
                </Tab.Pane>
            );
        });
        return result;
    }

    render() {
        return (
            <section className="schedules">
                <Container>
                    <Row>
                        <Col>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="0">
                                <Row>
                                    <Col sm={3}>
                                        <Nav variant="pills" className="flex-column">
                                            {this.renderTabKeys()}
                                        </Nav>
                                    </Col>
                                    <Col sm={9}>
                                        <Tab.Content>
                                            {this.renderTabContents()}
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default TourSchedules;
