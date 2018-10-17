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
        h1,
        f1,
        n1,
        n2,
        n3,
        n4,
        n5,
        t1,
        t2,
        t3,
        t4,
        t5,
      } = data.markdownRemark.frontmatter
      return (
        <StyledTestimonials>
          <h1 className="f2 pink tc">{h1}</h1>
          <TextBox>
            &quot;
            {t1}
            &quot; - {n1}
            Paulo.
          </TextBox>

          <TextBox>
            &quot;
            {t2}
            &quot; - {n2}
          </TextBox>

          <TextBox>
            &quot;
            {t3}
            &quot; - {n3}
          </TextBox>
          <TextBox>
            &quot;
            {t4}
            &quot; - {n4}
          </TextBox>

          <TextBox>
            &quot;
            {t5}
            &quot; - {n5}
          </TextBox>

          <p className="f4 tc">{f1}</p>
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
        f1
        h1
        n1
        n2
        n3
        n4
        n5
        t1
        t2
        t3
        t4
        t5
      }
    }
  }
`
export default Testimonials
