import React from 'react'
import { Homepage } from '../components/index'
import { Aboutpage } from '../components/index'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Homepage/>
    <Aboutpage/>
  </Layout>
)

export default IndexPage
