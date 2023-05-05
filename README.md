# Sokobot-JS

A JS API for the discord bot Sokobot

## References
- [Example Usage](https://github.com/Sokobot-Hosted/Sokobot-JS/tree/main#Usage)
- [Links](https://github.com/Sokobot-Hosted/Sokobot-JS/tree/main#e)


## Usage
- [Prerequisites]()
- [Set Up]()
### Prerequisites
To use the JS API you will need the following
- `Node JS`
- The JS API `npm install sokobot`
- An API token (Can be registered [here](https://dashboard.sokobot.info/settings/developers/api))

### Set Up

```js
const Sokobot = require("sokobot");
const sokobot = new Sokobot(
  "{token}"
);

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
