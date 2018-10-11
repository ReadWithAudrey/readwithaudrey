import React from 'react'
import {
  WelcomeScreen,
  AboutAudrey,
  AsSeenOn,
  HowItWorks,
} from '../pageSection/index'

import { Layout } from '../components'

const IndexPage = () => (
  <Layout>
    <WelcomeScreen />
    <AboutAudrey />
    <AsSeenOn />
    <HowItWorks />
  </Layout>
)

export default IndexPage
