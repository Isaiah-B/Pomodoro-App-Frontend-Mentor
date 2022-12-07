import { useRecoilState } from 'recoil';

import { SettingsColorState } from '../../recoil/store';
import { COLOR_STATE_TYPES } from '../../recoil/types';

import { ColorSelectorButton, SelectorGroupContainer } from './selector-group.styles';

function ColorSelector({ color }) {
  const [settingsColor, setSettingsColor] = useRecoilState(SettingsColorState);

  return (
    <ColorSelectorButton
      color={color.regular}
      className={color.regular === settingsColor.regular ? 'selected' : ''}
      onClick={() => setSettingsColor(color)}
    >
    <ion-icon name="checkmark-outline"></ion-icon>
    </ColorSelectorButton>
  );
}

function ColorSelectorGroup() {
  return (
    <SelectorGroupContainer>
      <ColorSelector color={COLOR_STATE_TYPES.RED} />
      <ColorSelector color={COLOR_STATE_TYPES.BLUE} />
      <ColorSelector color={COLOR_STATE_TYPES.PURPLE} />    
    </SelectorGroupContainer>
  );
}

export default ColorSelectorGroup;
