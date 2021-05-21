const { prefix, color } = require('../../config.json');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'setup',
    aliases: [],
    args: 0, 
    usage: `${prefix}setup`,
    async execute(client, message, args){

        let custom1 = client.emojis.cache.find(emoji => emoji.name == "bear8");
        let custom2 = client.emojis.cache.find(emoji => emoji.name == "bear7");
        let custom3 = client.emojis.cache.find(emoji => emoji.name == "bear6");
        let custom4 = client.emojis.cache.find(emoji => emoji.name == "bear5");
        let custom5 = client.emojis.cache.find(emoji => emoji.name == "bear4");
        let custom6 = client.emojis.cache.find(emoji => emoji.name == "bear3");

        let ageEmbed = new MessageEmbed()
            .setTitle("Age")
            .setColor(color)
            .setImage('https://i.pinimg.com/564x/d7/6f/c2/d76fc250a9e9a4054e5e4e8892314baa.jpg')
            .setDescription('\n\n'
                + `${custom1} ₊﹒13~14\n`
                + `${custom2} ₊﹒15~17\n`
                + `${custom3} ₊﹒18+`);

        let genderEmbed = new MessageEmbed()
            .setTitle("Gender")
            .setColor(color)
            .setImage('https://i.pinimg.com/564x/19/5e/f5/195ef5b0dd586057f41efef97deeddd0.jpg')
            .setDescription('\n\n'
                + `${custom1} she ⸝ her\n`
                + `${custom2} he ⸝ him\n`
                + `${custom3} they ⸝ them\n`
                + `${custom4} it ⸝ itself\n`
                + `${custom5} any\n`
                + `${custom6} other`);

        let regionEmbed = new MessageEmbed()
            .setTitle("Region")
            .setColor(color)
            .setImage('https://i.pinimg.com/564x/5c/d3/c8/5cd3c887b18eaf420b28083740bf58a2.jpg')
            .setDescription('\n\n'
                + `${custom1} north america\n`
                + `${custom2} south america\n`
                + `${custom3} europe\n`
                + `${custom4} africa\n`
                + `${custom5} asia\n`
                + `${custom6} oceania`);

        let ageMessage = await message.channel.send(ageEmbed);
        await ageMessage.react(custom1);
        await ageMessage.react(custom2);
        await ageMessage.react(custom3);

        let genderMessage = await message.channel.send(genderEmbed);
        await genderMessage.react(custom1);
        await genderMessage.react(custom2);
        await genderMessage.react(custom3);
        await genderMessage.react(custom4);
        await genderMessage.react(custom5);
        await genderMessage.react(custom6);

        let regionMessage = await message.channel.send(regionEmbed);
        await regionMessage.react(custom1);
        await regionMessage.react(custom2);
        await regionMessage.react(custom3);
        await regionMessage.react(custom4);
        await regionMessage.react(custom5);
        await regionMessage.react(custom6);
        

        fs.readFile('./config.json', (err, data) => {
            if(err) console.log(err);
            let object = JSON.parse(data);
            object.channelIDs = [{"name":"age", "id": ageMessage.id}, {"name":"gender", "id": genderMessage.id}, {"name":"region", "id": regionMessage.id} ]
            fs.writeFileSync('./config.json', JSON.stringify(object, null, 4));
        })

    }
}