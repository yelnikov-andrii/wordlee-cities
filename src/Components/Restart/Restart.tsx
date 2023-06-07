import React from 'react'
import styled from 'styled-components'

const StyledRestart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 10px 0;
`
interface Props {
  children: React.ReactNode;
  click: () => void;
}

export default function Restart( { children, click }: Props) {
  return (
    <StyledRestart onClick={click}>
      { children }
    </StyledRestart>
  )
}
