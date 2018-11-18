/*eslint-disable*/
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'normalize.css'
import 'tachyons'
import '../../styles/index.css'

import { Header, Footer } from '../index.js'

export const PureLayout = ({ children, data }) => {
  const title = data !== undefined ? data.site.siteMetadata.title : 'Audrey'
  return (
    <React.Fragment>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Header siteTitle={title} />
      <div className="page-padding ph4 ph6-ns vw-100 center mw9">
        {children}
      </div>
      <Footer />
    </React.Fragment>
  )
}

const QueryLayout = ({ children }) => (
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
QueryLayout.propTypes = {
  children: PropTypes.node,
}

let Layout
if (process.env.NODE_ENV === 'test') {
  Layout = PureLayout
} else {
  Layout = QueryLayout
}

export default Layout
