import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Text from "../components/Text";
import Button from "../components/Button";
import { blue1, red } from "../utils/color";
import Input from "../components/Input";
const Container = styled.div`
  margin: 0px 100px;
`;

const Timer = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 10,
  });

  const [buttonType, setButtonType] = useState({
    start: false,
    end: false,
  });

  const { hours, minutes, seconds } = time;
  const { start, end } = buttonType;

  const changeButtonHandler = (buttonType) => {
    if (buttonType === "start") {
      setButtonType((props) => {
        return {
          ...props,
          start: true,
        };
      });
    }
    if (buttonType === "end") {
      setButtonType((props) => {
        return {
          ...props,
          start: false,
          end: true,
        };
      });
      setTime({ hours: 0, minutes: 0, seconds: 0 });
    }
  };

  const changeHandler = (event)=>{
    // const {name,value} = event;
    // console.log(event,"=-=-=",value,"-=-=",name)
 
  }

  useEffect(() => {
    let isInterval = null;
    const autoStop = () => {
      clearInterval(isInterval);
      return 0;
    };
    if (start) {
      isInterval = setInterval(() => {
        setTime((props) => {
          return {
            ...props,
            seconds: props?.seconds > 0 ? props.seconds - 1 : autoStop(),
          };
        });
      }, 1000);
    }

    return () => {
      clearInterval(isInterval);
    };
  }, [start,end]);

  useEffect(() => {
    if(seconds>59)
    {
      setTime({ ...time, minutes: minutes + 1 });
    }
    if(minutes>59)
    {
      setTime({ ...time, hours: hours + 1 });
    }
  }, [seconds, minutes, hours]);

  return (
    <Container>
      <Text content="Timer" />
      {seconds > !0 ? (
        <>
          <Input
            width="15px"
            backGround={blue1}
            onChange={(e)=>changeHandler(e)}
            name="hours"
          />
          :
          <Input
            width="15px"
            backGround={blue1}
            onChange={changeHandler}
            name="minutes"
          />
          :
          <Input
            width="15px"
            backGround={blue1}
            onChange={changeHandler}
            name="seconds"
          />
        </>
      ) : (
        <>
          {hours < 10 ? <>{`0${hours}`}</> : hours} :{" "}
          {minutes < 10 ? <>{`0${minutes}`}</> : minutes} :{" "}
          {seconds < 10 ? <>{`0${seconds}`}</> : seconds}
        </>
      )}
      <Button title="Start" onClick={() => changeButtonHandler("start")} />
      <Button
        title="End"
        backGround={red}
        onClick={() => changeButtonHandler("end")}
      />
    </Container>
  );
};

export default Timer;
