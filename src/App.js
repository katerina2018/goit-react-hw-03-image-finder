import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Section from './components/Section';
import TextButton from './components/TextButton';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

// import IconButton from './components/IconButton';
// import Modal from './components/Modal';

class App extends Component {
  state = {
    searchTheme: '',
  };

  handleFormSubmit = searchTheme => {
    this.setState({ searchTheme });
  };

  render() {
    return (
      <Section>
        <h1>Image finder</h1>

        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={2000} />
        <ImageGallery searchTheme={this.state.searchTheme} />

        <TextButton>Load more</TextButton>

        {this.state.image && <div>Text</div>}
      </Section>
    );
  }
}

export default App;
