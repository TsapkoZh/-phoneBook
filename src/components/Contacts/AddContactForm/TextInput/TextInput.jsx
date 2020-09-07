import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import s from '../addContactForm.module.scss';

let cx = classNames.bind(s);

const TextInput  = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  let entryField = cx({
    entryField: true,
    hasError: meta.touched && meta.error,
  });

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
        className={entryField}
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