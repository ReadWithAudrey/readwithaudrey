import React from 'react'
import { StyledRankingBox, InputBox, Description } from './RankingBox.style'
import PropTypes from 'prop-types'

const RankingBox = props => {
  return (
    <StyledRankingBox>
      <InputBox placeholder={props.placeholder} />
      <Description>{props.children}</Description>
    </StyledRankingBox>
  )
}

RankingBox.propTypes = {
  children: PropTypes.string,
  placeholder: PropTypes.string,
}

export default RankingBox
