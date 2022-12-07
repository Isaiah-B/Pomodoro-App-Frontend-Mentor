import styled from 'styled-components';

export const TimerSelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  width: 37.3rem;
  height: 6.3rem;
  border-radius: 32px;
  padding: 0 2.1rem 0 2.4rem;
  background-color: hsl(234, 39%, 14%);

  @media (max-width: 27em) {
    width: 32.7rem;
  }
`;

export const TimerSelectorButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  height: 100%;
  width: 27%;
  background: none;
  border: none;
  cursor: pointer;
  
  font-family: inherit;
  color: hsla(227, 100%, 92%, 0.4);

  &:hover {
    color: hsl(227, 100%, 92%);
  }

  &.selected {
    color: hsl(235, 35%, 18%);
  }
`;

export const TimerSelectorHighlight = styled.div`
  position: absolute;
  z-index: 0;

  width: 12rem;
  height: 4.8rem;
  border-radius: 27px;
  transition: all 0.3s;

  background-color: ${({ state }) => state.color.regular};
  
  [data-state='pomodoro'] > & {
    left: 7px;
  }
  [data-state='short'] > & {
    left: 127px;
  }
  [data-state='long'] > & {
    left: 246px;
  }

  @media (max-width: 27em) {
    width: 10.6rem;

  [data-state='short'] > & {
  left: 112px;
  }

  [data-state='long'] > & {
    left: 215px;
  }
  }
`;
