# Rock Paper Scissors Game

A classic Rock Paper Scissors game built with HTML, CSS, and JavaScript. Play against the computer with mouse or keyboard controls, track your score, and enjoy auto-play mode.

## Features

- 🎮 Classic Rock Paper Scissors gameplay
- 🖱️ Mouse and keyboard controls
- 🤖 Auto-play mode
- 📊 Score tracking (wins, losses, ties)
- 🔄 Reset game functionality
- 📱 Responsive design

## How to Play

### Basic Rules

- ✊ Rock beats scissors
- ✋ Paper beats rock
- ✌️ Scissors beat paper
- Same choice results in a tie

### Controls

**Mouse:**

- Click on Rock/Paper/Scissors buttons to make your move
- Click Auto-play to toggle automatic gameplay
- Click Reset to clear scores

**Keyboard:**

- `R` - Select Rock
- `P` - Select Paper
- `S` - Select Scissors
- `A` - Toggle Auto-play
- `X` - Reset game

## Files Structure

rps/
├── index.html # Main game file
├── gameRules.html # Game rules documentation
├── README.md # This file
├── styles/ # CSS stylesheets
│ ├── index.css # Main game styles
│ ├── navbar.css # Navigation bar styles
│ └── gameRules.css # Rules page styles
├── scripts/ # JavaScript files
│ └── index.js # Main game logic
└── images/ # All image assets
├── rock.png # Rock icon
├── paper.png # Paper icon
├── scissors.png # Scissors icon
├── question.png # Default/question icon
├── reset.png # Reset button icon
└── autoplay.png # Auto-play button icon

## Technologies Used

- HTML5
- CSS3 (Modular structure)
- JavaScript (ES6)
- Google Fonts (Bungee Spice, Roboto)

## CSS Architecture

The project uses a modular CSS approach:

- `styles/index.css` - Main game styles and shared utilities
- `styles/navbar.css` - Navigation bar specific styles
- `styles/gameRules.css` - Rules page specific styles

This separation allows for:

- Better maintainability
- Easier debugging
- Scalable styling

---

Enjoy the game! ✊ ✋ ✌️
