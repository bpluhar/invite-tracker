const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'nimrgldfvtcpxs',
  host: 'ec2-174-129-226-232.compute-1.amazonaws.com',
  database: 'dvf45uru2evs7',
  password: 'dab5cf11240c436785e142b91e7a1cf46c4819444a1279c819538061cc2ed7ab',
  port: 5432,
})

module.exports = class create extends Command {
    constructor(client) {
        super(client, {
            name: 'create',
            group: 'extra',
            memberName: 'create',
            description: 'Creates a connect pool.',
            userPermissions: ['ADMINISTRATOR'],
        });
    }
    run(message) {

      // INSERT INTO invites (inviter_user_id, inviter_username, invite_url, invite_uses) VALUES (user_id, username, url, uses);


      let createTableQry = `CREATE TABLE invites(
   inviter_user_id VARCHAR (50) PRIMARY KEY,
   inviter_username VARCHAR (50) NOT NULL,
   invite_url VARCHAR (50) UNIQUE NOT NULL,
   invite_uses VARCHAR (50) UNIQUE NOT NULL);`

      pool.query(createTableQry, (err, res) => {
        console.log(res);
        pool.end;
      })

    }
};
