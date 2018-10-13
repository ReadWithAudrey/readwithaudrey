import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Nav } from './Navigation.style'
import { Link } from 'gatsby'

class Navigation extends Component {
  state = {
    visible: false,
  }
  toggleMenu = () => this.setState({ visible: !this.state.visible })
  render() {
    return (
      <React.Fragment>
        <Nav>
          <div className="navWide">
            <div className="wideDiv">
              <Link to="/story/">Why?</Link>
              <Link to="/faq/">FAQ</Link>
              <Link to="/contact/">Contact</Link>
              <Link
                to="/Form1"
                className="pa4 mv2 white br2 f5 montserrat ba bw1 b--white"
              >
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
          {this.state.visible && (
            <div className="narrowLinks">
              <Link to="/story/">Why?</Link>
              <Link to="/faq/">FAQ</Link>
              <Link to="/contact/">Contact</Link>
              <Link to="/Form1">Join Us</Link>
            </div>
          )}
        </Nav>
      </React.Fragment>
    )
  }
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

export default Navigation
