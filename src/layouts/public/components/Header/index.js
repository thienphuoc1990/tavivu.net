import React, { Component } from 'react';
import $ from 'jquery';
import './style.css';
import TopHeader from './components/TopHeader/index';
import MainHeader from './components/MainHeader/index';

class Header extends Component {
    componentDidMount() {
        var header = $("header");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if ((scroll >= 1)) {
                header.addClass("light-header");
            }
            else {
                header.removeClass("light-header");
            }

        });

    }

    render() {
        return (
            <header>
                <TopHeader data={this.props.data} />
                <MainHeader />
            </header>
        );
    }
}

export default Header;