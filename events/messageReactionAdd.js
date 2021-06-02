const {channel, channelIDs, gamingChannel, gamingIDs} = require('../config.json')

module.exports = {
    once: false,
    async run(reaction, user, client){
        if(user.bot) return;
        if (reaction.partial) {
            try {
                await reaction.fetch();
            } catch (error) {
                console.error('Something went wrong when fetching the message: ', error);
                return;
            }
        }

        if(reaction.message.channel.id != channel && reaction.message.channel.id != gamingChannel) return;
        let message = reaction.message;
        
        // Reactions Emojis
        let custom1 = client.emojis.cache.find(emoji => emoji.name == "bear8");
        let custom2 = client.emojis.cache.find(emoji => emoji.name == "bear7");
        let custom3 = client.emojis.cache.find(emoji => emoji.name == "bear6");
        let custom4 = client.emojis.cache.find(emoji => emoji.name == "bear5");
        let custom5 = client.emojis.cache.find(emoji => emoji.name == "bear4");
        let custom6 = client.emojis.cache.find(emoji => emoji.name == "bear3");
        let custom7 = client.emojis.cache.find(emoji => emoji.name == "cat1");
        let custom8 = client.emojis.cache.find(emoji => emoji.name == "cat2r");
        let custom9 = client.emojis.cache.find(emoji => emoji.name == "cat3");
        let custom10 = client.emojis.cache.find(emoji => emoji.name == "cat4");
        let custom11 = client.emojis.cache.find(emoji => emoji.name == "cat5");
        let custom12 = client.emojis.cache.find(emoji => emoji.name == "cat6");
        let custom13 = client.emojis.cache.find(emoji => emoji.name == "cat7");
        let custom14 = client.emojis.cache.find(emoji => emoji.name == "cat8");
        let custom15 = client.emojis.cache.find(emoji => emoji.name == "cat9");
        let custom16 = client.emojis.cache.find(emoji => emoji.name == "cat10");
        let custom17 = client.emojis.cache.find(emoji => emoji.name == "cat11");

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

        // Gaming Roles
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

        let ageMessageID = channelIDs.find(obj => obj.name == "age").id;
        let genderMessageID = channelIDs.find(obj => obj.name == "gender").id;
        let regionMessageID = channelIDs.find(obj => obj.name == "region").id;

        let game1ID = gamingIDs.find(obj => obj.name == "one").id;
        let game2ID = gamingIDs.find(obj => obj.name == "two").id;
        let game3ID = gamingIDs.find(obj => obj.name == "three").id;

        if(!ageMessageID) return;
        if(!genderMessageID) return;
        if(!regionMessageID) return;
        if(!game1ID) return;
        if(!game2ID) return;
        if(!game3ID) return;

        // Age Reaction Roles

        if(message.id == ageMessageID){
            switch(reaction.emoji.name){
                case custom1.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(age1role);
                    break;
                case custom2.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(age2role)
                    break;
                case custom3.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(age3role)
                    break;              
              }
        }

        // Gender Reaction Roles

        if(message.id == genderMessageID){
            
            switch(reaction.emoji.name){
                case custom1.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gender1role);
                    break;
                case custom2.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gender2role)
                    break;
                case custom3.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gender3role)
                    break;
                case custom4.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gender4role)
                    break;   
                case custom5.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gender5role)
                    break;
                case custom6.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gender6role)
                    break;                 
              }
            
        }
        
        // Region Reaction Roles

        if(message.id == regionMessageID){
            
            switch(reaction.emoji.name){
                case custom1.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(region1role);
                    break;
                case custom2.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(region2role)
                    break;
                case custom3.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(region3role)
                    break;
                case custom4.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(region4role)
                    break;   
                case custom5.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(region5role)
                    break;
                case custom6.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(region6role)
                    break;       
              }
            
        }

        // Gaming 1 Roles

        if(message.id == game1ID){
            
            switch(reaction.emoji.name){
                case custom7.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(valorant);
                    break;
                case custom8.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(apex);
                    break;
                case custom9.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(csgo);
                    break;
                case custom10.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(cod);
                    break;   
                case custom11.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(rainbow);
                    break;                
              }
            
        }

        // Gaming 2 Roles

        if(message.id == game2ID){
            
            switch(reaction.emoji.name){
                case custom12.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(minecraft);
                    break;
                case custom13.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(league);
                    break;
                case custom14.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(genshin);
                    break;
                case custom15.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(roblox);
                    break;                 
              }
            
        }

        // Gaming 3 Roles

        if(message.id == game3ID){
            
            switch(reaction.emoji.name){
                case custom16.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(osu);
                    break;
                case custom17.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(rl);
                    break;
                case custom7.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(overwatch);
                    break;
                case custom8.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(rogue);
                    break;                 
              }
            
        }

    }
}