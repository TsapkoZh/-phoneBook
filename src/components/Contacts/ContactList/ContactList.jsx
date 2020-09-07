import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import s from './contactList.module.scss';
import Contact from './Contact';

const tableHeads = [
  { title: '', id: '1' },
  { title: 'NAME', id: '2'},
  { title: 'PHONE', id: '3'},
  { title: 'ADDRESS', id: '4'},
  { title: 'COMPANY', id: '5'},
  { title: 'EMAIL', id: '6'},
  { title: '', id: '7'},
  { title: '', id: '8'},
]

class ContactList extends PureComponent {
  render() {
    const { 
      contacts, 
      delContact,
      saveEditFields,
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
              {
                tableHeads.map(el => (
                  <td 
                    key={el.id}
                    className={s.tableCellHeader}
                  >
                    { el.title }
                  </td>
                ))
              }
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
                saveEditFields={saveEditFields}
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
  saveEditFields: PropTypes.func,
}

export default ContactList;