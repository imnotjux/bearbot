const { prefix } = require('../../config.json');

module.exports = {
    name: 'kickall',
    aliases: [],
    args: 0, 
    usage: `${prefix}kickall`,
    async execute(client, message, args){
        message.guild.members.fetch().then(members => members.forEach(member => {
            if(member.user.bot) return;
            if(!member.roles.cache.some(role => role.name === 'honey')){
                member.kick();
                console.log(`Kicked ${member.user.tag}`)
            }
        }))
    }
}