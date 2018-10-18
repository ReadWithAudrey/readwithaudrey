import React from 'react'
import PropTypes from 'prop-types'
import { StyledForm } from './FormSection.style'

const FormSection = props => {
  return <StyledForm>{props.children}</StyledForm>
}

FormSection.propTypes = {
  children: PropTypes.array,
}

export default FormSection
