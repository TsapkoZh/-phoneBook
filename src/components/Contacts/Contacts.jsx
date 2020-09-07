import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import AddContactForm from './AddContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import s from './contacts.module.scss';

class Contacts extends PureComponent {
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
      <div className={s.wrapperContacts}>
        <div className={s.wrap}>
          <h1 className={s.title}>phone book</h1>

          <div className={s.wrapper}>
            <Filter/>
            
            <ContactList
              delContact={delContact}
              contacts={contacts}
              saveEditName={saveEditName}
              saveEditPhone={saveEditPhone}
              saveEditAddress={saveEditAddress}
              saveEditCompany={saveEditCompany}
              saveEditEmail={saveEditEmail}
            />
          </div>
        </div>
        
        <AddContactForm
          addContact={addContact}
        />
      </div>
    )
  }
}

Contacts.propTypes = {
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
  saveEditName: PropTypes.func,
  saveEditPhone: PropTypes.func,
  saveEditAddress: PropTypes.func,
  saveEditCompany: PropTypes.func,
  saveEditEmail: PropTypes.func,
}

export default Contacts;