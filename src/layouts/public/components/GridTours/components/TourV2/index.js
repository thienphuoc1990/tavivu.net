import React, { Component } from "react";
import { Link } from "react-router-dom";
import './style.css';

class Tour extends Component {
    render() {
        return (
            <div className="col-md-6 col-lg-4 mb-3">
                <div className="card grid-tour">
                    <div className="image-wrapper" >
                        <Link to={"/"+this.props.tour.linkto} className="item-image">
                            <img
                                className="card-img-top"
                                src={this.props.tour.image}
                                alt="Card cap"
                            />
                            <div className="overlay">
                                <h6 className="card-title">{this.props.tour.title}</h6>
                                <p className="card-text period"><span>{this.props.tour.time_range}</span></p>
                                <p className="card-text period">Giá từ: <span><strong>{this.props.tour.price}</strong></span></p>
                                <p className="card-text period">Điểm đến: <span>{this.props.tour.toPlace}</span></p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tour;
