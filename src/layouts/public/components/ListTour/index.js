import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Badge } from 'react-bootstrap';
import './style.css';

class ListTour extends Component {
    render() {
        return (
            <div className="col-12 list-tour">
                <div className="image">
                    <Link to={this.props.tour.linkto}>
                        <img
                            className="img-fluid"
                            src={this.props.tour.image}
                            alt={this.props.tour.title}
                        />
                    </Link>
                </div>
                <div className="content">
                    <div className="detail">
                        <h5 className="title">
                            <Link to={this.props.tour.linkto} className="item-title">
                                {this.props.tour.title}
                            </Link>
                        </h5>
                        <p className="from-to"><span>Nơi đi:</span> {this.props.tour.fromPlace}</p>
                        <p className="from-to"><span>Nơi đến:</span> {this.props.tour.toPlace}</p>
                        <p className="start-end"><span>Ngày khởi hành gần nhất:</span> {this.props.tour.startDate}</p>
                        <p className="short-desc">{this.props.tour.shortDesc}</p>
                    </div>
                    <h3 className="price">
                        <Badge variant="primary">{this.props.tour.price}</Badge>
                    </h3>
                </div>
            </div>
        );
    }
}

export default ListTour;
