import React, { Component } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './style.css';
import logo from './logo.png';

class MainHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar bg="light" expand="lg" id="main-header" fixed="top">
                    <Container>
                        <Navbar.Brand><Link to=""><img src={logo} alt="logo" /></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <div className="mr-auto"></div>
                            <Nav>
                                <Nav><Link to="/">Trang chủ</Link></Nav>
                                <Nav><Link to="/gioi-thieu">Giới thiệu</Link></Nav>
                                <Nav><Link to="/tours-trong-nuoc">Tours trong nước</Link></Nav>
                                <Nav><Link to="/tours-quoc-te">Tours quốc tế</Link></Nav>
                                <Nav><Link to="/dich-vu">Dịch vụ</Link></Nav>
                                <Nav><Link to="/hinh-anh">Hình ảnh</Link></Nav>
                                <Nav><Link to="/lien-he">Liên hệ</Link></Nav>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default MainHeader;