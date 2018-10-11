import React from 'react'
import StyledExamples from './Examples.style'
import { Button } from '../../components/index'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Examples = () => (
  <StyledExamples>
    <h1 className="f2 pink tc">Our latest readers</h1>
    <h2 className="f4 tc">
      We take great pride in our reading pairings. Here are some of our most
      recent:
    </h2>
    <ul className="tl">
      <li className="pv2">
        A relationship therapist and medical doctor read about attachment theory
      </li>
      <li className="pv2">
        A retired judge and a history student read Darkest Hour, by Anthony
        McCarten
      </li>
      <li className="pv2">
        A professional musician and a teaching assistant read Musicophilia, by
        Oliver Sacks
      </li>
      <li className="pv2">
        A young playwright and an experienced radio presenter read Wonder, by R
        J Palacio
      </li>
    </ul>
    <p className="f4 tc">Are you ready to join the Audrey community?</p>
    <Link to="/Form1/" className="no-underline white">
      <Button>Get started</Button>
    </Link>
  </StyledExamples>
)

Examples.propTypes = {
  siteTitle: PropTypes.string,
}

export default Examples
