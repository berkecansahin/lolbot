const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = (client) => {



    client.user.setActivity("⚡️│ #EvdeKAL",{ type: "WATCHING"} );

    var logmesajı = chalk.bold.red("Oynuyor kısmı basari ile ayarlandi. \n")+ 
                chalk.italic.yellow("Jspanco : " + client.user.presence.game )
    console.log(logmesajı)
}