import React, { Component } from 'react'
import {
  HeaderStyled,
  Nav,
  MobileMenu,
  DesktopMenu,
  BurgerMenu,
} from './Header.style'
import LinkButton from '../LinkButton/LinkButton'
import { Link } from 'gatsby'
import openbook from '../../images/open-book.svg'

class Header extends Component {
  state = {
    visible: false,
  }
  toggleMenu = () => this.setState({ visible: !this.state.visible })
  render() {
    return (
      <React.Fragment>
        <HeaderStyled>
          <div id="header-left" className="flex items-center">
            <Link to="/">
              <img src={openbook} alt="book icon" className="h2 ph2" />
            </Link>
            <Link to="/">Audrey</Link>
          </div>
          <Nav>
            <DesktopMenu>
              <Link to="/why/">Why?</Link>
              <Link to="/faq/">Questions</Link>
              <Link to="/contact/">Contact</Link>
              <LinkButton>Get Started</LinkButton>
            </DesktopMenu>
            <BurgerMenu>
              <a
                onClick={this.toggleMenu}
                className="dtc fr tr v-mid dn-ns p0-ns link dim white"
              >
                <span className="db w2 mt1 mb2 bw2 pb2 bt bb b--white" />
                <span className="db w2 mt1 bw2 pb1 bt b--white" />
              </a>
            </BurgerMenu>
          </Nav>
        </HeaderStyled>
        {this.state.visible && (
          <MobileMenu>
            <Link to="/why/">Why?</Link>
            <Link to="/faq/">FAQ</Link>
            <Link to="/contact/">Contact</Link>
            <Link to="/Form1">Get Started</Link>
          </MobileMenu>
        )}
      </React.Fragment>
    )
  }
}

export default Header
