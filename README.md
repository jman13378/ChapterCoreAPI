# Sokobot-JS

A JS API for the discord bot Sokobot

## References
- [Sokobot-JS](#sokobot-js)
  - [References](#references)
  - [Usage](#usage)
    - [Prerequisites](#prerequisites)
    - [Set Up](#set-up)
  - [Links](#links)



## Usage

### Prerequisites
To use the JS API you will need the following
- `Node JS`
- The JS API `npm install sokobot`
- An API token (Can be registered [here](https://dashboard.sokobot.info/settings/developers/api))

### Set Up

```js
const Sokobot = require("sokobot"); // initialize your sokobot module
const sokobot = new Sokobot("{token}"); // initialize the sokobot instance with your provided api key

/**
 * Basic function to get a users level
 */
async function getLevel() {
  let user = await sokobot.getUser("{UserId}");

  console.log(user.getLevel());
}
getLevel();

```

## Links
Crossed out links are either not finish or cant be accessed at this time

- [Website](https://sokobot.info)
- [Dashboard](https://dashboard.sokobot.info)
- [Status Page](https://status.sokobot.info)
- ~~[API Documentation]()~~
