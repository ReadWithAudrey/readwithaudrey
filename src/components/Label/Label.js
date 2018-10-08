import React from 'react'
import { StyledLabel } from './Label.style'
import PropTypes from 'prop-types'

const Label = props => <StyledLabel>{props.children}</StyledLabel>

Label.propTypes = {
  children: PropTypes.string,
}

export default Label
