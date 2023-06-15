import React from 'react';
import styled, { css, keyframes } from 'styled-components';

interface CellProps {
  cellSideWidth: string;
  green?: boolean;
  yellow?: boolean;
  grey?: boolean;
  children: React.ReactNode;
}

const rotateAnimation = keyframes`
  from {
    transform: rotateY(180deg);
  }
  to {
    transform: rotateY(0deg);
  }
`;

const StyledCell = styled.div<CellProps>`
  width: ${props => props.cellSideWidth};
  height: ${props => props.cellSideWidth};
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5em;
  font-weight: 500;
  border-radius: 4px;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 2em;
  }

  ${props =>
    props.green &&
    css`
      background-color: green;
      color: white;
      transform: rotateX('180deg');
      animation-name: ${rotateAnimation};
      animation-duration: 1s;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
    `}

  ${props =>
    props.grey &&
    css`
      background-color: grey;
      color: white;
      transform: rotateX('180deg');
      animation-name: ${rotateAnimation};
      animation-duration: 1s;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
    `}

  ${props =>
    props.yellow &&
    css`
      background-color: orange;
      color: white;
      transform: rotateX('180deg');
      animation-name: ${rotateAnimation};
      animation-duration: 1s;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
    `}
`;

export default function Cell({ children, green, yellow, grey, cellSideWidth }: CellProps) {
  return (
    <StyledCell green={green} yellow={yellow} grey={grey} cellSideWidth={cellSideWidth}>
      {children}
    </StyledCell>
  );
}
