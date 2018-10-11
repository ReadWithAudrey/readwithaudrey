import React from 'react'
import { Homepage, Aboutpage, ASOpage, Howpage, Examplespage } from '../components/index'

import {Layout} from '../components'

const IndexPage = () => (
  <Layout>
    <Homepage/>
    <Aboutpage/>
    <ASOpage/>
    <Howpage/>
    <Examplespage/>
  </Layout>
)

export default IndexPage
