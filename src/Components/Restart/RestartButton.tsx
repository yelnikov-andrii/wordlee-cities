import React from 'react';
import Button from '../KeyBoard/Button';

interface Props {
    children: React.ReactNode;
    click: () => void;
}

export default function RestartButton({ children, click }: Props) {
  return (
    <Button click={click}>
        { children }
    </Button>
  )
}
