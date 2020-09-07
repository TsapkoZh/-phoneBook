import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import qs from 'query-string';

import PropTypes from 'prop-types';

import { 
  addContact, 
  delContact, 
  saveEditName, 
  saveEditPhone, 
  saveEditAddress, 
  saveEditCompany,
  saveEditEmail,
} from '../redux/contact/actions.js';

import Contacts from './Contacts';

class PhoneBook extends PureComponent {
  render() {
    const { 
      addContact, 
      contacts, 
      delContact, 
      saveEditName, 
      saveEditPhone,
      saveEditAddress,
      saveEditCompany,
      saveEditEmail,
    } = this.props;

    return (
      <div>
        <Contacts
          addContact={addContact}
          delContact={delContact}
          contacts={contacts}
          saveEditName={saveEditName}
          saveEditPhone={saveEditPhone}
          saveEditAddress={saveEditAddress}
          saveEditCompany={saveEditCompany}
          saveEditEmail={saveEditEmail}
        />
      </div>
    )
  };
};

const filterContacts = (arr, searchKey) => {
  const { search } = qs.parse(searchKey);

  if(!search) {
    return arr
  }
    return arr.filter(obj => Object.keys(obj).some(key => obj[key].toLowerCase().includes(search)));
};

const mapStateToProps = state => ({
  contacts: filterContacts(state.contacts, state.router.location.search),

  // contacts: state.contacts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    addContact,
    delContact,
    saveEditName,
    saveEditPhone,
    saveEditAddress,
    saveEditCompany,
    saveEditEmail,
  }, dispatch);

  PhoneBook.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
      address: PropTypes.string,
      company: PropTypes.string,
      email: PropTypes.string,
    })),
  };

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
