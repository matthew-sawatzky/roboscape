# JavaScript Game Project

Link to game: https://roboscape.vercel.app/

## Overview

This is a 2D game built using the Kaboom.js library. The game features various entities, including a player and enemies, and takes place across multiple rooms. The player can interact with the environment, fight enemies, and progress through different levels. I created this game for fun to show off my Javascript skills as I don't have an interest at the moment to become a game developer. I used the assets from a youtube video and while learning through the documentation and various other resources, would refer to the video if I got stuck. Through this project I learned a lot about the fundamentals of Javascript and programming logic which I apply to my general programming knowledge daily.

Link: https://www.youtube.com/watch?v=UWHiMgFjRrU


## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/matthew-sawatzky/roboscape
    ```
2. Navigate to the project directory:
    ```sh
    cd roboscape
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Game

To start the game, open the `index.html` file in your web browser or use a local server to serve the project directory.

### Development

#### File Structure

- `assets/`: Contains game assets such as fonts, palettes, sounds, and sprites.
- `lib/`: Contains the Kaboom.js library and related files.
- `maps/`: Contains JSON files defining the game maps.
- `src/`: Contains the source code for the game.
  - `entities/`: Contains JavaScript files defining game entities like the player and enemies.
  - `scenes/`: Contains JavaScript files defining different game scenes.
  - `state/`: Contains JavaScript files managing the game state.
  - `ui/`: Contains JavaScript files for the user interface elements.
  - `kaboomLoader.js`: Initializes the Kaboom.js library and loads assets.
  - `main.js`: The main entry point for the game.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

