import React, { useState } from 'react';
import { checkGitCommand } from '../utils/gitCommands';
import './CommandPrompt.css';

const GitCommandChecker: React.FC = () => {
  const [command, setCommand] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(event.target.value);
  };

  const handleCheckCommand = () => {
    setResult(checkGitCommand(command));
  };

  return (
    <div className="command-prompt">
      <h1>Git Command Checker</h1>
      <input
        type="text"
        value={command}
        onChange={handleInputChange}
        placeholder="Enter a Git command"
      />
      <button onClick={handleCheckCommand}>Check Command</button>
      <div className="result">
        <h2>Result</h2>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default GitCommandChecker;
