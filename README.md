# Git Command Checker

Git Command Checker is a web application built with React and TypeScript that allows users to enter any Git command and checks if it is correct. If the command is incorrect, the application suggests the correct command.

![Git Command Checker](https://streamable.com/jrnhn8)
<a href="https://ibb.co/jrN7vFp"><img src="https://i.ibb.co/87CFDVh/photo-2024-05-18-15-37-06.jpg" alt="Git Command Checker Interface" border="0"></a>

## Features

- **Command Prompt Interface**: The application has a look and feel similar to a command prompt.
- **Git Command Validation**: Users can input Git commands, and the application checks if they are valid.
- **Command Suggestions**: If an incorrect command is entered, the application suggests the closest valid command using the Jaro-Winkler distance algorithm.
- **Support for Abbreviations**: The application recognizes common Git command abbreviations (e.g., `git st` for `git status`).

## Demo

Watch the demo video [here](https://streamable.com/jrnhn8).

## Installation

Follow these steps to set up and run the project locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/git-command-checker.git
    cd git-command-checker
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm run start:dev
    ```

4. Open your browser and navigate to `http://localhost:3000` to see the application.

## Usage

1. Enter a Git command in the input box.
2. Click the "Check Command" button.
3. The application will display whether the command is correct or suggest the closest valid command.

## Project Structure

- **src/components**: Contains React components.
  - `GitCommandChecker.tsx`: Main component for the Git command checker.
  - `CommandPrompt.css`: CSS file for styling the command prompt interface.
- **src/utils**: Contains utility functions.
  - `gitCommands.ts`: Contains the list of valid Git commands and the command checking logic.
  - `jaroWinkler.ts`: Implements the Jaro-Winkler distance algorithm.

## Contributing

Contributions are welcome! Please create a pull request or open an issue to discuss any changes.

## License

This project is licensed under the MIT License.
