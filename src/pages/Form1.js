import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Form1 = () => (
  <Layout>
    <h1>This is p1 of the form</h1>
    <p>Please fill in the details</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Form1
