import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import search from './search.svg';

import s from './filter.module.scss'

class Filter extends Component {
  handleKeyPress = e => {
    const serch = e.currentTarget.value;
    this.props.filterContact(serch);
  }

  render() {
    return (
      <div className={s.filterWrapper}>
        <img src={search} className={s.search} alt="search" />
        <input 
          className={s.searchField}
          onChange={this.handleKeyPress}
        />
      </div>
    )
  }
}

export default Filter;