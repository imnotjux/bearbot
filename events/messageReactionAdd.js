const {channel, channelIDs} = require('../config.json')

module.exports = {
    once: false,
    async run(reaction, user, client){
        
        if(user.bot) return;
        if(reaction.message.channel.id != channel) return;
        let message = reaction.message
        
        // Reactions Emojis
        let custom1 = client.emojis.cache.find(emoji => emoji.name == "bear8");
        let custom2 = client.emojis.cache.find(emoji => emoji.name == "bear7");
        let custom3 = client.emojis.cache.find(emoji => emoji.name == "bear6");
        let custom4 = client.emojis.cache.find(emoji => emoji.name == "bear5");
        let custom5 = client.emojis.cache.find(emoji => emoji.name == "bear4");
        let custom6 = client.emojis.cache.find(emoji => emoji.name == "bear3");

        // Age Roles
        const age1role = message.guild.roles.cache.find(role => role.name === "₊﹒13~14");
        const age2role = message.guild.roles.cache.find(role => role.name === "₊﹒15~17");
        const age3role = message.guild.roles.cache.find(role => role.name === "₊﹒18+");
        
        // Gender Roles
        const gender1role = message.guild.roles.cache.find(role => role.name === "she ⸝ her");
        const gender2role = message.guild.roles.cache.find(role => role.name === "he ⸝ him");
        const gender3role = message.guild.roles.cache.find(role => role.name === "they ⸝ them");
        const gender4role = message.guild.roles.cache.find(role => role.name === "it ⸝ itself");
        const gender5role = message.guild.roles.cache.find(role => role.name === "any");        
        const gender6role = message.guild.roles.cache.find(role => role.name === "other");

        // Region Roles
        const region1role = message.guild.roles.cache.find(role => role.name === "NA");
        const region2role = message.guild.roles.cache.find(role => role.name === "SA");
        const region3role = message.guild.roles.cache.find(role => role.name === "EU");
        const region4role = message.guild.roles.cache.find(role => role.name === "AF");
        const region5role = message.guild.roles.cache.find(role => role.name === "ASi");
        const region6role = message.guild.roles.cache.find(role => role.name === "OC");

        let ageMessage = channelIDs.find(obj => obj.name == "age").message;
        let genderMessage = channelIDs.find(obj => obj.name == "gender").message;
        let regionMessage = channelIDs.find(obj => obj.name == "region").message;
        
        if(!ageMessage) return;
        if(!genderMessage) return;
        if(!regionMessage) return;

        // Age Reaction Roles

        if(reaction.message == ageMessage){

            switch(reaction.emoji.name){
                case custom1:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(age1role);
                    break;
                case custom2:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(age2role)
                    break;
                case custom3:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(age3role)
                    break;              
              }
        }

        // Gender Reaction Roles

        if(reaction.message == genderMessage){
            
            switch(reaction.emoji.name){
                case custom1:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gender1role);
                    break;
                case custom2:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gender2role)
                    break;
                case custom3:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gender3role)
                    break;
                case custom4:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gender4role)
                    break;   
                case custom5:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gender5role)
                    break;
                case custom6:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gender6role)
                    break;                 
              }
            
        }
        
        // Region Reaction Roles

        if(reaction.message == genderMessage){
            
            switch(reaction.emoji.name){
                case custom1:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(region1role);
                    break;
                case custom2:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(region2role)
                    break;
                case custom3:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(region3role)
                    break;
                case custom4:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(region4role)
                    break;   
                case custom5:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(region5role)
                    break;
                case custom6:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(region6role)
                    break;       
              }
            
        }

    }
}