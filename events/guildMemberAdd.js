const { MessageEmbed } = require('discord.js');

module.exports = {
    once: false,
    async run(member, client){
        client.count++;
        const server = member.guild;
        const category = server.channels.cache.find(cat => cat.name == "╭─ ⁺ #  verify◞♡");

        const perms = [{
            id: server.roles.everyone,
            deny: ["VIEW_CHANNEL"]
        }]

        perms.push({
            id: member.id,
            allow: ["VIEW_CHANNEL"]
        })

        const channel = await server.channels.create(`ticket-${client.count}`, {
            permissionOverwrites: perms, 
            parent: category
        });

        await channel.send(`<@!${member.id}>`)

        const embed = new MessageEmbed()
        .setColor('#faddd4')
        .setFooter(`Verification Period: 1 hour`)
        .setImage('https://media.discordapp.net/attachments/837752101332582401/874424447891812352/image0.jpg?width=1440&height=665')
        .setTitle("Verification")
        .setDescription("To gain full access to the server, please react to the :white_check_mark: below. If you are unable to react within 1 hour you will be kicked and you must rejoin to try again. ʕ •ᴥ•ʔゝ☆");

        const msg = await channel.send(embed);

        try {
            await msg.react('✅')
        } catch(err) {
            console.error(err);
        };

        const filter = (reaction, user) => {
            return reaction.emoji.name === '✅' && user.id === member.id;
        };
        
        const reactionCollector = msg.createReactionCollector(filter, {
            max: 1,
            time: 3600000
        });
    
        const role = server.roles.cache.find(role => role.name === "honey");
        const about = server.roles.cache.find(role => role.name === '· · · · · · · · · · · · · · · about⁣ · · · · · · · · · · · · · · ·');
        const gaming = server.roles.cache.find(role => role.name === '· · · · · · · · · · · · · · gaming⁣ · · · · · · · · · · · · · ·');
        const extra = server.roles.cache.find(role => role.name === '· · · · · · · · · · · · · · · · extra⁣⁣ · · · · · · · · · · · · · · · ·');
        
        reactionCollector.on('collect', async (reaction, user) => {
            await reaction.message.guild.members.cache.get(user.id).roles.add(role)
            await reaction.message.guild.members.cache.get(user.id).roles.add(about)
            await reaction.message.guild.members.cache.get(user.id).roles.add(gaming)
            await reaction.message.guild.members.cache.get(user.id).roles.add(extra)
        })

        reactionCollector.on('end', async () => {
            await channel.delete();
            if(!member.roles.cache.some(role => role.name === 'honey')) member.kick("Failed to verify.");
        });
    }
};