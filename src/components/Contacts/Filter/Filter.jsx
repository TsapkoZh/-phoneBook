import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import qs from 'query-string';
import PropTypes from 'prop-types';

import searchIcon from './search.svg';

import s from './filter.module.scss';

class Filter extends PureComponent {
  handleKeyPress = e => {
    const query = { search: e.currentTarget.value.toLowerCase() };
    const searchString = qs.stringify(query);

    this.props.history.push({
      search: searchString
    })
  };

  render() {
    const { search } = qs.parse(this.props.location.search);

    return (
      <div className={s.filterWrapper}>
        <img src={searchIcon} className={s.search} alt="search" />
        <input 
          value={search}
          className={s.searchField}
          onChange={this.handleKeyPress}
        />
      </div>
    )
  }
};

Filter.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    company: PropTypes.string,
    email: PropTypes.string,
  })),
};

export default withRouter(Filter);
