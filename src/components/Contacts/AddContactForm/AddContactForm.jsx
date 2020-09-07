import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import TextInput from './TextInput'

import s from './addContactForm.module.scss';


const fields = [
  {
    label: 'Name',
    name: 'name',
    type: 'text',
    placeholder: 'Tsapko Evgenii',
  },
  {
    label: 'Phone',
    name: 'phone',
    type: 'tel',
    placeholder: '+7(965)723-41-49',
  },
  {
    label: 'Address',
    name: 'address',
    type: 'text',
    placeholder: 'Ylitsa Stroiteleii, 16/24',
  },
  {
    label: 'Company',
    name: 'company',
    type: 'text',
    placeholder: 'Deko-line',
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: 'TsapkoZh@gmail.com',
  },
]

const AddContactForm = props => {
  return (
    <div className={s.addContactFormWrapper}>
      <h1 className={s.title}>add contact</h1>

      <Formik
        initialValues={{
          name: '',
          phone: '',
          address: '',
          company: '',
          email: '',
        }}

        validationSchema={Yup.object({
          name: Yup.string()
            .max(30, 'Must be 30 characters or less')
            .required('Required'),
          phone: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })}

        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          resetForm();
          props.addContact({ id: Date.now().toString(), ...values });
        }}
      >
        <Form className={s.formWrapper}>
          {
            fields.map(element => (
              <TextInput 
                {...element}
                key={element.name}
              />
            ))
          }

          <button className={s.btnWriteDown} type="submit">ADD CONTACT</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddContactForm;