import React from 'react'

import { TextBox, Layout } from '../../components/'

const Story = () => {
  return (
    <Layout>
      <h1 className="f2 pink tc montserrat mb3 mt4">Our Story</h1>
      <TextBox>
        Audrey is based in London England, where I saw the benefits of
        peer-to-peer discussion when I used to be a high school teacher.
      </TextBox>

      <TextBox>
        I&apos;ve always been interested in literacy as a subject are and this,
        plus my interest in using technology for worthwhile causes, lead me to
        create Audrey. Audrey started in 2017 and has connected people from X
        amount of countries across the world.
      </TextBox>

      <TextBox>
        We look forward to you becoming a part of our community and ultimately
        our story.
      </TextBox>
    </Layout>
  )
}

export default Story
