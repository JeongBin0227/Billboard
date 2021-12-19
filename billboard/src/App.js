import React from 'react';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <React.Suspense fallback={null}>
      <Header />
      <Main />
    </React.Suspense>
  );
}

export default App;
