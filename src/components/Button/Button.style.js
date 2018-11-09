import styled from 'styled-components'

export const StyledButton = styled.button.attrs({
  className: 'bg-pink hover-bg-green white pa2 br2 w-50 h3 f3 montserrat',
})`
  border: none;
  display: block;
  a {
    color: #fff;
  }
`

export const HeaderButton = styled.button.attrs({
  className: 'bg-green hover-bg-pink pa2 mv2 white br2 w-100 f5 montserrat',
})`
  border: 2px solid white;
`

export const RegisterButton = styled.button.attrs({
  className:
    'bg-pink hover-bg-green white pa2 br2 w-40 w-20-ns h3 f3 mt4 mb4 center',
})`
  border: none;
  display: block;
  white-space: nowrap;
  min-width: 200px;
  max-width: 400px;

  a {
    color: #fff;
  }
`
