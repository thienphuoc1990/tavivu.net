import React, { Component, Fragment } from 'react';
import BannerSlider from './components/BannerSlider/index';
import BannerImage from './components/BannerImage/index';
import './style.css';

class Banner extends Component {
    render() {
        return (
            <Fragment>
                {this.props.banner.is_slider ? <BannerSlider banner={this.props.banner} /> : <BannerImage banner={this.props.banner} title={this.props.title} />}
            </Fragment>
        );
    }
}

export default Banner;