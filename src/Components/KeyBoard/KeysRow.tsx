import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const StyledRow = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export default function KeysRow({ children, lettersNotFound }: any) {
  return (
    <StyledRow>
      { children }
    </StyledRow>
  )
}
