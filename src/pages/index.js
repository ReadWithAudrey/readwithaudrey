import React from 'react'
import {
  WelcomeScreen,
  AsSeenOn,
  HowItWorks,
  Examples,
  Testimonials,
} from '../pageSections/index'

import { HomepageLayout } from '../components'

const IndexPage = () => (
  <HomepageLayout>
    <WelcomeScreen />
    <HowItWorks />
    <AsSeenOn />
    <Examples />
    <Testimonials />
  </HomepageLayout>
)

export default IndexPage
