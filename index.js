const { CommandoClient } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const path = require('path');

const client = new CommandoClient({
  commandPrefix: '?',
  owner: '103633077107970048',
  invite: 'https://discord.gg/XAM9kgj',
  disableEveryone: true,
});

const pool = new Pool({
  user: 'nimrgldfvtcpxs',
  host: 'ec2-174-129-226-232.compute-1.amazonaws.com',
  database: 'dvf45uru2evs7',
  password: 'dab5cf11240c436785e142b91e7a1cf46c4819444a1279c819538061cc2ed7ab',
  port: 5432,
})

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
