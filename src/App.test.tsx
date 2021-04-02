import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import store from './redux/state';

test('app renders', () => {
  render(<App store={store}/>);
});
