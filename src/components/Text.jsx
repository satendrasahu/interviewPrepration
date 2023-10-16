import React from 'react'
import { styled } from 'styled-components'
const TextContainer = styled.p``;

const Text = (props) => {
  const { content } = props;
  return <TextContainer>{content}</TextContainer>
}

export default Text
