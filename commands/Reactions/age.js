const { prefix, color } = require('../../config.json');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'age',
    aliases: [],
    args: 0, 
    usage: `${prefix}age`,
    async execute(client, message, args){

        let custom1 = client.emojis.cache.find(emoji => emoji.name == "bear1");
        let custom2 = client.emojis.cache.find(emoji => emoji.name == "bear2");
        let custom3 = client.emojis.cache.find(emoji => emoji.name == "bear3");

        let embed = new MessageEmbed()
            .setColor(color)
            .setImage('https://i.pinimg.com/564x/d7/6f/c2/d76fc250a9e9a4054e5e4e8892314baa.jpg')
            .setDescription('\n\n'
                + `${custom1} ₊﹒13~14\n`
                + `${custom2} ₊﹒15~17\n`
                + `${custom3} ₊﹒18+`);
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(custom1);
        messageEmbed.react(custom2);
        messageEmbed.react(custom3);

       
        fs.readFile('./config.json', (err, data) => {
            if(err) console.log(err);
            let object = JSON.parse(data);
            object.channelIDs.push({"name":"age", "message": messageEmbed})
            fs.writeFileSync('./config.json', JSON.stringify(object, null, 4));
            console.log('done')
        })
    }
}