import React from 'react'
import { StyledTextArea } from './TextArea.style'
import PropTypes from 'prop-types'

const TextArea = props => {
  if (props.required) {
    return (
      <StyledTextArea
        placeholder={props.placeholder}
        onChange={props.onChange}
        name={props.name}
        rows="5"
      />
    )
  } else {
    return (
      <StyledTextArea
        placeholder={props.placeholder}
        onChange={props.onChange}
        name={props.name}
        rows="5"
      />
    )
  }
}

TextArea.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
}

export default TextArea
