import React, { useEffect } from 'react';
import { Cell } from './Cell';

export const Row: React.FC <any> = ({ word, guessedWord, show, setLetters }) => {
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
    lettersNotFound.push(word[index]);
  }

  useEffect(() => {
    if (show === true) {
      setLetters(lettersNotFound);
    }
  }, [show])

  return (
    <div className='row'>
      {arr.map((elem: string, index: number) => (
        <Cell
          key={elem + index}
          letter={word?.slice(index, index + 1) || ''}
          green={show && green.includes(index)  ? true : false}
          yellow={(show && word[index] !== guessedWord[index] && yellow.includes(index)) ? true : false}
          grey={show && grey.includes(index)  ? true : false}
        />
      ))}
    </div>
  );
};

