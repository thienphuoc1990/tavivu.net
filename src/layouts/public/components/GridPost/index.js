import React, { Component } from "react";
import { Link } from "react-router-dom";
import './style.css';

class GridPost extends Component {
    render() {
        return (
            <div className="col-md-6 col-lg-4 mb-3">
                <div className="card grid-tour">
                    <div className="image-wrapper" >
                        <Link to={"/"+this.props.post.linkto} className="item-image">
                            <img
                                className="card-img-top"
                                src={this.props.post.image}
                                alt="Card cap"
                            />
                            <div className="overlay">
                                <h6 className="card-title">{this.props.post.title}</h6>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridPost;
