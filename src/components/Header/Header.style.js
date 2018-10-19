import styled from 'styled-components'

export const HeaderStyled = styled.header.attrs({
  className:
    'flex items-center justify-between pl3 pr4 pv2 montserrat white bg-green w-100 f3 z-max',
})`
  position: fixed;
  top: 0;
  height: 10vh;
  margin-bottom: 7vh;
  overflow: hidden;
  a {
    color: #fff;
    padding: 0;
    margin: 0;
    text-decoration: none;
  }
`
export const Nav = styled.nav.attrs({
  className: 'w-65 w-40-l montserrat f4',
})`
  a {
    color: #fff;
  }

  a:visited {
    color: #fff;
  }
`
export const DesktopMenu = styled.section.attrs({
  className: 'montserrat',
})`
  display: none;
  a {
    text-decoration: none;
    display: inline-block;
    padding: 10px;
  }
  a:hover {
    background: --var(--pink);
  }
  @media (min-width: 480px) {
    text-align: right;
    display: flex;
    justify-content: space-between;
  }
`
export const BurgerMenu = styled.section`
  @media (min-width: 480px) {
    display: none;
  }
`

export const MobileMenu = styled.section.attrs({
  className: 'montserrat  bg-green tc f4 page-padding',
})`
  display: block;
  position: fixed;
  top: 10vh;
  width: 100%;
  a {
    text-decoration: none;
    display: block;
    padding: 1.3em 0;
    color: #fff;
  }
`
