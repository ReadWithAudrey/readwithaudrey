import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { TextBox } from '../../components'
import StyledHowItWorks from './HowItWorks.style'
import man from '../../images/manicon.svg'
import pair from '../../images/pairicon.png'
import book from '../../images/open-book-black.svg'
import PropTypes from 'prop-types'
import { Button } from '../../components/index'

const HowItWorks = () => (
  <StaticQuery
    query={query}
    render={data => {
      const {
        h1,
        Join,
        p1,
        Connect,
        p2,
        Read,
        p3,
      } = data.markdownRemark.frontmatter
      return (
        <StyledHowItWorks>
          <h2 className="f2 pink tc">{h1}</h2>
          <div id="step-1-register">
            <h2 className="f3 pink tc">{Join}</h2>
            <img src={man} alt="Icon of a man" className="small-icon" />
            <TextBox>{p1}</TextBox>
          </div>
          <div id="step-2-connect">
            <h2 className="f3 pink tc">{Connect}</h2>
            <img
              src={pair}
              alt="Icon of a pair of people"
              className="small-icon"
            />
            <TextBox>{p2}</TextBox>
          </div>
          <div id="step-3-read">
            <h2 className="f3 pink tc">{Read}</h2>
            <img src={book} alt="Icon of a man" className="small-icon" />
            <TextBox>{p3}</TextBox>
          </div>
          <Link to="/Form1/" className="no-underline white w-100">
            <Button type="register">Get started</Button>
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
    markdownRemark(frontmatter: { title: { eq: "How It Works" } }) {
      frontmatter {
        h1
        Join
        p1
        Connect
        p2
        Read
        p3
      }
    }
  }
`

export default HowItWorks
