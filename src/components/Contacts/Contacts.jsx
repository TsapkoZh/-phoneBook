import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// import AddContactForm from './AddContactForm/AddContactForm'
// import Filter from './Filter/Filter'
// import ContactList from './ContactList/ContactList'
import AddContactForm from './AddContactForm'
import Filter from './Filter'
import ContactList from './ContactList'
import ContactProperties from '../ContactProperties/ContactProperties'

import s from './contacts.module.scss';

class Contacts extends Component {
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
      <div className={s.wrapperContacts}>
        <div className={s.wrap}>
          <h1 className={s.title}>phone book</h1>

          <div className={s.wrapper}>
            <Filter
              contacts={contacts}
              filterContact={filterContact}
            />
            
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

        <ContactProperties />
      </div>
    )
  }
}

export default Contacts;