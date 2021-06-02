const connection = require('../db/connection'); // Database connection, omit line if not connecting to a database
const { channel, channelIDs, gamingIDs, gamingChannel } = require('../config.json');

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
        
        if(connection){
            // Add database connection code here
        }
    }
}