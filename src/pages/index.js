import React from 'react'
import { Homepage } from '../components/index'
import { Aboutpage } from '../components/index'
import { ASOpage } from '../components/index'
import { Howpage } from '../components/index'

import {Layout} from '../components'

const IndexPage = () => (
  <Layout>
    <Homepage/>
    <Aboutpage/>
    <ASOpage/>
    <Howpage/>
  </Layout>
)

export default IndexPage
