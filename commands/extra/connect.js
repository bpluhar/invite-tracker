const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Pool, Client } = require('pg');

const pool = new Pool({
  user: '',
  host: '',
  database: '',
  password: '',
  port: ,
})

module.exports = class connect extends Command {
    constructor(client) {
        super(client, {
            name: 'connect',
            group: 'extra',
            memberName: 'connect',
            description: 'Creates a connect pool.',
            userPermissions: ['ADMINISTRATOR'],
        });
    }
    run(message) {

      pool.query('SELECT NOW()', (err, res) => {
        console.log(res.rows[0]);
        pool.end;
      })

    }
};
