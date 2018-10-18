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
        header1,
        text1,
        header2,
        text2,
        header3,
        text3,
      } = data.markdownRemark.frontmatter
      return (
        <About>
          <div id="why-maintext">
            <h3 className="f2 pink tc">{header1}</h3>
            <TextBox className="tc lh-copy f4">{text1}</TextBox>
            <h3 className="f2 pink tc">{header2}</h3>
            <TextBox className="tc lh-copy f4">{text2}</TextBox>
            <h3 className="f2 pink tc">{header3}</h3>
            <TextBox className="tc lh-copy f4">{text3}</TextBox>
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
        header1
        text1
        header2
        text2
        header3
        text3
      }
    }
  }
`

export default AboutAudrey
