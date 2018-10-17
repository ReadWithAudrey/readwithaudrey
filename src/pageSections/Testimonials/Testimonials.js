import React from 'react'
import StyledTestimonials from './Testimonials.style'
import { Button, TextBox } from '../../components/index'
import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

const Testimonials = () => (
  <StaticQuery
    query={query}
    render={data => {
      const {
        header,
        t1,
        t2,
        t3,
        t4,
        t5,
        footer,
      } = data.markdownRemark.frontmatter
      return (
        <StyledTestimonials>
          <h1 className="f2 pink tc">{header}</h1>
          <TextBox>{t1}</TextBox>
          <TextBox>{t2}</TextBox>
          <TextBox>{t3}</TextBox>
          <TextBox>{t4}</TextBox>
          <TextBox>{t5}</TextBox>

          <p className="f4 tc">{footer}</p>
          <Link to="/Form1/" className="no-underline white w-100">
            <Button type="register">Get started</Button>
          </Link>
        </StyledTestimonials>
      )
    }}
  />
)

Testimonials.propTypes = {
  siteTitle: PropTypes.string,
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { title: { eq: "Testimonials" } }) {
      frontmatter {
        header
        t1
        t2
        t3
        t4
        t5
        footer
      }
    }
  }
`
export default Testimonials
