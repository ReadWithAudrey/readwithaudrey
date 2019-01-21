import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
} from 'react-share'
import facebook from '../../images/facebook.svg'
import email from '../../images/gmail.svg'
import twitter from '../../images/twitter.svg'

import { TextBox, Layout, Title } from '../../components/'

const ThankYou = ({ data }) => {
  const {
    header1,
    header2,
    p1,
    p2,
    p3,
    p4,
    shareUrl,
    twitterText,
    facebookText,
    emailBody,
    emailSubject,
  } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark
  return (
    <Layout>
      <Title>{header1}</Title>
      <div
        className="f4 mid-gray tc"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <h2 className="f2 pink tc montserrat mt5 mb4">{header2}</h2>
      <TextBox>{p1}</TextBox>
      <div
        id="social-logos"
        className="flex justify-around w-100 flex-ns ph6-ns pv4"
      >
        <FacebookShareButton url={shareUrl} quote={facebookText}>
          <img
            src={facebook}
            alt="Facebook"
            className="small-icon mw-25 h3-ns"
          />
        </FacebookShareButton>
        <TwitterShareButton title={twitterText} url={shareUrl}>
          <img src={twitter} alt="Twitter" className="small-icon mw-25 h3-ns" />
        </TwitterShareButton>
        <EmailShareButton subject={emailSubject} body={emailBody}>
          <img src={email} alt="Email" className="small-icon mw-25 h3-ns" />
        </EmailShareButton>
      </div>
      <TextBox>{p2}</TextBox>
      <TextBox>{p3}</TextBox>
      <Link to="/">
        <TextBox>{p4}</TextBox>
      </Link>
    </Layout>
  )
}

ThankYou.propTypes = {
  data: PropTypes.object,
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { title: { eq: "Thank You" } }) {
      html
      frontmatter {
        header1
        header2
        p1
        p2
        p3
        p4
        shareUrl
        twitterText
        facebookText
        emailBody
        emailSubject
      }
    }
  }
`

export default ThankYou
