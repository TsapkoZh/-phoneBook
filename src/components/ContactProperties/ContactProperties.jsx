import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import s from './contactProperties.module.scss';

class ContactProperties extends Component {

  render() {
    return (
      <div className={s.contactProperties}>
        <h1 className={s.name}>Owen Lars</h1>

        <div className={s.contactDetail}>
          <h5 className={s.detailName}>PHONE</h5>
          <p className={s.detail}>8 965 723 41 49</p>

          <h5 className={s.detailName}>ADDRESS</h5>
          <p className={s.detail}>NY street 16</p>

          <h5 className={s.detailName}>COMPANY</h5>
          <p className={s.detail}>DECO</p>

          <h5 className={s.detailName}>EMAIL</h5>
          <p className={s.detail}>TsapkoZh@gmail.com</p>
        </div>
      </div>
    )
  }
}

export default ContactProperties;