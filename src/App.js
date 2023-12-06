import React from 'react';
import Child from './Child.js';
//import {TransactionProvider}from './transsContext.js';

import './App.css';
import { TransactionProvider } from './transsContext.js';

function App() {
  return (
    <TransactionProvider>
      
      <Child />
    </TransactionProvider>
  );
}

export default App;
