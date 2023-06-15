import React from 'react';
import styled from 'styled-components';
import  KeysRow  from './KeysRow';
import  Button  from './Button';

const StyledKeyboard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin: 0 auto;
    max-width: 490px;

    @media (max-width: 768px) {
      max-width: 100%;
      padding: 10px;
    }
`;

interface KeyboardProps {
    clickTheLetter: (letter: string) => void;
    deleteLetter: () => void;
    checkTheWord: () => void;
    lettersNotFound: string[];
  }

function Keyboard({ clickTheLetter, deleteLetter, checkTheWord, lettersNotFound }: KeyboardProps) {
    const firstRowLetters = ['Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ'];
    const secondRowLetters = ['Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э'];
    const thirdRowLetters = ['Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю'];

  
    return (
      <StyledKeyboard>
        <KeysRow lettersNotFound={lettersNotFound}>
          {firstRowLetters.map((letter) => (
            <Button key={letter} click={clickTheLetter} lettersNotFound={lettersNotFound} keySize="36px">
              {letter}
            </Button>
          ))}
        </KeysRow>
        <KeysRow lettersNotFound={lettersNotFound}>
          {secondRowLetters.map((letter) => (
            <Button key={letter} click={clickTheLetter} lettersNotFound={lettersNotFound} keySize="36px">
              {letter}
            </Button>
          ))}
        </KeysRow>
        <KeysRow lettersNotFound={lettersNotFound}>
          {thirdRowLetters.map((letter) => (
            <Button key={letter} click={clickTheLetter} lettersNotFound={lettersNotFound} keySize="36px">
              {letter}
            </Button>
          ))}
          <Button click={deleteLetter} keySize="36px">
            &larr;
          </Button>
        </KeysRow>
        <KeysRow>
          <Button click={checkTheWord} keySize="36px">
            Проверить слово
          </Button>
        </KeysRow>
      </StyledKeyboard>
    );
  }
  
  export default Keyboard;
