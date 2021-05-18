const connection = require('../db/connection'); // Database connection, omit line if not connecting to a database

module.exports = {
    once: true,
    async run(client){
        console.log(`${client.user.username} is online!`);
        if(connection){
            // Add database connection code here
        }
    }
}