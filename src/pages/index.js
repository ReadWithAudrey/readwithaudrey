import React from 'react'
import {
  WelcomeScreen,
  AboutAudrey,
  AsSeenOn,
  HowItWorks,
  Examples,
  Testimonials,
} from '../pageSections/index'

import { HomepageLayout } from '../components'

const IndexPage = () => (
  <HomepageLayout>
    <WelcomeScreen />
    <AboutAudrey />
    <AsSeenOn />
    <HowItWorks />
    <Examples />
    <Testimonials />
  </HomepageLayout>
)

export default IndexPage
