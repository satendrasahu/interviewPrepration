import React from 'react'
import { styled } from 'styled-components'
import Button from '../components/Button';
const Continer = styled.div`
  marginleft: 100px;
`;
const Home = () => {
  return (
    <Continer>
      <Button title="Get Start" />
    </Continer>
  );
}

export default Home
