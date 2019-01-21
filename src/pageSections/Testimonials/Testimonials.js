import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import StyledTestimonials from './Testimonials.style'
import { Button, TextBox } from '../../components/index'
import PropTypes from 'prop-types'

const Testimonials = () => (
  <StaticQuery
    query={query}
    render={data => {
      const { html } = data.markdownRemark
      const { header, footer } = data.markdownRemark.frontmatter
      return (
        <StyledTestimonials>
          <h1 className="f2 tc" style={{ color: '#fd8181' }}>
            {header}
          </h1>
          <TextBox>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </TextBox>
          <p className="f3 tc">{footer}</p>
          <Link to="/Form1/" className="no-underline white">
            <Button style="register" className="mt3">
              Get started
            </Button>
          </Link>
        </StyledTestimonials>
      )
    }}
  />
)

Testimonials.propTypes = {
  siteTitle: PropTypes.string,
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { title: { eq: "Testimonials" } }) {
      html
      frontmatter {
        header
        footer
      }
    }
  }
`
export default Testimonials
