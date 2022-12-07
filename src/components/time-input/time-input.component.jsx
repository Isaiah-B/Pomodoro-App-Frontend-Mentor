import { useRecoilState } from 'recoil';

import { SettingsTimerState } from '../../recoil/store';

import { ReactComponent as ArrowUp } from '../../assets/icon-arrow-up.svg';
import { ReactComponent as ArrowDown } from '../../assets/icon-arrow-down.svg';

import { ArrowButton, InputArrows, InputWrapper, TimeInputContainer } from './time-input.styles';

function TimeInput({ name, type, min, max }) {
  const [time, setTime] = useRecoilState(SettingsTimerState);

  const increment = () => {
    if (time[type] < max * 60) {
      setTime({ ...time, [type]: time[type] + 5 * 60 });
    }
  }
  
  const decrement = () => {
    if (time[type] > min * 60) {
      setTime({ ...time, [type]: time[type] - 5 * 60 });
    }
  }
  
  return (
    <TimeInputContainer>
      <span>{name}</span>
      <InputWrapper>
        <input type="number" value={time[type] / 60} min={min} onChange={() => {}} />

        <InputArrows>
          <ArrowButton onClick={increment}>
            <ArrowUp />
          </ArrowButton>

          <ArrowButton onClick={decrement}>
            <ArrowDown />
          </ArrowButton>
        </InputArrows>
      </InputWrapper>
    </TimeInputContainer>
  );
}

export default TimeInput;