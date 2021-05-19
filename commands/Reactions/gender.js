const { prefix, color } = require('../../config.json');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'gender',
    aliases: [],
    args: 0, 
    usage: `${prefix}gender`,
    async execute(client, message, args){

        let custom1 = client.emojis.cache.find(emoji => emoji.name == "bear8");
        let custom2 = client.emojis.cache.find(emoji => emoji.name == "bear7");
        let custom3 = client.emojis.cache.find(emoji => emoji.name == "bear6");
        let custom4 = client.emojis.cache.find(emoji => emoji.name == "bear5");
        let custom5 = client.emojis.cache.find(emoji => emoji.name == "bear4");
        let custom6 = client.emojis.cache.find(emoji => emoji.name == "bear3");


        let embed = new MessageEmbed()
            .setColor(color)
            .setImage('https://i.pinimg.com/564x/19/5e/f5/195ef5b0dd586057f41efef97deeddd0.jpg')
            .setDescription('\n\n'
                + `${custom1} she ⸝ her\n`
                + `${custom2} he ⸝ him\n`
                + `${custom3} they ⸝ them\n`
                + `${custom4} it ⸝ itself\n`
                + `${custom5} any\n`
                + `${custom6} other`);
       
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(custom1);
        messageEmbed.react(custom2);
        messageEmbed.react(custom3);
        messageEmbed.react(custom4);
        messageEmbed.react(custom5);
        messageEmbed.react(custom6);

        fs.readFile('./config.json', (err, data) => {
            if(err) console.log(err);
            let object = JSON.parse(data);
            object.channelIDs.push({"name":"gender", "message": messageEmbed})
            fs.writeFileSync('./config.json', JSON.stringify(object, null, 4));
        })

    }
}