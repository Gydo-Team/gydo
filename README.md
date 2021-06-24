# Gydo-JS v0.1.9

This project is still in beta! So you might encounter some bugs! Please report the bugs on our discord server.

## How to Install Gydo-JS

Type in the cmd/terminal

`
npm i gydo-js
`

# Setup

```
const gydo = require('gydo-js');
const bot = new bot({
    token: "<TOKEN HERE>",
    prefix: ['<PREFIX>']
});
```

## Ping Command, Welcome Message, and a Leave Messsage

### Leave Message

```
  bot.guildMemberRemove({
      channel: "<CHANNEL ID>"
  })
```

### Welcome Message

This one is at beta, so it might not work at the moment.

```
  bot.guildMemberAdd({
      message: "<Welcome Message>", // Can do %member for members tag
      channel: "<CHANNEL ID>"
  })
```

## Documentation, How to Setup, and Change Logs
https://gydo.gitbook.io/gydo-js/



## Have questions?
Join our Discord server!
https://discord.gg/wGWWCvHU6s
