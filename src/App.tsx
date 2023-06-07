import React, { useState, useMemo, useEffect } from 'react';
import  Field from './Components/Field/Field';
import  Keyboard from './Components/KeyBoard/KeyBoard';
import { cities } from './utils/cities.js';
import { allCities } from './utils/citiesToChoose';
import Container from './Components/Layout/Container';
import Title from './Components/Layout/Title';
import Restart from './Components/Restart/Restart';
import RestartButton from './Components/Restart/RestartButton';
import Message from './Components/Message';
import Header from './Components/Layout/Header';

function App() {
  const [word, setWord] = useState('');
  const [words, setWords] = useState<any>([]);
  const [attempt, setAttempt] = useState(1);
  const [message, setMessage] = useState('');
  const [lettersNotFound, setLettersNotFound] = useState<string[]>([]);
  const [changeTheWord, setChangeTheWord] = useState(false);

  let random = Math.random() * allCities.length;
  random = Math.floor(random);

  const guessedWord = useMemo(() => {
    return allCities[random].toUpperCase();
  }, [changeTheWord]);

  console.log(guessedWord)

  useEffect(() => {
    if (attempt === 6) {
      setMessage('Слово было ' + guessedWord);
    }
  }, [attempt]);

  function deleteLetter() {
    setWord(prev => prev.slice(0, -1));
  }

  function clickTheLetter(letter: string) {
    if (word.length >= guessedWord.length) {
      return;
    }
    setWord(prev => prev + letter);
    setMessage('');
  }

  function checkTheWord() {
    if (!word) {
      return;
    }

    if (cities.some((obj: any) => obj?.name.toLowerCase() === word.toLowerCase())) {
      checkTheAnswer();
    } else {
      setMessage('К сожалению этот город не существует, или автор его еще не добавил');
    }
  }

  function checkTheAnswer() {
    setWords((prev: any) => [...prev, word.toUpperCase()]);
    setWord('');
    setAttempt(a => a + 1);
  }

  function getLetters(letters: any) {
    setLettersNotFound(prev => [...prev, ...letters]);
  }

  function restartGame() {
    setWord('');
    setWords([]);
    setAttempt(1);
    setMessage('');
    setLettersNotFound([]);
    setChangeTheWord(!changeTheWord);
  }

  return (
    <div className="App">
      <Header>
        <Container>
          <Title />
          <Restart click={restartGame}>
            <RestartButton click={restartGame}>
              Restart
            </RestartButton>
          </Restart>
        </Container>
      </Header>
      <Container>
        <Message>{message}</Message>
        <Field
          guessedWord={guessedWord}
          words={words}
          word={word}
          attempt={attempt}
          setLetters={getLetters}
        />
        <Keyboard
          clickTheLetter={clickTheLetter}
          deleteLetter={deleteLetter}
          checkTheWord={checkTheWord}
          lettersNotFound={lettersNotFound}
        />
      </Container>
    </div>
  );
}

export default App;
