const { prefix, color } = require('../../config.json');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'extra',
    aliases: [],
    args: 0, 
    usage: `${prefix}extra`,
    async execute(client, message, args){

        // Emojis

        let custom1 = client.emojis.cache.find(emoji => emoji.name == "bunny3");
        let custom2 = client.emojis.cache.find(emoji => emoji.name == "bunny4");
        let custom3 = client.emojis.cache.find(emoji => emoji.name == "bunny5");
        let custom4 = client.emojis.cache.find(emoji => emoji.name == "bunny6");
        let custom5 = client.emojis.cache.find(emoji => emoji.name == "bunny7");
        let custom6 = client.emojis.cache.find(emoji => emoji.name == "bunny8");

        // Roles

        const movieNight = message.guild.roles.cache.find(role => role.name === "[movie night]");
        const gameNight = message.guild.roles.cache.find(role => role.name === "[game night]");
        const eventPing = message.guild.roles.cache.find(role => role.name === "[event ping]");
        const randomPing = message.guild.roles.cache.find(role => role.name === "[random ping]");
        const chatReviver = message.guild.roles.cache.find(role => role.name === "[chat reviver ping]");
        const mudae = message.guild.roles.cache.find(role => role.name === "[mudae]");
        

        let extraEmbed = new MessageEmbed()
            .setColor(color)
            .setImage('https://media.discordapp.net/attachments/844238110979129434/860303771896119356/image0.jpg')
            .setDescription('\n\n'
                + `${custom1} <@&${movieNight.id}>\n`
                + `${custom2} <@&${gameNight.id}>\n`
                + `${custom3} <@&${eventPing.id}>\n`
                + `${custom4} <@&${randomPing.id}>\n`
                + `${custom5} <@&${chatReviver.id}>\n`
                + `${custom6} <@&${mudae.id}>\n`);

        let extraMsg = await message.channel.send(extraEmbed);
        await extraMsg.react(custom1);
        await extraMsg.react(custom2);
        await extraMsg.react(custom3);
        await extraMsg.react(custom4);
        await extraMsg.react(custom5);
        await extraMsg.react(custom6);
        
        fs.readFile('./config.json', (err, data) => {
            if(err) console.log(err);
            let object = JSON.parse(data);
            object.extraMessageID = extraMsg.id;
            fs.writeFileSync('./config.json', JSON.stringify(object, null, 4));
        })
    }
}