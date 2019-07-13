import React, { Component } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Row, Col } from 'react-bootstrap';
import './style.css';

class Datatable extends Component {
    render() {
        return (
            <Row>
                <Col>
                    <MDBTable responsive striped bordered hover>
                        <MDBTableHead columns={this.props.data.columns} />
                        <MDBTableBody rows={this.props.data.rows} />
                    </MDBTable>

                </Col>
            </Row>
        );
    }
}

export default Datatable;
