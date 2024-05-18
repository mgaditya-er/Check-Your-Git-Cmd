import { jaroWinkler } from './jaroWinkler';

const validGitCommands = [
    'git init',
    'git clone',
    'git add',
    'git commit',
    'git push',
    'git pull',
    'git status',
    'git log',
    'git diff',
    'git branch',
    'git checkout',
    'git merge',
    'git rebase',
    'git reset',
    'git revert',
    'git fetch',
    'git remote',
    'git tag',
    'git show',
    'git stash',
    // Add more commands as needed
  ];
  

const gitCommandAbbreviations: { [key: string]: string } = {
  'git st': 'git status',
  // Add more abbreviations as needed
};

export function checkGitCommand(command: string): string {
  const trimmedCommand = command.trim();

  // Check if the command matches a known abbreviation
  if (gitCommandAbbreviations[trimmedCommand]) {
    return `Correct command (interpreted as ${gitCommandAbbreviations[trimmedCommand]})`;
  }

  // Check if the command is valid
  if (validGitCommands.includes(trimmedCommand)) {
    return 'Correct command';
  } else {
    return `Invalid command. Did you mean: ${getSuggestion(trimmedCommand)}`;
  }
}

function getSuggestion(command: string): string {
  let closestCommand = '';
  let highestSimilarity = 0;

  for (const validCommand of validGitCommands) {
    const similarity = jaroWinkler(command, validCommand);
    if (similarity > highestSimilarity) {
      highestSimilarity = similarity;
      closestCommand = validCommand;
    }
  }

  return closestCommand || 'a valid git command';
}

// Ensure the file is treated as a module
export {};
