import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import './style.css';

class Title extends Component {
    render() {
        return (
            <Row>
                <Col>
                    <div className={this.props.class_title}>
                        <h6 className="text-left text-uppercase">
                            {this.props.content}
                        </h6>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default Title;
