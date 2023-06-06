import React, { useState, useMemo, useEffect, SetStateAction } from 'react';
import './App.scss';
import { Field } from './Components/Field';
import { Keyboard } from './Components/Keyboard';
import { cities } from './utils/cities.js';
import { allCities } from './utils/citiesToChoose';

function App() {
  const [word, setWord] = useState('');
  const [words, setWords] = useState<any>([]);
  const [attempt, setAttempt] = useState(1);
  const [restart, setRestart] = useState(false);
  const [message, setMessage] = useState('');
  const [lettersNotFound, setLettersNotFound] = useState<string[]>([]);
  const [changeTheWord, setChangeTheWord] = useState(false);

  let random = Math.random() * allCities.length;
  random = Math.floor(random);

  const guessedWord = useMemo(() => {
    return allCities[random].toUpperCase();
  }, [changeTheWord]);

  console.log(guessedWord);

  useEffect(() => {
    if (attempt === 5) {
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
      setMessage('К сожалению этот город не существует, или автор его еще не добавил')
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
    setRestart(false);
    setChangeTheWord(!changeTheWord);
  }

  return (
    <div className="App">
      <header className='header'>
        <div className='container'>
          <h1 className='title'>
            Угадай город
          </h1>
          <div className='restart'>
          <button onClick={restartGame}>
            Restart
          </button>
          </div>
          <div className='message'>
            {message}
          </div>
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
        </div>
      </header>
    </div>
  );
}

export default App;
