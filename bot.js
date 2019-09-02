const Discord = require('discord.js')
const client = new Discord.Client()
const ayarlar = require(./ayarlar.json)






client.login(ayarlar.token)
