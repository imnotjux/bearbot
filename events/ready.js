const { channel, channelIDs, gamingIDs, gamingChannel, extraChannel, extraMessageID} = require('../config.json');

module.exports = {
    once: true,
    async run(client){
        console.log(`${client.user.username} is online!`);
        for(let id of channelIDs){
            await client.channels.cache.get(channel).messages.fetch(id);
        }

        for(let id of gamingIDs){
            await client.channels.cache.get(gamingChannel).messages.fetch(id)
        }

        await client.channels.cache.get(extraChannel).messages.fetch(extraMessageID);
        
    }
}