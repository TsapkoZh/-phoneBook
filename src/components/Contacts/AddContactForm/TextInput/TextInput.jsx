import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

import s from '../addContactForm.module.scss';

const TextInput  = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={s.addContactForm}>
      <label 
        className={s.fieldHeader} 
        htmlFor={props.id || props.name}
      >
        {label}
      </label>

      <input 
        {...field} 
        {...props} 
        className={meta.touched && meta.error ? 
          `${s.entryField} ${s.hasError}` 
          : s.entryField}
      />

      <div 
        className={s.formMessage}>
        {meta.touched && meta.error ? (
          <>{meta.error}</>
        ) : null}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string, 
  name: PropTypes.string, 
  placeholder: PropTypes.string, 
  type: PropTypes.string, 
}

export default TextInput;