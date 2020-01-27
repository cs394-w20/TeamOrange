import React, { useContext } from 'react';
import { Header, Segment, Button, Grid, Form } from 'semantic-ui-react';
import { WorkoutContext } from '../context';
import { MINUTES, SECONDS } from '../constants';
import Timer from 'react-compound-timer';
import { getNodeText } from '@testing-library/react';

const StartButton = ({ start, pause, resume, getTimerState, getTime }) => {
  const status = getTimerState();
  const time = getTime();
  console.log(status)
  return (
    <Button
      circular
      floated='right'
      disabled={time === 0}
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

const ResetButton = ({getTimerState, stop, getTime }) => {
  const status = getTimerState();
  const time = getTime();
  return (
    <Button
      floated='left'
      circular
      disabled={status === "STOPPED" | time === 0}
      negative
      onClick={stop}
      content={"RESET"}
    />
  )
};

const TimePicker = ({ setTime, getTimerState, getTime }) => {
  const status = getTimerState()
  const currTime = getTime()

  return (
    status === "STOPPED" | status === "INITED" ?
    <Form>
      <Form.Group>
        <Form.Dropdown 
          label="Minutes"
          selection
          compact
          placeholder="0"
          options={MINUTES}
          onChange={(e, { value }) => {
            const seconds = currTime % 60000
            setTime(seconds + value);
          }}
        />
        <Form.Dropdown
          label="Seconds"
          compact
          selection
          placeholder="0"
          options={SECONDS}
          onChange={(e, { value }) => {
            const seconds = currTime % 60000
            setTime(currTime - seconds + value)
          }}
        />
      </Form.Group>
    </Form>
    : null
  )
}


const CountdownTimer = () => {
  const workoutContext = useContext(WorkoutContext);
  const { countdown, setCountdown } = workoutContext;
  console.log("COUNTDOWN", countdown)
  return (
    <Timer
      formatValue={x => `${(x < 10 ? `0${x}` : x)}`}
      direction="backward"
      initialTime={countdown}
      startImmediately={false}
    >
      {({getTime, getTimerState, start, resume, pause, stop, setTime }) => (
        <Grid centered columns={2}>
          <Grid.Row>
            <Segment color={getTime() === 0 ? "red" : "green"}>
              <Header style={{ fontSize: "100px" }} >
                <Timer.Minutes/>:<Timer.Seconds/>
              </Header>
              <ResetButton
                setCountdown={setCountdown}
                stop={() => {stop(); setTime(0);}}
                getTimerState={getTimerState}
                getTime={getTime}
              />
              <StartButton 
                getTimerState={getTimerState} 
                getTime={getTime}
                start={start}
                pause={pause}
                resume={resume}
              />
            </Segment>
          </Grid.Row>
          <Grid.Row>
            <TimePicker 
              getTime={getTime}
              setTime={setTime}
              getTimerState={getTimerState}
            />
          </Grid.Row>
        </Grid>
      )}
    </Timer>
  )
};

export default CountdownTimer;