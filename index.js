const { CommandoClient } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const path = require('path');

const client = new CommandoClient({
  commandPrefix: '?',
  owner: '103633077107970048',
  invite: 'https://discord.gg/XAM9kgj',
  disableEveryone: true,
});

//////////////////////////
// FUNCTION DELCARATION //
//////////////////////////

module.exports.client = client;

module.exports.dispatch;

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['extra', 'Extra commands like coinflip and random']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands({
  	ping: false,
    help: false,
  })
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
  client.user.setActivity(`with cards`);
});

client.on('error', e => {
  console.log(e);
});

client.on("guildMemberAdd", member => {

  return;
})

client.on("guildMemberRemove", member => {
  //goodbyeOldMember(member);
  return;
})

client.login(process.env.TOKEN);
