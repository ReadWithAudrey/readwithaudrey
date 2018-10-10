import styled from 'styled-components'

export const StyledButton = styled.button.attrs({
  className: 'bg-green hover-bg-yellow white pa2 br2 w-50 h3 f3',
})`
  border: none;
`

export const HeaderButton = styled.button.attrs({
  className: 'bg-green hover-bg-yellow pa2 white br2 w-third f5 ma',
})`
  border: 2px solid white;
`

export const RegisterButton = styled.button.attrs({
  className: 'bg-green hover-bg-yellow white pa2 br2 w-50 h3 f3 center',
})`
  border: 2px solid white;
  display: block;
  margin: 0 auto;
`
