const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message, args) => {
    
  var embed = new Discord.RichEmbed()
  .setColor('BLUE')
  .setAuthor(client.user.username)
    .addField('Küfür-Reklam Engellemesi İçin Botu Kendi Sunucuna Davet Edebilirsin.')
    .addField("Davet linki \n Siz koyun")
 
  message.channel.send({embed: embed})
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0,
    
}

exports.help = {
    name: 'davet',
}
