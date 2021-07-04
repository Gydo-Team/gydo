# Gydo-JS v0.1.9

This project is still in beta! So you might encounter some bugs! Please report the bugs on our discord server.

## How to Install Gydo-JS

Type in the cmd/terminal

`
npm i gydo-js
`

# Setup

```js
const gydo = require('gydo-js');
const bot = new bot({
    token: "<TOKEN HERE>",
    prefix: ['<PREFIX>']
});
```

## Ping Command, Welcome Message, and a Leave Messsage

### ⚠️ THIS ONE IS BUGGY IT MIGHT NOT WORK

### Leave Message

```js
  bot.guildMemberRemove({
      channel: "<CHANNEL ID>"
  })
```

### Welcome Message

This one is at beta, so it might not work at the moment.

```js
  bot.guildMemberAdd({
      message: "<Welcome Message>", // Can do %member for members tag
      channel: "<CHANNEL ID>"
  })
```

## Documentation, How to Setup, and Change Logs
[Documentation](https://gydo.gitbook.io/gydo-js/)



## Have questions?
[Join our Discord server!](https://discord.gg/wGWWCvHU6s)
