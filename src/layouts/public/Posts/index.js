import React, { Component, Fragment } from "react";
import queryString from 'query-string'
import Banner from '../components/Banner/index';
import PostsList from './components/PostsList/index';
import LoadingIndicator from '../components/LoadingIndicator/index';
import $ from 'jquery';
import * as Constants from '../../../constants';

import './style.css';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            posts: null,
            is_loading: true
        };
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
        const values = queryString.parse(this.props.location.search);
        fetch(`${Constants.BE_API_POSTS}`)
            .then(res => {
                return res.json();
            }).then(res => {
                this.setState(() => ({ data: res.data, posts: res.data.news }));
                document.title = "Tavivu.net | " + res.title;
                if ($.isEmptyObject(values)) {
                    this.hideLoading();
                } 
            });
    }

    render() {
        return (
            <Fragment>
                {this.state.is_loading ? <LoadingIndicator /> : null}
                {this.state.data ? <Banner banner={this.state.data.banner} /> : null}
                {this.state.data ? <PostsList posts={this.state.posts} /> : null}
            </Fragment>
        );
    }
}

export default Posts;