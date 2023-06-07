import React from 'react';
import styled from 'styled-components';

const StyledMessage = styled.div`
    height: 30px;
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: 800;
    margin: 0 0 10px 0;
`

interface Props {
    children: React.ReactNode;
}

export default function Message({ children }: Props) {
  return (
    <StyledMessage>
        { children }
    </StyledMessage>
  )
}
