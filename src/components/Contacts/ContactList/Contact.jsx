import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import detail from './detail.svg';

import { 
  nameConst,
  phoneConst, 
  addressConst, 
  companyConst, 
  emailConst 
} from './namesConstants.js';

import s from './contactList.module.scss';

class Contact extends Component {

  state = {
		value: '',
    isEditName: false,
    isEditphone: false,
    isEditAddress: false,
    isEditCompany: false,
    isEditEmail: false,
  }

  handleDelete = () => {
    const { id, delContact } = this.props;

		delContact(id);
  }

  handleDblClickFor = propertyName => () => {
    const propName = propertyName.toString().toLowerCase();

		this.setState({ 
			['isEdit'+[propertyName]]: true,
      value: this.props[propName],
    });

    window.addEventListener('keydown', this.handleKeyUp);
		window.addEventListener('keydown', this.handleKeyUpEscape);
  }
  
  handleChangeFor = () => event => {
    const trimName = event.currentTarget.value;

		if (trimName.trim()) {
			this.setState({value: trimName});
		}
  }
  
  handelCancel = () => {
		this.setState({ 
      isEditName: false,
      isEditPhone: false,
      isEditAddress: false,
      isEditCompany: false,
      isEditEmail: false,
    });
    window.removeEventListener('keydown', this.handleKeyUp);
		window.removeEventListener('keydown', this.handleKeyUpEscape);
  }
  
  handleSaveFor = propertyName => () => {
		const { id } = this.props;
    const { value } = this.state;

    this.props['saveEdit'+[propertyName]](id, value);
		this.handelCancel();
	}

	handleKeyUp = propertyName => e => {
    const { id } = this.props;
    const { value } = this.state;

		if (e.key === 'Enter') {
      console.log('Enter')
      this.props['saveEdit'+[propertyName]](id, value);
      this.handelCancel();
		}
  }

  handleKeyUpEscape = e => {
		if (e.key === 'Escape') {
      this.handelCancel();
		}
  }
  
  render() {
    const { 
      name, 
      phone, 
      address, 
      company, 
      email,
      index,
    } = this.props;
    
    const {
      value,
      isEditName, 
      isEditPhone,
      isEditAddress,
      isEditCompany,
      isEditEmail,
    } = this.state;

    return(
      <tr>
        <td className={`${s.serialNumber}`}>
          <p>{index+1}</p>
        </td>

        {isEditName ? (   
          <td className={`${s.tableCell} ${s.name}`}>
            <input 
              name={nameConst}
              type='text'
              maxLength='30'
              value={value} 
              onChange={this.handleChangeFor()}
              onBlur={this.handleSaveFor(nameConst)}
              onKeyPress={this.handleKeyUp(nameConst)}
              autoFocus={true}
              className={s.editContact}
            />
          </td>              
          ) : (
          <td 
            name={nameConst}
            className={`${s.tableCell} ${s.name}`}
            onDoubleClick={this.handleDblClickFor(nameConst)}
          >
            {name}
          </td>
          )
        }

        {isEditPhone ? (  
          <td className={`${s.tableCell} ${s.name}`}>
            <input 
              name={phoneConst}
              type='tel'
              maxLength='20'
              value={value} 
              onChange={this.handleChangeFor()}
              onBlur={this.handleSaveFor(phoneConst)}
              onKeyPress={this.handleKeyUp(phoneConst)}
              autoFocus={true}
              className={s.editContact}
            />
          </td>
          ) : (
          <td 
            className={`${s.tableCell} ${s.number}`}
            onDoubleClick={this.handleDblClickFor(phoneConst)}
          >
            {phone}
          </td>
          )
        }
            
        {isEditAddress ? (  
          <td className={`${s.tableCell} ${s.address}`}>
            <input 
              name={addressConst}
              type='text'
              value={value} 
              maxLength='30'
              onChange={this.handleChangeFor()}
              onBlur={this.handleSaveFor(addressConst)}
              onKeyPress={this.handleKeyUp(addressConst)}
              autoFocus={true}
              className={s.editContact}
            />
          </td>
          ) : (
          <td 
            className={`${s.tableCell} ${s.address}`}
            onDoubleClick={this.handleDblClickFor(addressConst)}
          >
            {address}
          </td>
          )
        }

        {isEditCompany ? (  
          <td className={`${s.tableCell} ${s.company}`}>
            <input 
              name={companyConst}
              type='text'
              maxLength='25'
              value={value} 
              onChange={this.handleChangeFor()}
              onBlur={this.handleSaveFor(companyConst)}
              onKeyPress={this.handleKeyUp(companyConst)}
              autoFocus={true}
              className={s.editContact}
            />
          </td>
          ) : (
          <td 
            className={`${s.tableCell} ${s.company}`}
            onDoubleClick={this.handleDblClickFor(companyConst)}
          >
            {company}
          </td>
          )
        }

        {isEditEmail ? (  
          <td className={`${s.tableCell} ${s.email}`}>
            <input 
              name={emailConst}
              type='text'
              maxLength='30'
              value={value} 
              onChange={this.handleChangeFor()}
              onBlur={this.handleSaveFor(emailConst)}
              onKeyPress={this.handleKeyUp(emailConst)}
              autoFocus={true}
              className={s.editContact}
            />
          </td>
          ) : (
          <td 
            className={`${s.tableCell} ${s.email}`}
            onDoubleClick={this.handleDblClickFor(emailConst)}
          >
            {email}
          </td>
          )
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