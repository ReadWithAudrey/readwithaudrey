import styled from 'styled-components'

export const StyledRankingBox = styled.section.attrs({
  className: 'montserrat f6 lh-copy cf:after',
})`
  color: #000;
  display: flex;
  a {
    font-family: color: #fff;
  }
`

export const InputBox = styled.input.attrs({})`
  width: 23px;
  height: 23px;
  background: #fff;
  border: #d3d3d3 1px solid;
`

export const Description = styled.span.attrs({
  className: 'cf',
})`
  color: #000;
`
