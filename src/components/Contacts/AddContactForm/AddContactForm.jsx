import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './addContactForm.module.scss';

class AddContactForm extends Component {

  state = {
    formErrors: {
      name: '', 
      phone: '',
    },
    nameValid: false, 
    phoneValid: false,
  }

  handleChange = event => {
    const nam = event.target.name;
    const val = event.target.value;

    this.setState({[nam]: val},
                  () => { this.validateField(nam, val) })
  }

  validateField = (fieldName, value)  => {
    const { formErrors } = this.state;

    switch (fieldName) {
      case 'name':{
        const isValid = value.length >= 2;
        this.setState({ 
          formErrors: {
            ...formErrors,
            name: isValid ? '' : 'Введите имя*',
          },
          nameValid: isValid,
        });
        break;}

      case 'phone': {
        const isValid = value.length >= 3;
        this.setState({ 
          formErrors: {
            ...formErrors,
            phone: isValid ? '' : 'Введите номер телефона*',
          },
          phoneValid: isValid,
        });
        break;
      }

      default:
        break;
    }
  }

  handleSubmit = event => {
    const {
      name,
      phone,
      address,
      company,
      email,
    } = this.state;

    const newContact = {
      id: Date.now().toString(), 
      name,
      phone,
      address,
      company,
      email,
    };

    event.preventDefault();
    this.props.addContact(newContact);
  }
  
  render() {
    const {
      formErrors,
      nameValid,
      phoneValid,
    } = this.state;

    const formValid = nameValid && phoneValid;

    return (
      <form
        onSubmit={this.handleSubmit}
        className={s.addContactFormWrapper}
      >
        <label 
          className={s.addContactForm}
        >
          <div>
            <p className={s.fieldHeader}>Phone</p>
            <input 
              name='phone'
              type='tel'
              maxLength='20'
              onChange={this.handleChange}
              placeholder='8-800-555-35-35'
              className={s.entryField}
            />
            <p className={s.error}>{formErrors.phone}</p>

            <p className={s.fieldHeader}>Name</p>
            <input 
              name='name'
              type='text'
              maxLength='35'
              onChange={this.handleChange}
              placeholder='Owen Lars'
              className={s.entryField}
            />
            <p className={s.error}>{formErrors.name}</p>

            <p className={s.fieldHeader}>Email</p>
            <input 
              name='email'
              type='email'
              maxLength='30'
              onChange={this.handleChange}
              placeholder='OwenL@gmail.com'
              className={s.entryField}
            />
            <p className={s.error}></p>
          </div>

          <div>
            <p className={s.fieldHeader}>Company</p>
            <input 
              name='company'
              type='text'
              maxLength='20'
              onChange={this.handleChange}
              placeholder='DEKO-Line'
              className={s.entryField}
            />
            <p className={s.error}></p>

            <p className={s.fieldHeader}>Address</p>
            <input 
              name='address'
              type='text'
              maxLength='30'
              onChange={this.handleChange}
              placeholder='East Victoria Park, WA 6101'
              className={s.entryField}
            />
            <p className={s.error}></p>
          </div>
        </label>

        <button
          onClick={this.handleSubmit}
          disabled={!formValid}
          className={!formValid ? `${s.btnWriteDown} ${s.btnWriteDownDisable}` : `${s.btnWriteDown} ${s.btnWriteDownActive}`}
        >
          add contact
        </button>
      </form>
    )
  }
}

AddContactForm.propTypes = {
  name: PropTypes.string, 
  phone: PropTypes.string, 
  address: PropTypes.string, 
  company: PropTypes.string, 
  email: PropTypes.string,
}

export default AddContactForm;