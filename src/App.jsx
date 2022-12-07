import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import {
  ColorState,
  FontState,
  SettingsColorState,
  SettingsFontState,
  SettingsTimerState,
  TimerState
} from './recoil/store';

import { ReactComponent as SettingsIcon } from './assets/icon-settings.svg';
import TimerSelect from "./components/timer-select/timer-select.component";
import Timer from "./components/timer/timer.component";
import Settings from "./components/settings/settings.component";

import { GlobalStyles } from "./index.styles";
import { Container, Logo, SettingsButton } from "./App.styles";

function App() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const setSettingsColor = useSetRecoilState(SettingsColorState);
  const setSettingsFont = useSetRecoilState(SettingsFontState);
  const setSettingsTimers = useSetRecoilState(SettingsTimerState);

  const timers = useRecoilValue(TimerState);
  const font = useRecoilValue(FontState);
  const color = useRecoilValue(ColorState);

  const styleState = { font, color };

  // Close settings menu without applying any changes.
  // Resets changed settings to those in place before
  const closeSettings = () => {
    setSettingsColor(color);
    setSettingsFont(font)
    setSettingsTimers(timers);
    setSettingsOpen(false);
  };
  
  // Close settings menu after changes are applied.
  // Does not reset any changes made
  const applyAndCloseSettings = () => {
    setSettingsOpen(false);
  };

  return (
    <>
      <GlobalStyles styles={styleState} />
      <Container>
        <Logo />
        <TimerSelect />
        <Timer />
        <SettingsButton onClick={() => setSettingsOpen(true)}>
          <SettingsIcon />
        </SettingsButton>
        <Settings
          isOpen={settingsOpen}
          handleClose={closeSettings}
          handleApply={applyAndCloseSettings}
        />
      </Container>
    </>
  );
}

export default App;
