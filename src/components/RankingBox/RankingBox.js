import React from 'react'
import { StyledRankingBox, InputBox } from './RankingBox.style'
import PropTypes from 'prop-types'

const RankingBox = props => (
  <StyledRankingBox>
    <InputBox>{props.children}</InputBox>
  </StyledRankingBox>
)

RankingBox.propTypes = {
  children: PropTypes.string,
  placeholder: PropTypes.string,
}

export default RankingBox
