import React, { Component, Fragment } from "react";
import queryString from 'query-string'
import Banner from '../components/Banner/index';
import Filters from './components/Filters/index';
import ToursList from './components/ToursList/index';
import LoadingIndicator from '../components/LoadingIndicator/index';
import $ from 'jquery';
import * as Constants from '../../../constants';

import "react-datepicker/dist/react-datepicker.css";
import './style.css';

class InternationalTours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            tours: null,
            startDate: null,
            fromPlace: null,
            toPlace: null,
            is_loading: true
        };

        this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
        this.handleChangeFromPlace = this.handleChangeFromPlace.bind(this);
        this.handleChangeToPlace = this.handleChangeToPlace.bind(this);
        this.handleSearchTours = this.handleSearchTours.bind(this);
    }

    handleChangeToPlace(place) {
        this.setState({
            toPlace: place
        });
    }

    handleChangeFromPlace(place) {
        this.setState({
            fromPlace: place
        });
    }

    handleChangeStartDate(date) {
        this.setState({
            startDate: date
        });
    }

    handleSearchTours() {
        this.showLoading();
        let params = {
            sd: encodeURIComponent(this.state.startDate ? this.parseDate(this.state.startDate) : ''),
            tp: encodeURIComponent(this.state.toPlace ? this.state.toPlace.value : ''),
            fp: encodeURIComponent(this.state.fromPlace ? this.state.fromPlace.value : '')
        };

        fetch(`${Constants.BE_API_TOURS_INTERNATIONAL}?sd=${params.sd}&tp=${params.tp}&fp=${params.fp}`)
            .then(res => {
                return res.json();
            }).then(res => {
                this.setState(() => ({ tours: res.data.tours }));
                this.hideLoading();
            });
    }

    parseDate(date) {
        return ((date.getMonth().toString().length > 1) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate().toString().length > 1) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();
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

    getByValue(arr, value) {
        return arr.find(obj => {
            return parseInt(obj.value) === parseInt(value);
        });

    }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        fetch(`${Constants.BE_API_TOURS_INTERNATIONAL}`)
            .then(res => {
                return res.json();
            }).then(res => {
                this.setState(() => ({ data: res.data, tours: res.data.tours }));
                document.title = "Tavivu.net | " + res.title;
                if ($.isEmptyObject(values)) {
                    this.hideLoading();
                } else {
                    this.setState(() => ({ toPlace: this.getByValue(res.data.end_place_options, values.tp) }));
                    this.handleSearchTours();
                }

            });
    }

    render() {
        return (
            <Fragment>
                {this.state.is_loading ? <LoadingIndicator /> : null}
                {this.state.data ? <Banner banner={this.state.data.banner} /> : null}
                {this.state.data ? <Filters
                    from_places_options={this.state.data.start_place_options}
                    to_places_options={this.state.data.end_place_options}
                    toPlace={this.state.toPlace}
                    fromPlace={this.state.fromPlace}
                    startDate={this.state.startDate}
                    handleChangeToPlace={this.handleChangeToPlace}
                    handleChangeFromPlace={this.handleChangeFromPlace}
                    handleChangeStartDate={this.handleChangeStartDate}
                    handleSearchTours={this.handleSearchTours}
                /> : null}
                {this.state.data ? <ToursList tours={this.state.tours} /> : null}
            </Fragment>
        );
    }
}

export default InternationalTours;