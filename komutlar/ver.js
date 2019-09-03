const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args, config) => {



    let user = message.mentions.members.first() 

    let member = db.fetch(`money_${message.author.id}`)


    if (!user) {
        return message.channel.send('Birinden bahsetmeyi unuttun.')
    }
    if (!args[1]) {
        return message.channel.send('Lütfen bir miktar belirtin.')
    }
    if (message.content.includes('-')) { // mesaj içeriyorsa "-" Bunu yap.
        return message.channel.send('Negatif para ödenemez.')
    }

    if (member < args[1]) {
        return message.channel.send(`Bakiyenizde olduğundan daha fazla para var. Tekrar deneyin.`)
    }

    message.channel.send(`${message.author.tag}, Başarıyla ödediniz ${user.user.username} ${args[1]}$.`)
    db.add(`money_${user.id}`, args[1])
    db.subtract(`money_${message.author.id}`, args[1])




}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kaçıklama","kanala"],
  permLevel: 0
};

exports.help = {
  name: 'ver',
  description: '**Bulunduğunuz** kanalın konusunu/açıklamasını değiştirir. ',
  usage: 'kanalkonusudeğiş yeni kanal ismi'
};
