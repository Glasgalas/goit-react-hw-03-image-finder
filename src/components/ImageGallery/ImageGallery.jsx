import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal';

import s from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    showModal: false,
    largeImage: '',
  };

  handleToggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleShowModal = e => {
    e.preventDefault();

    const { href } = e.currentTarget;
    this.setState({
      largeImage: href,
    });

    this.handleToggleModal();
  };

  handleCloseModal = () => {
    this.setState({
      largeImage: '',
    });

    this.handleToggleModal();
  };

  render() {
    const { images } = this.props;
    const { showModal, largeImage } = this.state;

    return (
      <>
        {showModal && (
          <Modal onCloseModal={this.handleCloseModal} url={largeImage} />
        )}
        <ul className={s.ImageGallery}>
          {images.map(({ id, webformatURL, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                onClick={this.handleShowModal}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
