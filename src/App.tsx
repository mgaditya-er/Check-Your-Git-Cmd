import React from 'react';
import GitCommandChecker from './components/GitCommandChecker';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <GitCommandChecker />
    </div>
  );
};

export default App;
