import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import s from './contactProperties.module.scss';

const ContactProperties = ({  contact: { 
                                name, 
                                phone, 
                                address, 
                                company, 
                                email
                              } }) => {
  return (
    <div className={s.contactProperties}>
      <h1 className={s.contactName}>{name}</h1>

      <div className={s.contactDetail}>
        <h5 className={s.detailName}>PHONE</h5>
        <p className={s.detail}>{phone}</p>

        <h5 className={s.detailName}>ADDRESS</h5>
        <p className={s.detail}>{address}</p>

        <h5 className={s.detailName}>COMPANY</h5>
        <p className={s.detail}>{company}</p>

        <h5 className={s.detailName}>EMAIL</h5>
        <p className={s.detail}>{email}</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const itemId = ownProps.match.params.itemId;
  const contact = state.contacts.find(el => el.id === itemId)

  return {
    contact: contact,
  };
};

ContactProperties.propTypes = {
  name: PropTypes.string, 
  phone: PropTypes.string, 
  address: PropTypes.string, 
  company: PropTypes.string, 
  email: PropTypes.string,
}

export default connect (mapStateToProps)(ContactProperties);
