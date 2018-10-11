import React from 'react'
import {
  WelcomeScreen,
  AboutAudrey,
  AsSeenOn,
  HowItWorks,
  Examples
} from '../pageSections/index'

import { Layout } from '../components'

const IndexPage = () => (
  <Layout>
    <WelcomeScreen />
    <AboutAudrey />
    <AsSeenOn />
    <HowItWorks />
    <Examples />
  </Layout>
)

export default IndexPage
