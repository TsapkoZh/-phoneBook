import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import detail from './detail.svg';

import { 
  nameConst,
  phoneConst, 
  addressConst, 
  companyConst, 
  emailConst 
} from './namesConstants.js'

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
  }
  
  handleChangeFor = propertyName => event => {
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
  }
  
  handleSaveFor = propertyName => () => {
		const { id } = this.props;
    const { value } = this.state;

    this.props['saveEdit'+[propertyName]](id, value);
		this.handelCancel();
	}

	handleKeyUp = e => {
		if (e.key === 'Escape') {
			this.handelCancel();
		}
		if (e.key === 'Enter') {
			this.handleSave();
		}
	}
  
  render() {
    const { 
      name, 
      phone, 
      address, 
      company, 
      email,
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
        {isEditName ? (   
          <td className={`${s.tableCell} ${s.name}`}>
            <input 
              name={nameConst}
              type='text'
              value={value} 
              onChange={this.handleChangeFor(nameConst)}
              onBlur={this.handleSaveFor(nameConst)}
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
              value={value} 
              onChange={this.handleChangeFor(phoneConst)}
              onBlur={this.handleSaveFor(phoneConst)}
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
              onChange={this.handleChangeFor(addressConst)}
              onBlur={this.handleSaveFor(addressConst)}
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
              value={value} 
              onChange={this.handleChangeFor(companyConst)}
              onBlur={this.handleSaveFor(companyConst)}
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
              value={value} 
              onChange={this.handleChangeFor(emailConst)}
              onBlur={this.handleSaveFor(emailConst)}
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
          <button className={s.del}>  
            <img src={detail} className={s.del} alt="detail" />
          </button>
        </td>

      </tr>
    )
  }
}

// Goods.propTypes = {
//   nameProduct: PropTypes.string,
//   quantity: PropTypes.string,
//   price: PropTypes.string,
// }

export default Contact;