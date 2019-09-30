const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { Pool, Client } = require('pg');


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

      let x = process.env.User;

      message.reply(x);

    };
    }
};
