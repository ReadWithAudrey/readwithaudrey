/*eslint-disable*/
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'normalize.css'
import 'tachyons'
import '../../styles/index.css'

import { Header, Footer } from '../index.js'

export const PureFormLayout = ({ children, data }) => {
  return (
    <React.Fragment>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="page-padding ph7 w-100">{children}</div>
      <Footer />
    </React.Fragment>
  )
}

export const FormLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query FormSiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <PureFormLayout data={data}>{children}</PureFormLayout>}
  />
)

PureFormLayout.propTypes = {
  children: PropTypes.node,
  data: PropTypes.object,
}
FormLayout.propTypes = {
  children: PropTypes.node,
}

export default FormLayout
