import styled, { css } from 'styled-components';

export const SelectorContainer = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  &::before {
    display: none;
  } 

  &:hover {
    &::before {
      content: '';
      display: block;
      position: absolute;

      width: 120%;
      height: 120%;
      border: 1px solid hsl(229, 52%, 96%);
      border-radius: 50%;
    }
  }
`;

export const FontSelectorButton = styled.button`
  ${SelectorContainer};
  background-color: hsl(227, 52%, 96%);

  
  span {
    font-family: ${({ font }) => font};
    font-weight: 700;
    font-size: 1.5rem;
    color: hsla(235, 35%, 18%, 0.73);
  }

  &.selected {
    background-color: hsl(234, 39%, 14%);
    
    span {
      color: hsl(0, 0%, 100%);
    }
  }
`;

export const ColorSelectorButton = styled.button`
  ${SelectorContainer}
  position: relative;
  background-color: ${({ color }) => color};

  ion-icon {
    display: none;
    font-size: 2.2rem;
  }

  &.selected ion-icon {
    display: block;
  }
`;

export const SelectorGroupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
`;
