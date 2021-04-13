import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleChange = e => {
    this.setState({ searchValue: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { searchValue } = this.state;
    const normalizeSearchValue = searchValue.toLowerCase();
    this.props.onSubmit(normalizeSearchValue);
    this.setState({ searchValue: '' });
  };

  render() {
    const { searchValue } = this.state;

    return (
      <header className={s.Searchbar}>
        <h3 className={s.title}>Image Finder</h3>
        <form onSubmit={this.handleSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            value={searchValue}
            onChange={this.handleChange}
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="For example, funny cats "
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
