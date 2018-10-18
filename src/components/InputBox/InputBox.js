import React from 'react'
import { StyledInputBox } from './InputBox.style'
import PropTypes from 'prop-types'

const InputBox = props => {
  if (props.required) {
    return (
      <StyledInputBox
        placeholder={props.placeholder}
        onChange={props.onChange}
        name={props.name}
        type={props.type}
        required
      />
    )
  } else {
    return (
      <StyledInputBox
        placeholder={props.placeholder}
        onChange={props.onChange}
        name={props.name}
        type={props.type}
      />
    )
  }
}

InputBox.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
}

export default InputBox
