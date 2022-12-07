import { useEffect, useState, useRef } from 'react';
import { useRecoilValue } from 'recoil';

import { ColorState, TimerState, TimerTypeState} from '../../recoil/store';

import {
  ProgressBar,
  TimerBackgroundDark,
  TimerButton,
  TimerContainer,
  TimerContent,
  TimerRingGradient,
} from './timer.styles';

function Timer() {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [status, setStatus] = useState('paused');
  
  const timerType = useRecoilValue(TimerTypeState);
  const timers = useRecoilValue(TimerState);
  const color = useRecoilValue(ColorState);

  const interval = useRef();
  const progress = useRef(1);

  const convertSecondsToTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const changeStatus = () => {
    if (status === 'paused') setStatus('active');
    else if (status === 'active') setStatus('paused');
    else if (status === 'restart') {
      setStatus('paused');
      setTimeRemaining(timers[timerType]);
      progress.current = 1;
    }
    else console.log('Invalid timer status');
  }
  
  const setStatusText = () => {
    switch (status) {
      case 'paused':
        return 'start';
      case 'active':
        return 'pause';
      case 'restart':
        return 'restart';
      default:
        return '';
    }
  }

  // Pause and change timer values when the timer setting is changed
  useEffect(() => {
    setTimeRemaining(timers[timerType]);
    setStatus('paused');
  }, [timers]);
  

  // Decrement time every second if status is active.
  // Set status to 'reset' when timer reaches 0.
  // Pause timer otherwise
  useEffect(() => {
    if (status === 'active' && timeRemaining > 0) {
      interval.current = setInterval(() => {
        setTimeRemaining(timeRemaining - 1);
        progress.current = (timeRemaining - 1) / timers[timerType]
      }, 1000);
    }
    else if (status === 'active' && timeRemaining === 0) {
      setStatus('restart');
    } else {
      clearInterval(interval.current)
    }
    return () => clearInterval(interval.current);
  }, [status, timeRemaining]);


  // Reset and pause timer when the type is changed
  useEffect(() => {
    if (status === 'active') {
      setStatus('paused');
      clearInterval(interval.current);
    }
    progress.current = 1;
    setTimeRemaining(timers[timerType]);
  }, [timerType]);


  return (
    <TimerContainer>
      <TimerRingGradient>
        <TimerBackgroundDark>
          <ProgressBar
            color={color.regular}
            progress={progress.current}>
            <circle />
          </ProgressBar>

          <TimerContent>
            <h1>{convertSecondsToTime(timeRemaining)}</h1>
            <TimerButton
              color={color.regular}
              onClick={() => changeStatus()}
            >
              <h3>{setStatusText()}</h3>
            </TimerButton>
          </TimerContent>
          
        </TimerBackgroundDark>
      </TimerRingGradient>
    </TimerContainer>
  );
}

export default Timer;
