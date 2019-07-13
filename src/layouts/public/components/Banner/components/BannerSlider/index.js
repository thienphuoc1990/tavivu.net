import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.css';

class BannerSlider extends Component {

    printSlides = (slides) => {
        var result = null;

        result = slides.map((slide, index) => {
            return (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={slide.image}
                        alt={slide.title ? slide.title : null}
                    />
                    {slide.title ? <Carousel.Caption>
                        <h3>{slide.title}</h3>
                        {slide.sub_title ? <h5>{slide.sub_title}</h5> : null}
                        {slide.content ? <p>{slide.content}</p> : null}
                    </Carousel.Caption> : null}
                </Carousel.Item>
            );
        });

        return result;
    }

    render() {
        return (
            <section className="banner-slider">
                <div className="overlay-section"></div>
                <Carousel
                    indicators={false}>
                    {this.printSlides(this.props.banner.slides)}
                </Carousel>
            </section>
        );

    }
}

export default BannerSlider;