import React from 'react'
import { styled } from 'styled-components'
import { primaryColor, red, white } from '../utils/color';
const ButtonContainer = styled.button`
  border: none;
  padding: 10px;
  margin: 10px;
  background: ${(props) => props?.backGround};
  color: ${(props) => props?.color};
  text-decoration: "none";
  border-radius: 5px;
  cursor: pointer;
`; 
const Button = (props) => {
    const { title, backGround,color,onClick,isDisabled } = props;
  return (
    <ButtonContainer
      backGround={isDisabled ? red : backGround}
      color={color}
      onClick={onClick}
      disabled={isDisabled}
    >
      {title}
    </ButtonContainer>
  );
}

Button.defaultProps = {
  backGround: primaryColor,
  color: white,
};


export default Button;
