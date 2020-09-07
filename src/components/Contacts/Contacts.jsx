import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import AddContactForm from './AddContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import s from './contacts.module.scss';

class Contacts extends PureComponent {
  render() {
    const { 
      contacts,
      addContact, 
      deleteContact , 
      saveEditFields, 
    } = this.props;

    return (
      <div className={s.wrapperContacts}>
        <div className={s.wrap}>
          <h1 className={s.title}>phone book</h1>

          <div className={s.wrapper}>
            <Filter/>
            
            <ContactList
              contacts={contacts}
              deleteContact ={deleteContact }
              saveEditFields={saveEditFields}
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
  deleteContact : PropTypes.func,
  saveEditFields: PropTypes.func,
}

export default Contacts;