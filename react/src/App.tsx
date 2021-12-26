import React from 'react';
import { useCalculator } from './logic';
import { Display } from './components/ui';
import { Keyboard } from './components/domain';

export interface AppProps {}

export const App: React.FC<AppProps> = () => {
  const result = useCalculator();

  return (
    <div className="app">
      <Display value={result} />
      <Keyboard className='app__keyboard' />
    </div>
  );
}
