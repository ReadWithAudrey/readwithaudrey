import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { TextBox, Layout } from '../../components/'

const FAQ = ({ data }) => {
  const {
    header1,
    q11,
    a11,
    q12,
    a12,
    q13,
    a13,
    q14,
    a14,
    q15,
    a15,
    header2,
    q21,
    a21,
    q22,
    a22,
    q23,
    a23,
    q24,
    a24,
    header3,
    q31,
    a31,
    q32,
    a32,
    q33,
    a33,
    q34,
    a34,
    header4,
    q41,
    a41,
    q42,
    a42,
    q43,
    a43,
    q44,
    a44,
    q45,
    a45,
    q46,
    a46,
    header5,
    q51,
    a51,
    q52,
    a52,
    q53,
    a53,
    header6,
    q61,
    a61,
    footer,
  } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <h1 className="f2 pink tc montserrat mb3 mt4">FAQs</h1>
      <h2 className="f3 pink tc montserrat mb3">{header1}</h2>
      <h3>{q11}</h3>
      <TextBox>{a11}</TextBox>
      <h3>{q12}</h3>
      <TextBox>{a12}</TextBox>
      <h3>{q13}</h3>
      <TextBox>{a13}</TextBox>
      <h3>{q14}</h3>
      <TextBox>{a14}</TextBox>
      <h3>{q15}</h3>
      <TextBox>{a15}</TextBox>
      <h2 className="f3 pink tc montserrat mb3">{header2}</h2>
      <h3>{q21}</h3>
      <TextBox>{a21}</TextBox>
      <h3>{q22}</h3>
      <TextBox>{a22}</TextBox>
      <h3>{q23}</h3>
      <TextBox>{a23}</TextBox>
      <h3>{q24}</h3>
      <TextBox>{a24}</TextBox>
      <h2 className="f3 pink tc montserrat mb3">{header3}</h2>
      <h3>{q31}</h3>
      <TextBox>{a31}</TextBox>
      <h3>{q32}</h3>
      <TextBox>{a32}</TextBox>
      <h3>{q33}</h3>
      <TextBox>{a33}</TextBox>
      <h3>{q34}</h3>
      <TextBox>{a34}</TextBox>
      <h2 className="f3 pink tc montserrat mb3">{header4}</h2>
      <h3>{q41}</h3>
      <TextBox>{a41}</TextBox>
      <h3>{q42}</h3>
      <TextBox>{a42}</TextBox>
      <h3>{q43}</h3>
      <TextBox>{a43}</TextBox>
      <h3>{q44}</h3>
      <TextBox>{a44}</TextBox>
      <h3>{q45}</h3>
      <TextBox>{a45}</TextBox>
      <h3>{q46}</h3>
      <TextBox>{a46}</TextBox>
      <h2 className="f3 pink tc montserrat mb3">{header5}</h2>
      <h3>{q51}</h3>
      <TextBox>{a51}</TextBox>
      <h3>{q52}</h3>
      <TextBox>{a52}</TextBox>
      <h3>{q53}</h3>
      <TextBox>{a53}</TextBox>
      <h2 className="f3 pink tc montserrat mb3">{header6}</h2>
      <h3>{q61}</h3>
      <TextBox>{a61}</TextBox>

      <TextBox>{footer}</TextBox>
    </Layout>
  )
}

FAQ.propTypes = {
  data: PropTypes.object,
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { title: { eq: "FAQs" } }) {
      frontmatter {
        header1
        q11
        a11
        q12
        a12
        q13
        a13
        q14
        a14
        q15
        a15
        header2
        q21
        a21
        q22
        a22
        q23
        a23
        q24
        a24
        header3
        q31
        a31
        q32
        a32
        q33
        a33
        q34
        a34
        header4
        q41
        a41
        q42
        a42
        q43
        a43
        q44
        a44
        q45
        a45
        q46
        a46
        header5
        q51
        a51
        q52
        a52
        q53
        a53
        header6
        q61
        a61
        footer
      }
    }
  }
`

export default FAQ
