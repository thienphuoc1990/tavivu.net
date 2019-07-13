import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import './style.css';

class Title extends Component {
    render() {
        return (
            <Row>
                <Col>
                    <div className={this.props.class_title}>
                        <h3 className="text-center text-uppercase">
                            <span className="title-highlight">{this.props.highlight} </span>
                            {this.props.normal}
                        </h3>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default Title;
