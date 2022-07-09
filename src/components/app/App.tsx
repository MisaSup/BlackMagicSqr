import './App.less';

import { useState } from 'react';

import ActionArea from "../action_area/action_area"
import SquaresWrapper from '../squares_wrapper/squares_wrapper';

export const getRandomValue = () => {
  let min = Math.ceil(33);
  let max = Math.floor(122);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const App = () => {

  const [letter, setLetter] = useState(String.fromCodePoint(getRandomValue()));

  return (
    <div className="App">
      <h1>black Magic Square</h1>
      <Instruction />
      <ActionArea letter={letter} setLetter={(char: string) => setLetter(char)}/>
      <SquaresWrapper letter={letter} setLetter={() => setLetter(String.fromCodePoint(getRandomValue()))}/>
    </div>
  );
}

const Instruction = () =>
{
  return (
    <ol className='instruction'>
      <li>Задумайте любое двузначное число.</li> 
      <li>Вычтите из него составляющие его цифры (например, из числа 54 надо вычесть 5 и 4, получится 45).</li> 
      <li>Найдите это число в таблице и символ, которому оно соответствует.</li>
      <li>Вообразите мысленно себе этот символ, посмотрев на черный квадрат.</li>
      <li>Щелкните по магическому черному квадрату - черный квадрат угадает ваш символ.</li>
    </ol>
  )
}


export default App;
