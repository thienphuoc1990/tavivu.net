import React, { Component, Fragment } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import './style.css';

class TavivuGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      viewerIsOpen: false
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }

  closeLightbox(o) {
    this.setState({
      currentImage: 0,
      viewerIsOpen: false
    });
  }

  openLightbox(event, { photo, index }) {
    this.setState({
      currentImage: index,
      viewerIsOpen: true
    });
  }

  render() {

    return (

      <Fragment>
      <Gallery photos={this.props.images} onClick={this.openLightbox} />
      <ModalGateway>
      {this.state.viewerIsOpen ? (
        <Modal onClose={this.closeLightbox}>
        <Carousel
        currentIndex={this.state.currentImage}
        views={this.props.images.map(x => ({
          ...x,
          srcset: x.srcSet,
          caption: x.title
        }))}
        />
        </Modal>
        ) : null}
        </ModalGateway>
        </Fragment>
        );
      }
    }

    export default TavivuGallery;