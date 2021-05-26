require('dotenv').config();
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const path = require('path');

client.commands = new Discord.Collection();


// Command Handler
fs.readdirSync('./commands').forEach(folder => {
    fs.readdirSync(path.join('commands', folder)).forEach(file => {
        const command = require(path.resolve(path.join('commands', folder, file)));
        client.commands.set(command.name, command);
    })
})

// Event Handler
fs.readdirSync('./events/').forEach(file => {
    const eventFunc = require(`./events/${file}`);
    const event = file.split('.')[0];
    try {
        client[eventFunc.once ? 'once' : 'on'](event, (...args) => eventFunc.run(...args, client));
    } catch (error) {
        console.error(error);
    }
})

client.login(process.env.BOT_TOKEN);