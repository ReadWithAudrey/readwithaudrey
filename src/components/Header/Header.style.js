import styled from 'styled-components'

export const HeaderStyled = styled.header.attrs({
  className:
    'flex items-center justify-between ph3 pv2 montserrat white bg-green vw-100 f3 z-max',
})`
  position: sticky;
  top: 0;
  height: 10vh;
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
    white-space: nowrap;
    padding: 5px;
  }

  a:hover {
    background: --var(--pink);
  }
  @media (min-width: 480px) {
    text-align: right;
    display: flex;
    justify-content: space-between;
    margin-right: 20px;
  }
`
export const BurgerMenu = styled.section`
  @media (min-width: 480px) {
    display: none;
  }
`

export const MobileMenu = styled.section.attrs({
  className: 'montserrat  bg-green tc f4 page-padding z-max',
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
