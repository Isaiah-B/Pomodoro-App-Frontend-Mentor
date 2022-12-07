import { atom } from 'recoil';
import { FONT_STATE_TYPES, COLOR_STATE_TYPES } from './types';

export const FontState = atom({
  key: 'Font',
  default: FONT_STATE_TYPES.KUMBH_SANS
});

export const ColorState = atom({
  key: 'Color',
  default: COLOR_STATE_TYPES.RED,
});

export const SettingsFontState = atom({
  key: 'TempFont',
  default: FONT_STATE_TYPES.KUMBH_SANS
});

export const SettingsColorState = atom({
  key: 'TempColor',
  default: COLOR_STATE_TYPES.RED,
});

export const SettingsTimerState = atom({
  key: 'TempTimer',
  default: {
    pomodoro: 1500,
    short: 300,
    long: 900,
  }
});

export const TimerTypeState = atom({
  key: 'CurrentTimer',
  default: 'pomodoro',
});

export const TimerState = atom({
  key: 'Timers',
  default: {
    pomodoro: 1500,
    short: 300,
    long: 900,
  },
});