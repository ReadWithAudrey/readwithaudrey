import styled from 'styled-components'

export const HeaderStyled = styled.header.attrs({
  className:
    'flex items-center justify-between ph3 pv2 montserrat white bg-green w-100 f3',
})`
  position: fixed;
  top: 0;
  min-height: 5vh;
  margin-bottom: 7vh;
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

  .navWide {
    display: none;
    margin: 0 auto;

    .wideDiv {
      text-align: right;
      display: flex;
      justify-content: space-between;

      a {
        text-decoration: none;
        display: inline-block;
        padding: 10px;
      }
      a:hover {
        background: --var-pink;
      }
    }
  }

  @media (min-width: 480px) {
    .navWide {
      display: block;
    }

    .navNarrow {
      display: none;
    }
  }
`

export const MobileMenu = styled.section.attrs({
  className: 'montserrat  bg-green tc f4',
})`
  display: block;
  a {
    text-decoration: none;
    display: block;
    padding: 0.25em 0;
    color: #fff;
`
