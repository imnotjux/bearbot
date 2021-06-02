const { prefix, color } = require('../../config.json');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'gaming',
    aliases: [],
    args: 0, 
    usage: `${prefix}gaming`,
    async execute(client, message, args){

        // Emojis

        let custom1 = client.emojis.cache.find(emoji => emoji.name == "cat1");
        let custom2 = client.emojis.cache.find(emoji => emoji.name == "cat2r");
        let custom3 = client.emojis.cache.find(emoji => emoji.name == "cat3");
        let custom4 = client.emojis.cache.find(emoji => emoji.name == "cat4");
        let custom5 = client.emojis.cache.find(emoji => emoji.name == "cat5");
        let custom6 = client.emojis.cache.find(emoji => emoji.name == "cat6");
        let custom7 = client.emojis.cache.find(emoji => emoji.name == "cat7");
        let custom8 = client.emojis.cache.find(emoji => emoji.name == "cat8");
        let custom9 = client.emojis.cache.find(emoji => emoji.name == "cat9");
        let custom10 = client.emojis.cache.find(emoji => emoji.name == "cat10");
        let custom11 = client.emojis.cache.find(emoji => emoji.name == "cat11");

        // Roles

        const valorant = message.guild.roles.cache.find(role => role.name === "valorant");
        const apex = message.guild.roles.cache.find(role => role.name === "apex");
        const csgo = message.guild.roles.cache.find(role => role.name === "csgo");
        const cod = message.guild.roles.cache.find(role => role.name === "cod");
        const rainbow = message.guild.roles.cache.find(role => role.name === "r6 siege");
        const minecraft = message.guild.roles.cache.find(role => role.name === "minecraft");
        const league = message.guild.roles.cache.find(role => role.name === "league of legends");
        const genshin = message.guild.roles.cache.find(role => role.name === "genshin");
        const roblox = message.guild.roles.cache.find(role => role.name === "roblox");
        const osu = message.guild.roles.cache.find(role => role.name === "osu");
        const rl = message.guild.roles.cache.find(role => role.name === "rocket league");
        const overwatch = message.guild.roles.cache.find(role => role.name === "overwatch");
        const rogue = message.guild.roles.cache.find(role => role.name === "rogue company");

        let gamingEmbed1 = new MessageEmbed()
            .setColor(color)
            .setImage('https://media.discordapp.net/attachments/844238110979129434/849442889833906216/image0.png')
            .setDescription('\n\n'
                + `${custom1} <@&${valorant.id}>\n`
                + `${custom2} <@&${apex.id}>\n`
                + `${custom3} <@&${csgo.id}>\n`
                + `${custom4} <@&${cod.id}>\n`
                + `${custom5} <@&${rainbow.id}>\n`);

        let gamingEmbed2 = new MessageEmbed()
            .setColor(color)
            .setImage('https://cdn.discordapp.com/attachments/844238110979129434/849444352554958858/image0.jpg')
            .setDescription('\n\n'
                + `${custom6} <@&${minecraft.id}>\n`
                + `${custom7} <@&${league.id}>\n`
                + `${custom8} <@&${genshin.id}>\n`
                + `${custom9} <@&${roblox.id}>\n`);

        let gamingEmbed3 = new MessageEmbed()
            .setColor(color)
            .setImage('https://cdn.discordapp.com/attachments/844238110979129434/849460930097446922/image0.png')
            .setDescription('\n\n'
                + `${custom10} <@&${osu.id}>\n`
                + `${custom11} <@&${rl.id}>\n`
                + `${custom1} <@&${overwatch.id}>\n`
                + `${custom2} <@&${rogue.id}>\n`);

        let gameMsg1 = await message.channel.send(gamingEmbed1);
        await gameMsg1.react(custom1);
        await gameMsg1.react(custom2);
        await gameMsg1.react(custom3);
        await gameMsg1.react(custom4);
        await gameMsg1.react(custom5);

        let gameMsg2 = await message.channel.send(gamingEmbed2);
        await gameMsg2.react(custom6);
        await gameMsg2.react(custom7);
        await gameMsg2.react(custom8);
        await gameMsg2.react(custom9);
        
        let gameMsg3 = await message.channel.send(gamingEmbed3);
        await gameMsg3.react(custom10);
        await gameMsg3.react(custom11);
        await gameMsg3.react(custom1);
        await gameMsg3.react(custom2);
        
        
        fs.readFile('./config.json', (err, data) => {
            if(err) console.log(err);
            let object = JSON.parse(data);
            object.gamingIDs = [{"name":"one", "id": gameMsg1.id}, {"name":"two", "id": gameMsg2.id}, {"name":"three", "id": gameMsg3.id} ]
            fs.writeFileSync('./config.json', JSON.stringify(object, null, 4));
        })

    }
}