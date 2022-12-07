import { useRecoilState, useRecoilValue } from 'recoil';

import { ColorState, TimerTypeState } from '../../recoil/store';

import {
  TimerSelectContainer,
  TimerSelectorButton,
  TimerSelectorHighlight
} from './timer-select.styles';

function TimerSelect() {
  const color = useRecoilValue(ColorState);
  const [timerType, setTimerType] = useRecoilState(TimerTypeState);

  const state = { color, timerType };

  return (
    <TimerSelectContainer data-state={timerType}>
      <TimerSelectorButton 
        onClick={() => setTimerType('pomodoro')}
        className={`${timerType === 'pomodoro' ? 'selected' : ''}`}
      >
        <p>pomodoro</p>
      </TimerSelectorButton>

      <TimerSelectorButton 
        onClick={() => setTimerType('short')}
        className={`${timerType === 'short' ? 'selected' : ''}`}
      >
        <p>short break</p>
      </TimerSelectorButton>

      <TimerSelectorButton 
        onClick={() => setTimerType('long')}
        className={`${timerType === 'long' ? 'selected' : ''}`}
        >
          <p>long break</p>
      </TimerSelectorButton>

      <TimerSelectorHighlight state={state} />
    </TimerSelectContainer>
  );
}

export default TimerSelect;
