import React from 'react'
import {
  WelcomeScreen,
  AboutAudrey,
  AsSeenOn,
  HowItWorks,
  Examples,
} from '../pageSections/index'

import { HomepageLayout } from '../components'

const IndexPage = () => (
  <HomepageLayout>
    <WelcomeScreen />
    <AboutAudrey />
    <AsSeenOn />
    <HowItWorks />
    <Examples />
  </HomepageLayout>
)

export default IndexPage
