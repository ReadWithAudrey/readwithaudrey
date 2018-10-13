import styled from 'styled-components'

export const Nav = styled.nav.attrs({
  className: 'w-60 w-80-l montserrat f5',
})`

a {
  color: #FFF;
}

a:visited {
  color: #FFF;
}

.navWide {
  display: none;
  margin: 0 auto;

  .wideDiv {
    text-align: right;

    a {
      text-decoration: none;
      display: inline-block;
      margin: 0 20px;
      padding: 10px;
    }
    a:hover {
      background: --var-pink;
    }
  }
}
.navNarrow {
  .narrowLinks {
    display: block;
    a {
      text-decoration: none;
      display: block;
      padding: 0.5em 0;
    }
  }
}
}

// Adjust breakpoint as desired to select when the "hamburger" menu is
// replaced by just the links.
@media (min-width: 600px) {
  .navWide {
    display: block;
  }

  .navNarrow {
    display: none;
  }
`
