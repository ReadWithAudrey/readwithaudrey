import React, { Component } from 'react'
import { HeaderStyled, Nav, MobileMenu } from './Header.style'
import PropTypes from 'prop-types'
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
            <div className="navWide">
              <div className="wideDiv">
                <Link to="/story/">Why?</Link>
                <Link to="/faq/">FAQ</Link>
                <Link to="/contact/">Contact</Link>
                <Link to="/Form1" className="mv2 white br2 ba bw1 b--white">
                  Join Us
                </Link>
              </div>
            </div>
            <div className="navNarrow">
              <a
                onClick={this.toggleMenu}
                className="dtc fr tr v-mid dn-ns p0-ns link dim white"
              >
                <span className="db w2 mt1 mb2 bw2 pb2 bt bb b--white" />
                <span className="db w2 mt1 bw2 pb1 bt b--white" />
              </a>
            </div>
          </Nav>
        </HeaderStyled>
        {this.state.visible && (
          <MobileMenu>
            Showing
            <Link to="/story/">Why?</Link>
            <br />
            <Link to="/faq/">FAQ</Link>
            <br />
            <Link to="/contact/">Contact</Link>
            <br />
            <Link to="/Form1">Join Us</Link>
            <br />
          </MobileMenu>
        )}
      </React.Fragment>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
