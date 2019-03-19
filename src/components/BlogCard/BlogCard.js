import React from 'react'
import { MainDiv } from './BlogCard.style'
import { Button } from '../index.js'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

const BlogCard = (props) => {
    return (
      <MainDiv>
        <article>
        <p>
          <Link to = {props.link}> {props.title}</Link>
          <span> &bull; </span> <br/>
          <span>
                    {props.date}
                  </span>
                  </p>
          <p style={{ fontSize: '16px' }}> {props.excerpt}
          <br />
            <br />
            <Link style={{ textDecoration: 'none' }} to = {props.link}>
            <Button style="blog"> Keep Reading →</Button>

                  </Link>
          </p>
        </article>
      </MainDiv>
    )
}

BlogCard.propTypes = {
  link: PropTypes.object,
  title: PropTypes.object,
  date: PropTypes.object,
  excerpt: PropTypes.object
}
export default BlogCard
