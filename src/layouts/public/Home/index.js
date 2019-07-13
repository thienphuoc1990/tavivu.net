import React, { Component, Fragment } from 'react';
import Banner from '../components/Banner/index';
import GridTours from '../components/GridTours/index';
import GalleryPlaces from '../components/GalleryPlaces/index';
import LoadingIndicator from '../components/LoadingIndicator/index';
import * as Constants from '../../../constants';
import './style.css';

class Home extends Component {
    state = {
        data: null,
        is_loading: true
    }

    componentDidMount() {
        fetch(`${Constants.BE_API_HOME}`)
        .then(res => {
            return res.json();
        }).then(res => {
            this.setState(() => ({ data: res.data }));
            document.title = "Tavivu.net | " + res.title;
            this.hideLoading();
        });
    }

    showLoading() {
        this.setState(() => ({ is_loading: true }));
    }

    hideLoading() {
        let m_this = this;
        setTimeout(function() {
            m_this.setState(() => ({ is_loading: false }));
        }, 300);
    }

    render() {
        return (
            <Fragment>
                {this.state.is_loading ? <LoadingIndicator /> : null}
                {this.state.data ? <Banner banner={this.state.data.banner} /> : null}
                {this.state.data ? <GridTours tours={this.state.data.incoming_tours} /> : null}
                {this.state.data ? <GalleryPlaces places={this.state.data.popular_international_places} /> : null}
            </Fragment>
        );
    }
}

export default Home;