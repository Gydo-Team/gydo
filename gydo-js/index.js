const Discord = require('Discord.js')
const Gydo = new Discord.Client()
const fs = require('fs')
const { pid } = require('process')
const client = new Discord.Client()

var config = (`{
    "prefix": "PUT PREFIX HERE",
    "token": "PUT TOKEN HERE",
}`)



//if (!fs.existsSync(`./../../setting.json`)) {
//fs.copyFile('./node_modules/gydo-js/settings.json', './../../setting.json', (err) => {
//  if (err) throw err;
// console.log(`No Settings Files making one now.`);
//});
//}

const path = './../../setting.json'

try {
  if (fs.existsSync(`./../../setting.json`)) {
    const setup = require('./../../setting.json')
    } 
} catch(err) {
  console.error('No setting file making one now')
  let data = JSON.stringify(require('./settings.json'), null, " ");   // '{\n "a": 2\n}));
 fs.writeFileSync(`setting.json`, data);
 process.kill(process.pid)
}



const setup = require('./../../setting.json')

if (setup.token === 'INPUT TOKEN') {
  console.log('No token has been put in setting.json please put one in')
  process.kill(process.pid)
}

if (setup.token === '') {
  console.log('No token has been put in setting.json please put one in')
  process.kill(process.pid)
}
if(setup.token === 'INPUT TOKEN') {
  console.log('No token has been put in setting.json please put one in')
  process.kill(process.pid)
}

if (setup.prefix === '') {
  console.log('No prefix has been put in setting.json please put one in')
  process.kill(process.pid)
}
if(setup.prefix === 'INPUT PREFIX') {
  console.log('No prefix has been put in setting.json please put one in')
  process.kill(process.pid)
}

client.login(setup.token)

client.on('ready', () => {
  console.log(`Bot ready and logged in as ${client.user.username}`)
})

client.on('message', message => {
  if (setup.ping === 'yes') {
    if (message.content === `${setup.prefix}ping`) {
      message.reply(`Pong my ping is: ${client.ws.ping}ms`)
    }
  }
})