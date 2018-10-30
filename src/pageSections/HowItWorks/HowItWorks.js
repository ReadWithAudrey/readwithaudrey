import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { TextBox } from '../../components'
import StyledHowItWorks from './HowItWorks.style'
import signUp from '../../images/howItWorksImages/signUp.svg'
import connect from '../../images/howItWorksImages/connect.svg'
import read from '../../images/howItWorksImages/read.svg'
import PropTypes from 'prop-types'
import { Button } from '../../components/index'

const HowItWorks = () => (
  <StaticQuery
    query={query}
    render={data => {
      const { header, p1, p2, p3 } = data.markdownRemark.frontmatter
      return (
        <StyledHowItWorks>
          <h2 className="f2 pink tc">{header}</h2>
          <div id="steps" className="flex flex-column flex-row-ns justify-between h-100 mv4-ns">
            <div id="step-1-register" className="ph2 mh2 h-100">
              <h2 className="f3 pink tc">Join</h2>
              <img src={signUp} alt="Icon of a man" className="small-icon" />
              <TextBox>{p1}</TextBox>
            </div>
            <div id="step-2-connect" className="ph2 mh2 h-100">
              <h2 className="f3 pink tc">Connect</h2>
              <img
                src={connect}
                alt="Icon of a pair of people"
                className="small-icon"
              />
              <TextBox>{p2}</TextBox>
            </div>
            <div id="step-3-read" className="ph2 mh2 h-100">
              <h2 className="f3 pink tc">Read</h2>
              <img src={read} alt="Icon of a man" className="small-icon" />
              <TextBox>{p3}</TextBox>
            </div>
          </div>
          <Link to="/Form1/" className="no-underline white w-100">
            <Button style="register">Get started</Button>
          </Link>
        </StyledHowItWorks>
      )
    }}
  />
)

HowItWorks.propTypes = {
  siteTitle: PropTypes.string,
  data: PropTypes.object,
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { title: { eq: "HowItWorks" } }) {
      frontmatter {
        header
        p1
        p2
        p3
      }
    }
  }
`

export default HowItWorks
