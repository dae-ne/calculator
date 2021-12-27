import React from 'react';
import { useCalculator } from '../hooks';
import { Display } from './ui';
import { Keyboard } from './domain';

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
