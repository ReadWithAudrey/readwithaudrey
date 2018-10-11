import styled from 'styled-components'

const HeaderStyled = styled.header.attrs({
  className:
    'flex items-center justify-between ph3 montserrat white bg-green w-100 f3',
})`
  position: fixed;
  top: 0;
  min-height: 5vh;
  margin-bottom: 7vh;
  a {
    color: #fff;
    text-decoration: none;
  }
`
export default HeaderStyled
