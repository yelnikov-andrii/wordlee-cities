import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    padding: 20px 0;
`
interface Props {
    children: React.ReactNode;
}

export default function Header({ children }: Props) {
  return (
    <StyledHeader>
        { children }
    </StyledHeader>
  )
}
