import React, { Component } from "react";
import { Link } from "react-router-dom";
import './style.css';

class Tour extends Component {
    render() {
        return (
            <div className="col-sm-4">
                <div className="card">
                    <div className="image-wrapper" >
                        <Link to={this.props.tour.linkto} className="item-image">
                            <img
                                className="card-img-top"
                                src={this.props.tour.image}
                                alt="Card cap"
                            />
                            <div className="overlay"></div>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to={this.props.tour.linkto} className="item-title">
                                    {this.props.tour.title}
                                </Link>
                            </h5>
                            <p className="card-text period">
                                {this.props.tour.period}
                            </p>
                            <div className="total-expenses">
                                <p className="expense-title">Total Expenses</p>
                                <p className="card-text">
                                    {this.props.tour.price}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tour;
