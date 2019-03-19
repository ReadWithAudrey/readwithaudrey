import styled from 'styled-components'

export const StyledButton = styled.button.attrs({
  className: 'white pa2 br2 w-50 h3 f3 montserrat dib pointer',
})`
  background-color: var(--pink);
  :hover {
    background-color: var(--green);
  }

  border: none;

  a {
    color: #fff;
  }
`

export const HeaderButton = styled.button.attrs({
  className: 'pa2 mv2 white br2 w-100 f5 montserrat pointer',
})`
  background-color: var(--green);
  :hover {
    background-color: var(--pink);
  }
  border: 2px solid white;
`

export const RegisterButton = styled.button.attrs({
  className: 'white pa2 br2 h3 f3 center',
})`
  background-color: var(--pink);
  :hover {
    background-color: var(--green);
  }
  border: none;
  display: block;
  white-space: nowrap;
  min-width: 200px;
  max-width: 300px;
  cursor: pointer;
  a {
    color: #fff;
  }
`

export const DisabledButton = styled.button.attrs({
  className: 'white pa2 br2 h3 f3 center',
})`
  background-color: var(--pink);
  :hover {
    background-color: var(--green);
  }
  border: none;
  display: block;
  white-space: nowrap;
  min-width: 200px;
  max-width: 300px;
  cursor: pointer;
  a {
    color: #fff;
  }
`
export const BlogButton = styled.button.attrs({
  className: 'black pa2 br2 f3',
})`
  background-color: var(--pink);
  :hover {
    background-color: var(--green);
  }
  font-size: 20px;
  text-decoration: none;
  border: none;
  display: block;
  white-space: nowrap;
  min-width: 200px;
  max-width: 300px;s
  cursor: pointer;
  position: relative;
  bottom: -18px;
  left: -2px;

  a {
    color: #fff;
  }
`
