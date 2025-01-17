const {channel, channelIDs, gamingChannel, extraChannel, gamingIDs, extraMessageID} = require('../config.json')

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

        if(reaction.message.channel.id != channel && reaction.message.channel.id != gamingChannel && reaction.message.channel.id != extraChannel) return;
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
        let custom18 = client.emojis.cache.find(emoji => emoji.name == "bunny3");
        let custom19 = client.emojis.cache.find(emoji => emoji.name == "bunny4");
        let custom20 = client.emojis.cache.find(emoji => emoji.name == "bunny5");
        let custom21 = client.emojis.cache.find(emoji => emoji.name == "bunny6");
        let custom22 = client.emojis.cache.find(emoji => emoji.name == "bunny7");
        let custom23 = client.emojis.cache.find(emoji => emoji.name == "bunny8");

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

        // Extra Roles
        const movieNight = message.guild.roles.cache.find(role => role.name === "[movie night]");
        const gameNight = message.guild.roles.cache.find(role => role.name === "[game night]");
        const eventPing = message.guild.roles.cache.find(role => role.name === "[event ping]");
        const randomPing = message.guild.roles.cache.find(role => role.name === "[random ping]");
        const chatReviver = message.guild.roles.cache.find(role => role.name === "[chat reviver ping]");
        const mudae = message.guild.roles.cache.find(role => role.name === "[mudae]");

        // Message IDS
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
        if(!extraMessageID) return;

        // Age Reaction Roles

        if(message.id == ageMessageID){

            switch(reaction.emoji.name){
                case custom1.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(age1role);
                    break;
                case custom2.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(age2role)
                    break;
                case custom3.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(age3role)
                    break;              
              }
        }

        // Gender Reaction Roles

        if(message.id == genderMessageID){
            
            switch(reaction.emoji.name){
                case custom1.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(gender1role);
                    break;
                case custom2.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(gender2role)
                    break;
                case custom3.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(gender3role)
                    break;
                case custom4.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(gender4role)
                    break;   
                case custom5.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(gender5role)
                    break;
                case custom6.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(gender6role)
                    break;                 
              }
            
        }
        
        // Region Reaction Roles

        if(message.id == regionMessageID){
            
            switch(reaction.emoji.name){
                case custom1.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(region1role);
                    break;
                case custom2.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(region2role)
                    break;
                case custom3.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(region3role)
                    break;
                case custom4.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(region4role)
                    break;   
                case custom5.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(region5role)
                    break;
                case custom6.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(region6role)
                    break;       
              }
            
        }

        // Gaming 1 Roles

        if(message.id == game1ID){
            
            switch(reaction.emoji.name){
                case custom7.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(valorant);
                    break;
                case custom8.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(apex);
                    break;
                case custom9.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(csgo);
                    break;
                case custom10.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(cod);
                    break;   
                case custom11.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(rainbow);
                    break;                
              }
            
        }

        // Gaming 2 Roles

        if(message.id == game2ID){
            
            switch(reaction.emoji.name){
                case custom12.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(minecraft);
                    break;
                case custom13.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(league);
                    break;
                case custom14.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(genshin);
                    break;
                case custom15.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(roblox);
                    break;                 
              }
            
        }

        // Gaming 3 Roles

        if(message.id == game3ID){
            
            switch(reaction.emoji.name){
                case custom16.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(osu);
                    break;
                case custom17.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(rl);
                    break;
                case custom7.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(overwatch);
                    break;
                case custom8.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(rogue);
                    break;                 
              }
            
        }

        // Extra Reaction Roles

        if(message.id == extraMessageID){

            switch(reaction.emoji.name){
                case custom18.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(movieNight);
                    break;
                case custom19.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(gameNight);
                    break;
                case custom20.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(eventPing);
                    break;
                case custom21.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(randomPing);
                    break;
                case custom22.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(chatReviver);
                    break;
                case custom23.name:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(mudae);
                    break;
            }
        }

    }
}