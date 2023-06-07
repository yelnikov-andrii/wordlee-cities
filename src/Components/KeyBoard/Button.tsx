import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    children: string;
    click: (value?: string) => void;
    arrow?: boolean;
    lettersNotFound?: string[];
    keySize: string;
    notFound: boolean;
  }

const StyledButton = styled.button<ButtonProps>`
  width: ${props => props.keySize};
  min-width: max-content;
  height: ${props => props.keySize};
  font-weight: 500;
  font-size: 24px;
  background-color: ${props => (props.notFound ? 'gray' : '#fff')};
`;

export default function Button({ children, click, lettersNotFound, keySize }: any) {
  const notFound = lettersNotFound?.includes(children?.toUpperCase());

  return (
    <StyledButton
      click={click}
      onClick={(e) => {
        click(children);
      }}
      notFound={notFound}
      keySize={keySize}
    >
      {children}
    </StyledButton>
  );
}
