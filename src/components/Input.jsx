import React from 'react'
import { styled } from 'styled-components';
import { blue1 } from '../utils/color';

const InputContainer = styled.input`
  padding: 5px;
  border-radius: 5px;
  width: ${(props) => props?.width};
  margin: 5px;
  border: none;
  outline: none;
  background: ${(props) => props?.backGround};
`;

const Input = (props) => {
  const { width, backGround, name, onChangeHandler, onChangeValue } = props;
  return (
    <InputContainer
      value={onChangeValue}
      onChange={onChangeHandler}
      width={width}
      backGround={backGround}
      name={name}
    />
  );
};


Input.defaultProps = {
  width: "auto",
  backGround: blue1,
};

export default Input
