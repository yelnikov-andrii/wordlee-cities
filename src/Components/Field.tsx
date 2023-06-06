import React from 'react';
import { Row } from './Row';

interface Props {
  words: string[];
  guessedWord: string;
  word: string;
  attempt: number;
  setLetters: any;
}

export const Field: React.FC <Props> = ({ words, guessedWord, word, attempt, setLetters }) => {
  return (
    <div className='field'>
      <Row 
        guessedWord={guessedWord}
        wordAccepted={words[0] || ''}
        word={attempt === 1 ? word : words[0] ? words[0] : ''}
        attempt={attempt}
        show={words[0] ? true : false}
        setLetters={setLetters}
      />
      <Row 
        guessedWord={guessedWord}
        wordAccepted={words[1] || ''}
        word={attempt === 2 ? word : words[1] ? words[1] : ''}
        attempt={attempt}
        show={words[1] ? true : false}
        setLetters={setLetters}
      />
      <Row 
        guessedWord={guessedWord}
        wordAccepted={words[2] || ''}
        word={attempt === 3 ? word : words[2] ? words[2] : ''}
        attempt={attempt}
        show={words[2] ? true : false}
        setLetters={setLetters}
      />
      <Row 
        guessedWord={guessedWord}
        wordAccepted={words[3] || ''}
        word={attempt === 4 ? word : words[3] ? words[3] : ''}
        attempt={attempt}
        show={words[3] ? true : false}
        setLetters={setLetters}
      />
      <Row 
        guessedWord={guessedWord}
        wordAccepted={words[4] || ''}
        word={attempt === 5 ? word : words[4] ? words[4] : ''}
        attempt={attempt}
        show={words[4] ? true : false}
        setLetters={setLetters}
      />
    </div>
  );
};

