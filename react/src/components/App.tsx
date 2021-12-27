import { Display } from './ui';
import { Keyboard } from './domain';
import { useState } from 'react';

export const App = () => {
  const [displayValue, setDisplayValue] = useState('0');

  return (
    <div className="app">
      <Display value={displayValue} />
      <Keyboard className='app__keyboard' setDisplayValue={setDisplayValue} />
    </div>
  );
}
