import React, { Component, Fragment } from "react";
import Banner from '../components/Banner/index';
import ServiceForm from './components/ServiceForm/index';
import LoadingIndicator from '../components/LoadingIndicator/index';
import './style.css';


const data = {
    banner: {
        is_slider: false,
        slides: [],
        image: 'https://saigontourist.net/uploads/destination/cover-tour-tag/tour-30-thang-4.jpg'
    }
};

class Service extends Component {
    state = {
        is_loading: true
    }

    showLoading() {
        this.setState(() => ({ is_loading: true }));
    }

    hideLoading() {
        let m_this = this;
        setTimeout(function () {
            m_this.setState(() => ({ is_loading: false }));
        }, 300);
    }

    componentDidMount() {
        this.hideLoading();
    }

    render() {
        return (
            <Fragment>
                {this.state.is_loading ? <LoadingIndicator /> : null}
                <Banner banner={data.banner} />
                <ServiceForm />
            </Fragment>
        );
    }
}

export default Service;