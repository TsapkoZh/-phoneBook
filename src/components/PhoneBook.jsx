import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';

import { 
  addContact, 
  delContact, 
  saveEditName, 
  saveEditPhone, 
  saveEditAddress, 
  saveEditCompany,
  saveEditEmail,
} from '../redux/contact/actions.js';
import { filterContact } from '../redux/filter/actions.js';

import Contacts from './Contacts';

class PhoneBook extends Component {
  render() {
    const { 
      addContact, 
      contacts, 
      filterContact, 
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
          filterContact={filterContact}
          saveEditName={saveEditName}
          saveEditPhone={saveEditPhone}
          saveEditAddress={saveEditAddress}
          saveEditCompany={saveEditCompany}
          saveEditEmail={saveEditEmail}
        />
      </div>
    )
  }
}

const filterContacts = (arr, searchKey) => {
  return arr.filter(obj => Object.keys(obj).some(key => obj[key].toLowerCase().includes(searchKey)));
}

const mapStateToProps = state => ({
  contacts: filterContacts(state.contacts, state.filter),
  filter: state.filter,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    addContact,
    delContact,
    filterContact,
    saveEditName,
    saveEditPhone,
    saveEditAddress,
    saveEditCompany,
    saveEditEmail,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
