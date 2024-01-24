# Find Your Neko

## A web-based picture matching game based on your selected character

<p align='center'>
  <img width="1105" alt="Screenshot 2024-01-24 at 13 05 49" src="https://github.com/angelogentileiii/Find-Em-Game/assets/140743863/871c8935-0b84-4d41-9600-bce4a1558887">
</p>


## Installation

Step One:
- Fork and clone this repository to your local machine:
  
  ```bash
  git clone https://github.com/your-username/Find-Em-Game.git
  cd find-em-game
  ```

Step Two:
- Run your local json-server via your terminal:

  ```bash
  npx watch json-server characters.json
  ```
    _Instructions to download and run your server can be found [here](https://www.npmjs.com/package/json-server)._

Step Three: 
- Start up the main web application in a new terminal:
- 
   ```bash
   open enterPage.html
   ```

**Try the functionality, listen to some music and, most of all, enjoy the game!**


## Basic Game Functionality

The game is built as a "Where's Waldo"-styled picture matching game in which the user will designate the difficulty (total board size) and the character which they would like to search for. Once the aforementioned information is entered, the user will be prompted with their chosen character and the 'Find Me!" button to start the timer. The user will have the alotted time to find as many images that match their character as possible, incrementing their score along the way.

**Do you have what it takes to beat your high score? Keep on playing till you do!**

Complete with original song "Dance of the Cat Girls" from Ian Frankel (which can be turned on/off as desired).


## Contributions:

Contributions and updates are welcome when submitted through pull requests. For major function or style changes, please open an issue with a developer to discuss any items in need of altering.


## Credentials

Our local dataset was populated from data sourced from the [nekos.best API](https://www.npmjs.com/package/json-server). All terms and conditions for use of data retrieved can be found on their web page listed.
