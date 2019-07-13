import React, { Component } from 'react';
import './style.css';
import { Link } from "react-router-dom";
import renderHTML from 'react-render-html';

class PopularPlace extends Component {

    allCaptions = (captions) => {
        var result = null; 

        result = captions.map((caption, key) => {
            return (
                <li key={key}>{caption}</li>
            );
        });

        return result;
    }

    render () {
        return (
            <Link to={this.props.place.linkto}>
                <div className="popular-place-wrapper">
                    <div className="img-container" style={{backgroundImage: "url('"+this.props.place.image+"')"}}>
                        <img src={this.props.place.image} alt={this.props.place.title} />
                        <div className="overlay-section">
                            <div className="middle-content">
                                <div className="place-name">
                                    <h5>{this.props.place.title}</h5>
                                    <span></span>
                                </div>
                                <div className="place-caption">
                                    <ul>{this.props.place.attractions ? renderHTML(this.props.place.attractions) : null}</ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

}

export default PopularPlace;