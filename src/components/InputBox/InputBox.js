import React from 'react'
import { StyledInputBox } from './InputBox.style'
import PropTypes from 'prop-types'

const InputBox = props => <StyledInputBox placeholder={props.placeholder} />

InputBox.propTypes = {
  placeholder: PropTypes.string,
}

export default InputBox
