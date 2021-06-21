const discord = require('discord.js');
const client = new discord.Client();

class gydo {
    constructor (va) {
        if(!va.token) throw new Error(`INVALID_TOKEN`);

        if(!va.prefix) return console.error(`No Prefix Given!`);
        this.prefix = va.prefix
        this.token = va.token
        
        if(typeof va.token !== 'string') return console.error(`Token must be a string!`);
        if(typeof va.prefix !== 'object') return console.error(`Prefix must be an Object!`);

        client.login(this.token);
        client.on('ready', async () => {
            console.log(`Bot is Ready! | Logged in as ${client.user.tag}`)
        });
    }
    ping() {
        client.on('message', (message) => {
            const prefix = this.prefix
            const args = message.content.slice(prefix.length).trim().split(/ +/);
            const command = args.shift().toLowerCase();

            if(command === "ping") {
                message.channel.send(`Pinging...`).then((msg) => {
                    msg.edit(`Pong! ${client.ws.ping}`)
                })
            }
            
        })
    }
    guildMemberAdd(va) {
        if(!va.message) return console.error(`Put a welcome message first!`);
        if(!va.channel) return console.error(`Put a channel ID!`);
        this.channel = va.channel
        this.message = va.message


        if(typeof va.channel !== 'number') return console.error(`Put a valid Channel ID!`)
        client.on('guildMemberAdd', member => {
            const welcomeChannel = member.guild.channels.cache.get(this.channel);

            welcomeChannel.send(`${this.message}`)

            const memberTag = this.message.replaceLast("%member", member.user.tag);
            const message = this.message

            return {
                message = memberTag
            }
        });
    }
    guildMemberRemove(va) {
        if(!va.channel) return console.error(`Put a channel ID!`);
        if(typeof va.channel !== 'number') return console.error(`Put a valid Channel ID!`)
        this.channel = va.channel

        client.on('guildMemberRemove', member => {
            const leaveChannel = member.guild.channels.cache.get(this.channel)

            leaveChannel.send(`Sad to see you leave ${member.user.tag}..`)
        });
    }
}

module.exports = gydo


//             OLD CODE
/*
client.on('guildMemberAdd', member => {
  if(setup.MemberLog.memberleavejoin === '') {console.log()}
  if(setup.MemberLog.memberleavejoin === 'CHANNEL ID') {console.log()}
  if(setup.MemberLog.serverid === '') {console.log()}
  if(setup.MemberLog.serverid === 'guildID') {console.log()}
  if(setup.MemberLog.JoinMessage === '') {console.log('Message Error. No message found in MemberLog: message field'); process.kill(process.pid)}
  const guildID = `${setup.MemberLog.serverid}`
  const channelID = `${setup.MemberLog.memberleavejoin}`;
  if(member.guild.id === guildID) {
     const channel = client.channels.cache.get(channelID);

     var text = setup.MemberLog.JoinMessage
     var text2 = text.replace("{author}", `${member}`)
     var text3 = text2.replace("{ping}", `${client.ws.ping}`)
     var text4 = text3.replace("{server}", `${member.guild.name}`)
     var newtext = text4.replace("{memberCount}", `${member.guild.members.cache.size}`)

channel.send(newtext);
  }
});

client.on('guildMemberRemove', member => {
  if(setup.MemberLog.memberleavejoin === '') {console.log()}
  if(setup.MemberLog.memberleavejoin === 'CHANNEL ID') {console.log()}
  if(setup.MemberLog.serverid === '') {console.log()}
  if(setup.MemberLog.serverid === 'guildID') {console.log()}
  const guildID = `${setup.MemberLog.serverid}`
  const channelID = `${setup.MemberLog.memberleavejoin}`;
  if(member.guild.id === guildID) {
     const channel = client.channels.cache.get(channelID);

channel.send(`Sad to see you leave ${member}.`);
  }
});*/
