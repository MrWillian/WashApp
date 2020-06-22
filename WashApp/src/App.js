import React from 'react';
import Routes from './routes';
import storage from '../src/services/storage';

const App = () => {
  global.storage = storage;
  
  return (
    <Routes />
  );
};

export default App;
