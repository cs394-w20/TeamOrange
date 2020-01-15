import React, { useContext } from 'react';
import { Header, Segment, Button } from 'semantic-ui-react';
import { WorkoutContext } from '../context';
import Timer from 'react-compound-timer';

const StartButton = ({ start, pause, resume, getTimerState, getTime }) => {
  const status = getTimerState();
  const time = getTime();
  console.log(status)
  return (
    <Button
      disabled={time === 0}
      floated="right"
      positive
      onClick={
        status==="STOPPED" | status === "INITED" ? 
        start : (status === "PAUSED" ? resume : pause)
      }
    >
      {status === "STOPPED" | status === "INITED" ? "START" : (status === "PAUSED" ? "RESUME" : "PAUSE")}
    </Button>
  )
};

const CancelButton = ({getTimerState, stop}) => {
  const status = getTimerState();

  return (
    <Button
      disabled={status === "STOPPED" | status === "INITED"}
      floated="left"
      negative
      onClick={stop}
      content={"CANCEL"}
    />
  )
};


const CountdownTimer = () => {
  const workoutContext = useContext(WorkoutContext);
  const { countdown, setCountdown } = workoutContext;

  return (
    <Timer
      formatValue={x => `${(x < 10 ? `0${x}` : x)}`}
      direction="backward"
      initialTime={countdown}
      startImmediately={false}
      onStart={() => setCountdown(0)}
    >
      {({getTime, getTimerState, start, resume, pause, stop}) => (
        <Segment color={getTime() === 0 ? "red" : "green"}>
          <Header style={{ fontSize: "100px" }} >
            <Timer.Minutes/>:<Timer.Seconds/>
          </Header>
          <CancelButton
            setCountdown={setCountdown}
            stop={stop}
            getTimerState={getTimerState}
          />
          <StartButton 
            getTimerState={getTimerState} 
            getTime={getTime}
            start={start}
            pause={pause}
            resume={resume}
          />
        </Segment>
      )}
    </Timer>
  )
};

export default CountdownTimer;