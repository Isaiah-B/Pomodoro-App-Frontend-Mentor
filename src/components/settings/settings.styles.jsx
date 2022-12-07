import styled from 'styled-components';
import { TimeInputContainer } from '../time-input/time-input.styles';

export const SettingsContainer = styled.div`  
  display: none;
  position: absolute;
  z-index: 100;
  
  width: 54rem;
  height: 49rem;
  
  &.open {
    display: block;
  }

  @media (max-width: 38em) {
    height: 55rem;
    width: 100%;
  }
`;

export const SettingsContent = styled.div`
  font-family: ${({ font }) => font};

  width: 100%;
  height: 100%;
  border-radius: 25px;
  background-color: hsl(0, 0%, 100%);

  &::before {
    content: '';
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    
    width: 100vw;
    height: 100vh;

    background: hsl(0, 0%, 0%);
    opacity: 0.2;
  }
`

// ************* HEADER *************//
export const SettingsHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3.4rem 4rem 3.1rem;
  border-bottom: 1px solid hsl(0, 2%, 89%);

  h2 { color: hsl(234, 39%, 14%); }

  @media (max-width: 27em) {
    padding: 2.4rem;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:hover path {
    opacity: 1;
  }  
`;

// ************* CONTENT *************//
export const SettingsBody = styled.div`
  margin: 0 auto;
  padding: 2.4rem 4rem;

  @media (max-width: 27em) {
    padding: 2.4rem;
  }

  h4 {
    color: hsl(234, 39%, 14%);
  }
`;


// ******* TIME SECTION *******//
export const SectionTime = styled.section`
  border-bottom: 1px solid hsl(0, 2%, 89%);
  padding-bottom: 2.4rem;

  h4 {
    margin-bottom: 2.2rem;
    text-align: center;

    @media (max-width: 38em) {
      margin-bottom: 1.8rem;
    }
  }
`;

export const Timers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${TimeInputContainer} {
    width: 30.5%;

    @media (max-width: 38em) {
      width: 100%;
    }
  }

  @media (max-width: 38em) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

// ******* FONT SECTION *******//
export const SectionFont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2.4rem 0;
  border-bottom: 1px solid hsl(0, 2%, 89%);

  @media (max-width: 27em) {
    flex-direction: column;
    gap: 1.8rem;
  }
`;

// ******* COLOR SECTION *******//
export const SectionColor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2.4rem 0;

  @media (max-width: 27em) {
    flex-direction: column;
    gap: 1.8rem;
  }
`

// ******* APPLY BUTTON *******//
export const SettingsApplyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  
  h3 {
    font-family: inherit;
    text-transform: none;
    color: hsl(0, 0%, 100%);
  }

  border: none;
  border-radius: 26px;
  padding: 1.6rem 4.6rem;
  background-color: ${({ color }) => color.regular};
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${({ color }) => color.hover};
  }
`;
