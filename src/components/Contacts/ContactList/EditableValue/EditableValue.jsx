import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import s from '../contactList.module.scss';

class EditableValue extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      value: props.value,
    }
  }
  handleDblClick = () => {
    this.setState({
      isEdit: true,
    })

    window.addEventListener('keydown', this.handleKeyUpEnter);
		window.addEventListener('keydown', this.handleKeyUpEscape);
  };

  handleChange = event => {
    const trimName = event.currentTarget.value.trim();

		if (trimName !== '') {
			this.setState({value: trimName});
		}
  };

  handleSave = () => {
    const { name } = this.props;
    const { value } = this.state;

    this.props.saveEditFields(name, value);
    this.setState({ isEdit: false });
  };

  handleKeyUpEnter = e => {
		if (e.key === 'Enter') {
      this.handleSave()
		}
  }

  handleKeyUpEscape = e => {
		if (e.key === 'Escape') {
      this.handelCancel();
		}
  }

  handelCancel = () => {
		this.setState({ 
      isEdit: false,
      value: this.props.value,
    });

    window.removeEventListener('keydown', this.handleKeyUpEnter);
		window.removeEventListener('keydown', this.handleKeyUpEscape);
  }

  render() {
    const { isEdit, value } = this.state;
    const { 
      name, 
      type, 
      maxLength,
    } = this.props;

    return (
      <td 
        className={`${s.tableCell} ${s.name}`}
        onDoubleClick={this.handleDblClick}
      >
        {isEdit ? (
          <input 
            name={name}
            type={type}
            maxLength={maxLength}
            value={value} 
            onChange={this.handleChange}
            onBlur={this.handleSave}
            onKeyPress={this.handleKeyUp}
            autoFocus={true}
            className={s.editContact}
          />
        ) : (
          <span>
            {value}
          </span>
        )}
      </td>
    )
  }
}

EditableValue.propTypes = {
  name: PropTypes.string, 
  value: PropTypes.string, 
  type: PropTypes.string, 
  maxLength: PropTypes.string, 
}

export default EditableValue;
