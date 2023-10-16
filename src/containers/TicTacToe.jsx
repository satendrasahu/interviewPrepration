import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import Button from '../components/Button';
import Text from '../components/Text';
const Container = styled.div`
  margin: 0px 100px;
`;
const Row = styled.div``;
const TicTacToe = () => {
    const [status, setStatus] = useState("");
    const [isButtonClick, setIsButtonClick] = useState(false);
    const [buttonsValues, setButtonsValues] = useState([
      10, 10, 10, 10, 10, 10, 10, 10, 10,
    ]);

    const buttonHandler = (ind, btnValues) => {
        const tempArr = [...buttonsValues]
        tempArr.splice(ind, 1, btnValues);
        setButtonsValues(tempArr);
        setIsButtonClick(!isButtonClick);
    };
    
    // console.log(buttonsValues)

    const whoIsWinner = () =>{
        if (
          (buttonsValues[0] === "O" &&
            buttonsValues[1] === "O" &&
            buttonsValues[2] === "O") ||
          (buttonsValues[3] === "O" &&
            buttonsValues[4] === "O" &&
            buttonsValues[5] === "O") ||
          (buttonsValues[6] === "O" &&
            buttonsValues[7] === "O" &&
            buttonsValues[8] === "O") ||
          (buttonsValues[0] === "O" &&
            buttonsValues[3] === "O" &&
            buttonsValues[6] === "O") ||
          (buttonsValues[1] === "O" &&
            buttonsValues[4] === "O" &&
            buttonsValues[7] === "O") ||
          (buttonsValues[2] === "O" &&
            buttonsValues[5] === "O" &&
            buttonsValues[8] === "O") ||
          (buttonsValues[0] === "O" &&
            buttonsValues[4] === "O" &&
            buttonsValues[8] === "O") ||
          (buttonsValues[2] === "O" &&
            buttonsValues[4] === "O" &&
            buttonsValues[6] === "O")
        ) {
          setStatus("O is Winner");
        } else if (
          (buttonsValues[0] === "X" &&
            buttonsValues[1] === "X" &&
            buttonsValues[2] === "X") ||
          (buttonsValues[3] === "X" &&
            buttonsValues[4] === "X" &&
            buttonsValues[5] === "X") ||
          (buttonsValues[6] === "X" &&
            buttonsValues[7] === "X" &&
            buttonsValues[8] === "X") ||
          (buttonsValues[0] === "X" &&
            buttonsValues[3] === "X" &&
            buttonsValues[6] === "X") ||
          (buttonsValues[1] === "X" &&
            buttonsValues[4] === "X" &&
            buttonsValues[7] === "X") ||
          (buttonsValues[2] === "X" &&
            buttonsValues[5] === "X" &&
            buttonsValues[8] === "X") ||
          (buttonsValues[0] === "X" &&
            buttonsValues[4] === "X" &&
            buttonsValues[8] === "X") ||
          (buttonsValues[2] === "X" &&
            buttonsValues[4] === "X" &&
            buttonsValues[6] === "X")
        ) {
          setStatus("X is winner");
        } else {
          setStatus("Match has Draw");
        }
    }

    useEffect(() => whoIsWinner(), [...buttonsValues]);
  return (
    <Container>
      <Text content={status} />
      <Row>
        <Button
          title={buttonsValues[0] === 10 ? "" : buttonsValues[0]}
          onClick={() => {
            buttonHandler(0, isButtonClick ? "O" : "X");
          }}
          //   isDisabled={true}
        />
        <Button
          title={buttonsValues[1] === 10 ? "" : buttonsValues[1]}
          onClick={() => buttonHandler(1, isButtonClick ? "O" : "X")}
        />
        <Button
          title={buttonsValues[2] === 10 ? "" : buttonsValues[2]}
          onClick={() => buttonHandler(2, isButtonClick ? "O" : "X")}
        />
      </Row>
      <Row>
        <Button
          title={buttonsValues[3] === 10 ? "" : buttonsValues[3]}
          onClick={() => buttonHandler(3, isButtonClick ? "O" : "X")}
        />
        <Button
          title={buttonsValues[4] === 10 ? "" : buttonsValues[4]}
          onClick={() => buttonHandler(4, isButtonClick ? "O" : "X")}
        />
        <Button
          title={buttonsValues[5] === 10 ? "" : buttonsValues[5]}
          onClick={() => buttonHandler(5, isButtonClick ? "O" : "X")}
        />
      </Row>
      <Row>
        <Button
          title={buttonsValues[6] === 10 ? "" : buttonsValues[6]}
          onClick={() => buttonHandler(6, isButtonClick ? "O" : "X")}
        />
        <Button
          title={buttonsValues[7] === 10 ? "" : buttonsValues[7]}
          onClick={() => buttonHandler(7, isButtonClick ? "O" : "X")}
        />
        <Button
          title={buttonsValues[8] === 10 ? "" : buttonsValues[8]}
          onClick={() => buttonHandler(8, isButtonClick ? "O" : "X")}
        />
      </Row>
    </Container>
  );
}

export default TicTacToe
