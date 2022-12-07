import { useRecoilState } from 'recoil';

import { SettingsFontState } from '../../recoil/store';
import { FONT_STATE_TYPES } from '../../recoil/types';

import { FontSelectorButton, SelectorGroupContainer } from './selector-group.styles';

function FontSelector({ font }) {
  const [settingsFont, setSettingsFont] = useRecoilState(SettingsFontState);

  return (
    <FontSelectorButton
      font={font}
      className={font === settingsFont ? 'selected' : ''}
      onClick={() => setSettingsFont(font)}
    >
      <span>Aa</span>
    </FontSelectorButton>
  );
}

function FontSelectorGroup() {
  return (
    <SelectorGroupContainer>
      <FontSelector font={FONT_STATE_TYPES.KUMBH_SANS} />
      <FontSelector font={FONT_STATE_TYPES.ROBOTO_SLAB} />
      <FontSelector font={FONT_STATE_TYPES.SPACE_MONO} />
    </SelectorGroupContainer>
  );
}

export default FontSelectorGroup;
