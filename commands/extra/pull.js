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

module.exports = class pull extends Command {
    constructor(client) {
        super(client, {
            name: 'pull',
            group: 'extra',
            memberName: 'pull',
            description: 'Creates a connect pool.',
            userPermissions: ['ADMINISTRATOR'],
        });
    }
    run(message) {

      // INSERT INTO invites (inviter_user_id, inviter_username, invite_url, invite_uses) VALUES (user_id, username, url, uses);

    pool.query(`INSERT INTO invites (inviter_user_id, inviter_username, invite_url, invite_uses) VALUES ('12435', 'TEST'', 'https://discord.gg/ABC123', '7');`, (err, res) => {
      console.log(res);
      if (!err) {
        message.reply('Row inserted!');
      }
      pool.end;
    })

    pool.query('SELECT * FROM invites', (err, res) => {
      console.log(res.rows);
      res.rows.forEach(function(row) {
        console.log(row);
      })
      pool.end;
    })

    }
};
