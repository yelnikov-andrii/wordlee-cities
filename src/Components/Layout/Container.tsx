import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
`
interface Props {
  children: React.ReactNode;
}

export default function Container({ children } : Props ) {
  return (
    <StyledContainer>
        {children}
    </StyledContainer>
  )
}
