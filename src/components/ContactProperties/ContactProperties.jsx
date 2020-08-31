import React from 'react';
// import PropTypes from 'prop-types';

import s from './contactProperties.module.scss';
import { connect } from 'react-redux';

const ContactProperties = ({ contact }) => {
  return (
    <div className={s.contactProperties}>
      <h1 className={s.name}>{contact.name}</h1>

      <div className={s.contactDetail}>
        <h5 className={s.detailName}>PHONE</h5>
        <p className={s.detail}>{contact.phone}</p>

        <h5 className={s.detailName}>ADDRESS</h5>
        <p className={s.detail}>{contact.address}</p>

        <h5 className={s.detailName}>COMPANY</h5>
        <p className={s.detail}>{contact.company}</p>

        <h5 className={s.detailName}>EMAIL</h5>
        <p className={s.detail}>{contact.email}</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const itemId = ownProps.match.params.itemId;
  const contact = state.contacts[itemId-1]

  return {
    contact: contact,
  };
};

export default connect (mapStateToProps)(ContactProperties);
