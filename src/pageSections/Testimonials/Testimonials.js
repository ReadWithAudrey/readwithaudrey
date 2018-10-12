import React from 'react'
import StyledTestimonials from './Testimonials.style'
import { Button, TextBox } from '../../components/index'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Testimonials = () => (
  <StyledTestimonials>
    <h1 className="f2 pink tc">What our community are saying</h1>
    <TextBox>
      &quot;The reading sessions are getting longer each week because we find
      that there&apos;s so much to talk about!&quot; Cristina, Sao Paulo.
    </TextBox>

    <TextBox>
      &quot;I like the fact that I can talk about the book with a person that I
      don&apos;t know - I can be honest and don&apos;t feel like I need to
      impress anyone.&quot; Shreya, Bangalore.
    </TextBox>

    <TextBox>
      &quot;You’re not only discovering new books, you’re having a chance to
      look at the book from a completely different perspective&quot;. Matt,
      London.
    </TextBox>
    <TextBox>
      &quot;I loved my experience with Sara and I think she would agree that
      we’ve bonded in a very strong way. We’ve kept in touch&quot;. Maria,
      Mexico City.
    </TextBox>

    <TextBox>
      &quot;Things are going great and I am enjoying the reading sessions. I
      think we will be ready this week for book #3 if you can believe it!&quot;
      Stefanie, Chicago.
    </TextBox>

    <p className="f4 tc">
      Every week people are reading to each other all around the world.
    </p>
    <p className="f4 tc">Are you ready to join the Audrey community?</p>
    <Link to="/Form1/" className="no-underline white w-100">
      <Button type="register">Get started</Button>
    </Link>
  </StyledTestimonials>
)

Testimonials.propTypes = {
  siteTitle: PropTypes.string,
}

export default Testimonials
