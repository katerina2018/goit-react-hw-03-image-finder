import React, { Component } from 'react';
import { MdImageSearch } from 'react-icons/md';
import { toast } from 'react-toastify';
// MdImageSearch;

import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = { searchTheme: '' };

  handleChange = event => {
    this.setState({ searchTheme: event.currentTarget.value.toLowerCase() });
    // console.log(this.state.searchTheme);
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchTheme.trim() === '') {
      toast.warn('empty', { position: 'top-center' });
      this.reset();
      return;
    }
    this.props.onSubmit(this.state.searchTheme.trim());

    this.reset();
  };

  reset = () => {
    this.setState({ searchTheme: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form onSubmit={this.handleSubmit} className={s.SearchForm}>
          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchTheme}
            onChange={this.handleChange}
          />
          <button type="submit" className={s.SearchFormButton}>
            <MdImageSearch />
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}

export default Searchbar;
