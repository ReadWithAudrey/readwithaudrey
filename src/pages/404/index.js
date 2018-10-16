import React from 'react'
import { Link } from 'gatsby'
import { Layout, TextBox } from '../../components'

const NotFoundPage = () => (
  <Layout>
    <h1 className="f2 pink tc montserrat mb3 mt4">404 NOT FOUND</h1>
    <TextBox>
      Ooops.. You just hit a page that doesn&#39;t exist... the sadness.
    </TextBox>
    <TextBox>
      Please visit our <Link to="/">homepage</Link> to find out more about us.
    </TextBox>
  </Layout>
)

export default NotFoundPage
