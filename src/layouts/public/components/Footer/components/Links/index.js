import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Title from '../Title/index';
import './style.css';

class Links extends Component {
    allLinks = (links) => {
        var result = null;

        result = links.map((link, index) => {
            return (
                <li key={index}>
                    <Link to={link.linkto}>
                        {link.title}
                    </Link>
                </li>
            );
        });

        return result;
    }

    render() {
        return (
            <section className="links">
                <Row>
                    <Col>
                        <Title class_title={'min-section-title'} content={this.props.list.title} />
                        <ul className="list-links">
                            {this.allLinks(this.props.list.links)}
                        </ul>
                    </Col>
                </Row>
            </section>
        );
    }
}

export default Links;