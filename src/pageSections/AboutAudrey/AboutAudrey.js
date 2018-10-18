import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import About from './AboutAudrey.style'
import { TextBox } from '../../components'
import PropTypes from 'prop-types'

const AboutAudrey = () => (
  <StaticQuery
    query={query}
    render={data => {
      const {
        text1,
        text2,
        text3,
        text4,
        text5,
      } = data.markdownRemark.frontmatter
      return (
        <About>
          <div id="why-maintext">
            <h2 className="f2 pink tc">Why</h2>
            <TextBox className="tc lh-copy f4">{text1}</TextBox>
            <TextBox className="tc lh-copy f4">{text2}</TextBox>
            <TextBox className="tc lh-copy f4">{text3}</TextBox>
            <TextBox className="tc lh-copy f4">{text4}</TextBox>
            <TextBox className="tc lh-copy f4">{text5}</TextBox>
          </div>
        </About>
      )
    }}
  />
)

AboutAudrey.propTypes = {
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
    markdownRemark(frontmatter: { title: { eq: "About Audrey" } }) {
      frontmatter {
        text1
        text2
        text3
        text4
        text5
      }
    }
  }
`

export default AboutAudrey
