import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import qs from 'query-string';

import PropTypes from 'prop-types';

import { 
  addContact, 
  delContact,
  saveEditFields, 
} from '../redux/contact/actions.js';

import Contacts from './Contacts';

class PhoneBook extends PureComponent {
  render() {
    const { 
      contacts,
      addContact, 
      saveEditFields, 
      delContact, 
    } = this.props;

    return (
      <div>
        <Contacts
          contacts={contacts}
          addContact={addContact}
          delContact={delContact}
          saveEditFields={saveEditFields}
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
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    addContact,
    delContact,
    saveEditFields,
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
    addContact: PropTypes.func,
    delContact: PropTypes.func,
    saveEditFields: PropTypes.func,
  };

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
