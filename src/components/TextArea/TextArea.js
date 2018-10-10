import React from 'react'
import { StyledTextArea } from './TextArea.style'
import PropTypes from 'prop-types'

const TextArea = props => (
  <StyledTextArea placeholder={props.placeholder} rows="5" />
)

TextArea.propTypes = {
  placeholder: PropTypes.string,
}

export default TextArea
