import React, { Component } from "react";
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';
import shuffleArray from 'shuffle-array';
import $ from 'jquery';
import './style.css';

class CustomOverlayGallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            images: this.props.images
        };
    }

    componentDidMount = () => {
        $(document).ready(function () {
            $('.ReactGridGallery_tile-viewport').each(function(index) {
                $(this).css('background-image', 'url(\''+ (this).firstChild.src +'\')');
            });
        });
    }

    generateImages = (images) => {
        var result = [];
        images.map((image, index) => {
            var width, height;
            switch (index) {
                case 1:
                case 2:
                    width = 200;
                    height = 180;
                    break;
                default:
                    width = 400;
                    height = 180;
                    break;
            }
            
            result.push({
                src: image.src,
                thumbnail: image.src,
                thumbnailWidth: width,
                thumbnailHeight: height,
                tags: image.tags,
                caption: image.caption
            }); 
        });
        return result;
    }

    setCustomTags (i) {
        return (
            i.tags.map((t) => {
                return (<div
                        key={t.value}
                        style={customTagStyle}>
                        {t.title}
                        </div>);
            })
        );
    }

    render () {
        var images =
                this.props.images.map((i) => {
                    i.customOverlay = (
                            <div style={captionStyle}>
                            <div>{i.caption}</div>
                            {i.hasOwnProperty('tags') &&
                             this.setCustomTags(i)}
                        </div>);
                    return i;
                });


        return (
                <div style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    overflow: "auto"}}>
                <Gallery
                    images={this.generateImages(images)}
                    enableImageSelection={false}/>
                </div>
        );
    }
}

CustomOverlayGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            // thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.string,
            // thumbnailWidth: PropTypes.number.isRequired,
            // thumbnailHeight: PropTypes.number.isRequired
        })
    ).isRequired
};

const captionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    maxHeight: "240px",
    overflow: "hidden",
    position: "absolute",
    bottom: "0",
    width: "100%",
    color: "white",
    padding: "2px",
    fontSize: "90%"
};

const customTagStyle = {
    wordWrap: "break-word",
    display: "inline-block",
    backgroundColor: "white",
    height: "auto",
    fontSize: "75%",
    fontWeight: "600",
    lineHeight: "1",
    padding: ".2em .6em .3em",
    borderRadius: ".25em",
    color: "black",
    verticalAlign: "baseline",
    margin: "2px"
};

export default CustomOverlayGallery;