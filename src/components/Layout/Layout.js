/*eslint-disable*/
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'normalize.css' // css reset stylesheet
import 'tachyons' // tachyons css
import '../../styles/index.css' // custom css

import { Header, Footer } from '../index.js'

export const PureLayout = ({ children, data }) => {
  console.log(typeof data)
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
      <div className="flex flex-column items-center justify-center page-padding ph4">
        {children}
      </div>
      <Footer />
    </React.Fragment>
  )
}

export const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <PureLayout data={data}>{children}</PureLayout>}
  />
)

PureLayout.propTypes = {
  children: PropTypes.node,
  data: PropTypes.object,
}
Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
