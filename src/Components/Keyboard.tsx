import React from 'react';
import { KeysRow } from './KeysRow';
import { Button } from './Button';

export const Keyboard: React.FC <any> = ({ clickTheLetter, deleteLetter, checkTheWord, lettersNotFound }) => {
  return (
    <div className='keyboard'>
      <KeysRow>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>й</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>ц</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>у</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>к</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>е</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>н</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>г</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>ш</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>щ</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>з</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>х</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>ъ</Button>
      </KeysRow>
      <KeysRow>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>ф</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>ы</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>в</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>а</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>п</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>р</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>о</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>л</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>д</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>ж</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>э</Button>
      </KeysRow>
      <KeysRow>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>я</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>ч</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>с</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>м</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>и</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>т</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>ь</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>б</Button>
        <Button click={clickTheLetter} lettersNotFound={lettersNotFound}>ю</Button>
        <Button click={deleteLetter} arrow={true}>
          &larr;
        </Button>
      </KeysRow>
      <KeysRow>
        <Button click={checkTheWord} >
          Проверить слово
        </Button>
      </KeysRow>
      </div>
  );
};

