import styled from 'styled-components';

export const TimerContainer = styled.div`
  width: 41rem;
  height: 41rem;

  @media (max-width: 27em) {
    width: 30rem;
    height: 30rem;
  }
`;

export const TimerRingGradient = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  border-radius: 50%;

  background: linear-gradient(315deg, hsl(234, 33%, 27%), hsl(235, 49%, 11%));

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    mix-blend-mode: lighten;
    box-shadow: -50px -50px 100px #272c5a, 50px 50px 100px #1e2248;
  }
`;

export const TimerBackgroundDark = styled.div`
  position: relative;
  width: 89.5%;
  height: 89.5%;
  border-radius: 50%;

  background-color: hsl(235, 39%, 14%);
`;


export const ProgressBar = styled.svg`
  width: 100%;
  height: 100%;

  circle {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
    transform-origin: center;
    transition: all 0.3s;

    fill: none;
    stroke: ${({ color }) => color};
    stroke-width: 11;
    stroke-dasharray: 1037px;
    stroke-dashoffset: calc((-${({ progress }) => progress} * 1037px) + 1037px);
    stroke-linecap: round;

    @media (max-width: 27em) {
      cx: 75;
      cy: 75;
      r: 120;
    }
  }
`;

export const TimerContent = styled.div`
  position: absolute;
  top: 32%;
  z-index: 5;
  
  width: 100%;
  text-align: center;
  
  h1 {
    margin-bottom: 0.3rem;
  }
`;

export const TimerButton = styled.button`
  background: none;
  border: none;
  padding: 1rem;
  cursor: pointer;
  color: hsl(227, 100%, 92%);
  
  h3 {
    letter-spacing: 15px;
    text-indent: 15px;
  }

  &:hover {
    color: ${({ color }) => color};
  }
`;
