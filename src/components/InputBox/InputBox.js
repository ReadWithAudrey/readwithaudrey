import React from 'react'
import { StyledInputBox } from './InputBox.style'
import PropTypes from 'prop-types'

const InputBox = props => (
  <StyledInputBox
    placeholder={props.placeholder}
    onChange={props.onChange}
    name={props.name}
  />
)

InputBox.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.fnc,
  name: PropTypes.string,
}

export default InputBox
