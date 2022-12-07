import styled from 'styled-components';
import { ReactComponent as LogoSVG } from './assets/logo.svg';
import { TimerSelectContainer } from './components/timer-select/timer-select.styles';
import { TimerContainer } from './components/timer/timer.styles';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  margin: 0 auto;
  width: 60rem;
  height: 100%;

  @media (max-width: 38em) {
    width: 100%;
  }
  
  ${TimerSelectContainer} {
    margin-bottom: 4.5rem;
  }

  ${TimerContainer} {
    margin-bottom: 6.4rem;
  }
`;

export const Logo = styled(LogoSVG)`
  margin-bottom: 4.8rem;

  @media (max-width: 27em) {
    transform: scale(0.8);
  }
`;

export const SettingsButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  
  &:hover path {
    opacity: 1;
  }
`;
