import React, { Component } from 'react';
import { Rings } from 'react-loader-spinner';

import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    image: null,
    error: null,
    status: 'idle',
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const prevSearchTheme = prevProps.searchTheme;
    const nextSearchTheme = this.props.searchTheme;

    if (prevSearchTheme !== nextSearchTheme) {
      this.setState({ status: 'pending' });

      fetch(
        `https://pixabay.com/api/?q=${nextSearchTheme}&page=1&key=24782387-235d5961f89ca8adc0055c0c3&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`Images with theme ${nextSearchTheme} are missing`),
          );
        })
        .then(
          // console.log,
          image => {
            if (image.total) {
              return this.setState({ image, status: 'resolved' });
            }
            return this.setState({ status: 'rejected' });
          },
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { error, status, image } = this.state;
    if (status === 'idle') {
      return <p>Enter request, please</p>;
    }
    if (status === 'pending') {
      return (
        <Rings height="100" width="100" color="grey" ariaLabel="loading" />
      );
    }
    if (status === 'rejected') {
      return (
        <p>
          {error
            ? `${error.message}`
            : `Images with theme ${this.props.searchTheme} are missing`}
        </p>
      );
    }
    if (status === 'resolved') {
      return (
        <ul className={s.ImageGallery}>
          <p>{image.total}</p>
          <ImageGalleryItem />
        </ul>
      );
    }
  }
}

export default ImageGallery;
