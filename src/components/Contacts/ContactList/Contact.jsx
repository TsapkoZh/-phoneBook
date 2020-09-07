import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import EditableValue from './EditableValue';

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

class Contact extends PureComponent {
  handleDelete = () => {
    const { id, deleteContact  } = this.props;

		deleteContact (id);
  }

  handleSaveEdit = (name, value) => {
    const { id, saveEditFields } = this.props;

    saveEditFields(id, name, value);
  }

  render() {
    const { 
      index,
      id,
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
          <NavLink to={`/items/${id}`}>  
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