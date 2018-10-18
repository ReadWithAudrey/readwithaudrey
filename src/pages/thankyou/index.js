import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import facebook from '../../images/facebook.png'
import email from '../../images/email.png'
import twitter from '../../images/twitter.png'

import { TextBox, Layout } from '../../components/'

const ThankYou = ({ data }) => {
  const { header1, header2, p1, p2, p3, p4 } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark
  return (
    <Layout>
      <h1 className="f3 pink tc montserrat mb3">{header1}</h1>
      <TextBox>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </TextBox>
      <Link to="/contact">contact us</Link>
      <h2 className="f3 pink tc montserrat mb3">{header2}</h2>
      <TextBox>{p1}</TextBox>
      <img src={facebook} alt="Facebook" className="fl" />
      <img src={twitter} alt="Twitter" className="fl" />
      <img src={email} alt="Email" className="fl" />
      <TextBox>{p2}</TextBox>
      <TextBox>{p3}</TextBox>
      <Link to="/">
        <TextBox>{p4}</TextBox>
      </Link>
    </Layout>
  )
}

ThankYou.propTypes = {
  data: PropTypes.object,
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { title: { eq: "Thank You" } }) {
      html
      frontmatter {
        header1
        header2
        p1
        p2
        p3
        p4
      }
    }
  }
`

export default ThankYou
