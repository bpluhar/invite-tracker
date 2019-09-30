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

      pool.query('SELECT NOW()', (err, res) => {
        console.log(res.rows[0].now);
        pool.end;
      })

    }
};
