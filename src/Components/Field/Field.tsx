import React from 'react';
import Row from './Row';
import styled from 'styled-components';

const StyledField = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0 0 20px 0;

    @media (max-width: 768px) {
      max-width: 100%;
      padding: 10px;
    }
`

export default function Field({ guessedWord, words, word, attempt, setLetters }: any) {
    const rowIndices = [0, 1, 2, 3, 4];
  
    return (
      <StyledField>
        {rowIndices.map((index) => (
          <Row
            key={index}
            guessedWord={guessedWord}
            wordAccepted={words[index] || ''}
            word={attempt === index + 1 ? word : words[index] ? words[index] : ''}
            attempt={attempt}
            show={!!words[index]}
            setLetters={setLetters}
          />
        ))}
      </StyledField>
    );
  }
