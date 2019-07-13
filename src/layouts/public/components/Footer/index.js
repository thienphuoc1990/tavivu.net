import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Contact from './components/Contact/index';
import Social from './components/Social/index';
import Links from './components/Links/index';
import './style.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <section className="top">
                    <Container>
                        <Row>
                            <Col lg={6}>
                                <Row>
                                    <Col md={6}>
                                        <Contact contact={this.props.data.contact_info} />
                                    </Col>
                                    <Col md={6}>
                                        <Social />
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6}>
                                <Row>
                                    <Col md={4}>
                                        <Links list={this.props.data.inside_tours} />
                                    </Col>
                                    <Col md={4}>
                                        <Links list={this.props.data.outside_tours} />
                                    </Col>
                                    <Col md={4}>
                                        {/* <Links list={this.props.data.type_tours} /> */}
                                        <Links list={this.props.data.infos} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="bottom">
                    <p className="company-name">Bản quyền 2019 © <span>Công ty TNHH Dịch vụ Lữ hành TA VI VU.</span></p>
                    <p><span>Địa chỉ:</span> 25 Trần Hưng Đạo, Phường 06, Quận 5, Thành phố Hồ Chí Minh, Việt Nam.</p>
                    <p><span>ĐT:</span> (84-28) 66 565 368 - <span>Email:</span> info@tavivu.net</p>
                    <p><span>Số đăng ký kinh doanh:</span> <span>0315592159</span> do <span>Sở kế hoạch và đầu tư TPHCM</span> cấp ngày <span>28/03/2019</span>.</p>
                    <p>Website <span>TAVIVU.NET</span> đã <a href={this.props.data.proof.linkto} target="__blank">được đăng ký</a> với Bộ Công Thương</p>
                    <div className="proof-image">
                        <a href={this.props.data.proof.linkto} target="__blank">
                            <img src={this.props.data.proof.image} alt="da-dang-ky-bo-cong-thuong"/>
                        </a>
                    </div>
                </section>
            </footer>
        );
    }
}

export default Footer;