import React from 'react'

import { TextBox, Layout } from '../../components/'

const Story = () => {
  return (
    <Layout>
      <h1 className="f2 pink tc montserrat mb3 mt4">Our Why</h1>
      <TextBox>
        We passionately believe that by connecting people to read aloud
        together, Audrey can help to build relationships, remind us how much
        more we have in common than divides us, and create a more compassionate
        world.
      </TextBox>

      <TextBox>
        The shared experience of reading aloud together enables us to reflect on
        the human condition, stirs empathy and encourages conversations.
      </TextBox>

      <TextBox>
        Reading aloud together moves us to talk about our own stories and
        emotions and develop a real sense of connectedness with others.
      </TextBox>
      <TextBox>
        Reading aloud together can expose us to new ideas and help us to see
        things from another’s viewpoint. It teaches the value of listening.
      </TextBox>
      <TextBox>
        Audrey is founded upon the belief that the simple act of reading aloud
        with someone else can inspire us, help us to focus on what’s important
        to us, and make a meaningful difference in our everyday lives.
      </TextBox>
    </Layout>
  )
}

export default Story
