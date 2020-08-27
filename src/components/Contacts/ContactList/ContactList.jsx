import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import s from './contactList.module.scss';
import Contact from './Contact';

class ContactList extends Component {
  render() {
    const { 
      contacts, 
      delContact, 
      saveEditName, 
      saveEditPhone, 
      saveEditAddress, 
      saveEditCompany, 
      saveEditEmail, 
    } = this.props;

    return (
        <table className={s.table}>
          <colgroup>
            <col className={s.col1} />
            <col className={s.col2} />
            <col className={s.col3} span='3' />
            <col className={s.col4} span='2' />
          </colgroup>
          <tbody>
            <tr>
              <td className={s.tableCellHeader}>
                NAME
              </td>

              <td className={s.tableCellHeader}>
                PHONE
              </td>

              <td className={s.tableCellHeader}>
                ADDRESS
              </td>

              <td className={s.tableCellHeader}>
                COMPANY
              </td>

              <td className={s.tableCellHeader}>
                EMAIL
              </td>
              <td className={s.tableCellHeader}>
                {/* is empty */}
              </td>  

              <td className={s.tableCellHeader}>
                {/* is empty */}
              </td>
            </tr>

            {contacts.map(({id, name, phone, address, company, email}) => (
              <Contact 
                key={id}
                id={id}
                name={name}
                phone={phone}
                address={address}
                company={company}
                email={email}
                delContact={delContact}
                saveEditName={saveEditName}
                saveEditPhone={saveEditPhone}
                saveEditAddress={saveEditAddress}
                saveEditCompany={saveEditCompany}
                saveEditEmail={saveEditEmail}
              />))
            }
          </tbody>
        </table>
    )
  }
}

export default ContactList;