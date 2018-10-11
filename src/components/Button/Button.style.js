import styled from 'styled-components'

export const StyledButton = styled.button.attrs({
  className: 'bg-pink hover-bg-orange white pa2 br2 w-50 h3 f3 montserrat',
})`
  border: none;
`

export const HeaderButton = styled.button.attrs({
  className: "bg-green hover-bg-pink pa2 white br2 w-third f5 montserrat"})`
  border: 2px solid white;
`

export const RegisterButton = styled.button.attrs({
  className: 'bg-pink hover-bg-orange white pa2 br2 w-50 h3 f3 center',
})`
  border: 2px solid white;
  display: block;
  margin: 0 auto;
`
