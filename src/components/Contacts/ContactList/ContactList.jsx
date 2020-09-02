import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
            <col className={s.colSerNum} />
            <col className={s.colName} />
            <col className={s.colPhone} />
            <col className={s.colAddress} />
            <col className={s.colCompany} />
            <col className={s.colEmail} />
            <col className={s.colDelProp} span='2'/>
          </colgroup>
          <tbody>
            <tr>
              <td className={s.tableCellHeader}>
                {/* is empty */}
              </td>
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

            {contacts.map(({id, name, phone, address, company, email}, index) => (
              <Contact 
                key={id}
                id={id}
                name={name}
                phone={phone}
                address={address}
                company={company}
                email={email}
                index={index}
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

Contact.propTypes = {
  name: PropTypes.string, 
  phone: PropTypes.string, 
  address: PropTypes.string, 
  company: PropTypes.string, 
  email: PropTypes.string,
  delContact: PropTypes.func,
  saveEditName: PropTypes.func,
  saveEditPhone: PropTypes.func,
  saveEditAddress: PropTypes.func,
  saveEditCompany: PropTypes.func,
  saveEditEmail: PropTypes.func,
}

export default ContactList;