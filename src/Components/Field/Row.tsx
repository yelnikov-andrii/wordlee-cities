import React, { useEffect } from 'react';
import  Cell  from './Cell';
import styled from 'styled-components';

const StyledRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Row({ word, guessedWord, show, setLetters }: any) {
    const arr = guessedWord.toUpperCase().split('');

  const guessedArr = guessedWord.toUpperCase().split('');
  const wordArr = word.toUpperCase().split('');
  const green: any = [];
  const yellow: any = [];
  const grey: any = [];

  if (show === true) {
    for (let i = 0; i < guessedArr.length; i++) {
      if (guessedArr[i] === wordArr[i]) {
        green.push(i);
        guessedArr[i] = null;
        wordArr[i] = null;
      }
    }
  
    for (let i = 0; i < guessedArr.length; i++) {
      if (wordArr[i] !== null && guessedArr.includes(word[i])) {
        yellow.push(i);
        wordArr[i] = null;
        const index = guessedArr.findIndex((el: any) => el === word[i]);
        guessedArr[index] = null;
        continue;
      } 

      if (guessedArr[i] === wordArr[i]) {
        guessedArr[i] = null;
        wordArr[i] = null;
        continue;
      }

      grey.push(i)
    }
  }

  const lettersNotFound: any = [];

  for (let index of grey) {
    if (!guessedWord.toUpperCase().includes(word[index])) {
      lettersNotFound.push(word[index]);
    }
  }

  useEffect(() => {
    if (show === true) {
      setLetters(lettersNotFound);
    }
  }, [show]);

  return (
    <StyledRow>
        {arr.map((elem: string, index: number) => (
        <Cell
          key={elem + index}
          green={show && green.includes(index)  ? true : false}
          yellow={(show && word[index] !== guessedWord[index] && yellow.includes(index)) ? true : false}
          grey={show && grey.includes(index)  ? true : false}
          cellSideWidth={'50px'}
        >
            {word?.slice(index, index + 1) || ''}
        </Cell>
      ))}
    </StyledRow>
  )
}
