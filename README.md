# Necromancer
A free, open source and multiplatform cards game inspired by Spectromancer, Magic: The Gathering, and the like. Build in web technologies such as HTML5, JS and CSS in top of NW.js.

:exclamation: **Attention** This is an early experimental version of the game, and still has several bugs and missing features. Just for testing since it is not playable yet (maybe in a  few months?).

Features
----
  - Play singleplayer duels
  - With more than 20 different cards (of 4 different elemental types)
  - Very basic AI implementation for testing battle system

  ![Screenshot of Necromancer](https://joancipria.files.wordpress.com/2017/05/screenshot.png)

Releases
----
First Alpha release 0.1.0 is expected at the end of the year 2017. It can be flexible and for sure it will release when "To do" list had been achieved. You can follow the progress below in the roadmap section. **Alpha** releases are expected until 0.2.0

**Roadmap**

Alpha 0.1.0 end of summer 2017
- [x] Migrate to Electron
- [ ] Config reports and auto-updates
- [ ] Rewrite Battle System (to add more features)
- [ ] Single Duels
- [ ] Add visual effects.
- [ ] Polish the pace of the game (make it less hectic)
- [ ] Improve AI behaviour and implement basic (Easy - Medium - Hard) modes
- [ ] Increase cards variety (about 40 new cards)
- [ ] General improvements
- [ ] Fix known bugs


Installation
----
Until first installable releases you can download this master and run it by:

```sh
$ git clone https://github.com/joancipria/Necromancer.git
$ cd Necromancer
$ npm install
$ npm start
```

Custom Decks
----
You can play Necromancer with any custom deck compatible with the game. To create a custom deck just create a folder with this structure:
```
Custom Deck
│   fireCards.json
│   waterCards.json    
│   airCards.json
│   earthCards.json
│   airCards.json
│   enemyCards.json
└───img
│   │   monster.png
│   │   wizard.png
```

Each JSON file should contain this syntax:
```json
[{
    "id": "firewall",
    "type": "card",
    "ElementalType": "fire",
    "image": "firewall.png",
    "life": 5,
    "attack": 0,
    "cost": 2
}, {
    "id": "priest",
    "type": "card",
    "ElementalType": "fire",
    "image": "priest.png",
    "life": 13,
    "attack": 3,
    "cost": 3
}, ... ]

```

Once you have the custom deck folder put it inside src/decks/ and select it from the game Options window (see video).
[linkname](https://www.youtube.com/watch?v=SBXIMQAQU5A)

Development
----
Want to contribute? Great! At this time we mainly need art designers to create more cards and other assets but you can contribute to the code too opening issues and sending reports. Feel free to write me at joancipria@gmail.com


License
----
Licensed under GPL v3
