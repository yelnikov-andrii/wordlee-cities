import classNames from 'classnames';
import React from 'react';

interface Props {
  letter: string;
  green: boolean;
  yellow: boolean;
  grey: boolean;
}

export const Cell: React.FC <Props> = ({ letter, green, yellow, grey }) => {
  return (
    <div className={classNames('cell', {
      'cell--green': green,
      'cell--yellow': yellow,
      'cell--grey': grey
    })}>
      {letter}
    </div>
  );
};

