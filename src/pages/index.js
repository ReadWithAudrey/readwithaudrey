import React from 'react'
import { Link } from 'gatsby'


import {Layout} from '../components'

const IndexPage = () => (
  <Layout>
    <h1>Read Aloud Together</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/Form1/">Sign up now</Link>
  </Layout>
)

export default IndexPage
