import React, { Component } from "react";
import ReactLoading from 'react-loading';
import $ from 'jquery';
import './style.css';

const data = {
    type: 'spinningBubbles',
    color: '#ddd',
    height: '50px',
    width: '50px'
};

class LoadingIndicator extends Component {

    componentDidMount() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }

    render() {
        return (
            <div className="loading-indicator">
                <ReactLoading
                    type={data.type}
                    color={data.color}
                    height={data.height}
                    width={data.width}
                    delay={data.delay}
                />
            </div>
        );
    }
}

export default LoadingIndicator;
