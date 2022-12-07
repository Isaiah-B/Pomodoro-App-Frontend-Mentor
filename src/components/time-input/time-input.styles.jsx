import styled from 'styled-components';
import { bodyTextS } from '../../index.styles';

export const TimeInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  
  span {
    display: inline-block;
    ${bodyTextS};
    color: hsla(235, 35%, 18%, 0.4);
  }

  input {
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 1.6rem;
    background-color: hsl(229, 52%, 96%);

    font-family: inherit;
    font-weight: 700;
    line-height: 1.8rem;
    color: hsl(235, 35%, 18%);

    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }

  @media (max-width: 38em) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    
    input {
      width: 14rem;
      padding: 1.1rem;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const InputArrows = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  right: 1.5rem;
  top: 22%;
`;

export const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: none;
  padding: 0.4rem;
  cursor: pointer;
  
  &:hover path {
    stroke-opacity: 1;
  }
`;

