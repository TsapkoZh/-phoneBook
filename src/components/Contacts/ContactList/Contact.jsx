import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import EditableValue from './EditableValue/EditableValue';

import detail from './detail.svg';

import s from './contactList.module.scss';

const fields = [
  {
    name: 'name',
    type: 'text',
    maxLength: '30',
  },
  {
    name: 'phone',
    type: 'tel',
    maxLength: '20',
  },
  {
    name: 'address',
    type: 'text',
    maxLength: '30',
  },
  {
    name: 'company',
    type: 'text',
    maxLength: '20',
  },
  {
    name: 'email',
    type: 'email',
    maxLength: '500',
  },
]

const capitalize = s => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

class Contact extends PureComponent {
  handleDelete = () => {
    const { id, delContact } = this.props;

		delContact(id);
  }

  handleSaveEdit = (name, value) => {
    const { id } = this.props;

    this.props[`saveEdit${capitalize(name)}`](id, value);
  }

  render() {
    const { 
      index,
    } = this.props;
    
    return(
    <tr>
        <td className={`${s.serialNumber}`}>
          <p>{index+1}</p>
        </td>

        {
          fields.map(el => (
            <EditableValue
              {...el}
              key={el.name}
              value={this.props[el.name]}
              // name={el.name}
              // type={el.type}
              // maxLength={el.maxLength}
              saveEditFields={this.handleSaveEdit}
            />
          ))
        }
        <td className={`${s.tableCell}`}>
          <button 
            type="button"
            onClick={this.handleDelete}
            className={s.del}
          >
            &times;
          </button>
        </td>

        <td className={`${s.tableCell}`}>
          <NavLink to={`/items/${index+1}`}>  
            <img src={detail} alt="detail" />
          </NavLink>
        </td>
      </tr>
    )
  }
}

Contact.propTypes = {
  name: PropTypes.string, 
  phone: PropTypes.string, 
  address: PropTypes.string, 
  company: PropTypes.string, 
  email: PropTypes.string,
}

export default Contact;