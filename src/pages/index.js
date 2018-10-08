import React from 'react'
import { Link } from 'gatsby'

import 'normalize.css'; // css reset stylesheet
import 'tachyons'; // tachyons css


import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Read Aloud Together</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/Form1/">Sign up now</Link>
  </Layout>
)

export default IndexPage
