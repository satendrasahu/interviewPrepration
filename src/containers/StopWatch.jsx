import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import Text from '../components/Text';
import Button from '../components/Button';
import { red } from '../utils/color';
const Container = styled.div`
  margin: 0px 100px;
`;

const StopWatch = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [buttonType, setButtonType] = useState({
    start: false,
    end: false,
    pause: false,
  });

  const { hours, minutes, seconds } = time;
  const { start, pause,end } = buttonType;

  const changeButton = (buttonType) => {
    if (buttonType === "start") {
      setButtonType((props) => {
        return {
          ...props,
          start: buttonType === "start",
        };
      });
    }

    if (buttonType === "pause") {
      setButtonType((props) => {
        return {
          ...props,
          pause: true,
        };
      });
    }

    if (buttonType === "resume") {
      setButtonType((props) => {
        return {
          ...props,
          pause: false,
        };
      });
    }

    if (buttonType === "end") {
      setButtonType((props) => {
        return {
          ...props,
          pause: false,
          start: false,
          end: true,
        };
      });

      setTime((props) => {
        return {
          ...props,
          seconds: 0,
          minutes: 0,
          hours: 0,
        };
      });
    }
  };
  useEffect(() => {
    let isInterval = null;
    if (start) {
      isInterval = setInterval(() => {
        setTime((props) => {
          return {
            ...props,
            seconds: props?.seconds < 59 ? props?.seconds + 1 : 0,
            minutes:
              props?.minutes < 59
                ? props?.seconds === 59
                  ? props?.minutes + 1
                  : props?.minutes
                : 0,
            hours:
              props?.hours < 59
                ? props?.minutes === 59
                  ? props?.hours + 1
                  : props?.hours
                : 0,
          };
        });
      }, 1000);
      if (pause) {
        clearInterval(isInterval);
      }
    }

    if (pause) {
      clearInterval(isInterval);
    }

    return () => {
      clearInterval(isInterval);
    };
  }, [start, pause]);

  return (
    <Container>
      <Text content="StopWatch" />
      {hours < 10 ? <>{`0${hours}`}</> : hours} :{" "}
      {minutes < 10 ? <>{`0${minutes}`}</> : minutes} :{" "}
      {seconds < 10 ? <>{`0${seconds}`}</> : seconds}
      <Button
        title={start ? (start && pause ? "Resume" : "Pause") : "Start"}
        onClick={() =>
          changeButton(start ? (start && pause ? "resume" : "pause") : "start")
        }
      />
      <Button
        title="End"
        backGround={red}
        onClick={() => changeButton("end")}
      />
    </Container>
  );
};

export default StopWatch;
