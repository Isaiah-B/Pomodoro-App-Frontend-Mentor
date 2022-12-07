import { useRecoilValue, useSetRecoilState } from 'recoil';

import { ReactComponent as CloseSVG } from '../../assets/icon-close.svg';
import TimeInput from '../time-input/time-input.component';
import FontSelectorGroup from '../selector-group/font-selector-group.component';
import ColorSelectorGroup from '../selector-group/color-selector-group.component';

import {
  ColorState,
  FontState,
  SettingsColorState,
  SettingsFontState,
  SettingsTimerState,
  TimerState
} from '../../recoil/store';

import {
  CloseButton,
  SectionColor,
  SectionFont,
  SectionTime,
  SettingsApplyButton,
  SettingsBody,
  SettingsContainer,
  SettingsContent,
  SettingsHead,
  Timers
} from './settings.styles';

function Settings({ isOpen, handleClose, handleApply }) {
  const settingsColor = useRecoilValue(SettingsColorState);
  const settingsFont = useRecoilValue(SettingsFontState);
  const settingsTimers = useRecoilValue(SettingsTimerState);

  const setAppliedColor = useSetRecoilState(ColorState);
  const setAppliedFont = useSetRecoilState(FontState);
  const setAppliedTimers = useSetRecoilState(TimerState);

  // Apply changes made in settings and call function in
  // parent to close the menu
  const handleClickApply = () => {
    setAppliedColor(settingsColor);
    setAppliedFont(settingsFont);
    setAppliedTimers(settingsTimers);
    handleApply();
  };
  
  return (
    <SettingsContainer className={isOpen ? 'open' : ''}>
      <SettingsContent font={settingsFont}>
        <SettingsHead>
          <h2>Settings</h2>
          <CloseButton onClick={handleClose}>
            <CloseSVG />
          </CloseButton>
        </SettingsHead>

        <SettingsBody>
          <SectionTime>
            <h4>Time (Minutes)</h4>
            <Timers>
              <TimeInput name='pomodoro' type='pomodoro' min={25} max={60} />
              <TimeInput name='short break' type='short' min={5} max={60} />
              <TimeInput name='long break' type='long' min={15} max={60} />
            </Timers>
          </SectionTime>

          <SectionFont>
            <h4>Font</h4>
            <FontSelectorGroup />
          </SectionFont>

          <SectionColor>
            <h4>Color</h4>
            <ColorSelectorGroup />
          </SectionColor>
        </SettingsBody>

        <SettingsApplyButton 
          color={settingsColor}
          onClick={() => handleClickApply()}
        >
          <h3>Apply</h3>
        </SettingsApplyButton>
      </SettingsContent>
    </SettingsContainer>
  );
}

export default Settings;