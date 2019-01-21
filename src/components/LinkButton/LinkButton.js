import React from 'react'
import { StyledLinkButton } from './LinkButton.style'
import PropTypes from 'prop-types'

const LinkButton = props => (
  <StyledLinkButton href="/Form1">{props.children}</StyledLinkButton>
)

LinkButton.propTypes = {
  children: PropTypes.string,
}

export default LinkButton
