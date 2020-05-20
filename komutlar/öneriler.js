const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var öneri = args.slice(0).join(' ');
	var guildID = "699733628925640755";
	var channelID = "707368030744871013";
   const mod = message.author;
   let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	
	if (!öneri){
		return message.reply("Bir mesaj belirtin! Doğru kullanım: **t!öneri <mesaj>**");
	} else {
		
		var embed = new Discord.RichEmbed()
      .setColor("RED")
			.setTimestamp()
			.setTitle("ÖNERİLER")
			.addField("Kullanıcı", `${mod}`)
			.addField("Önerisi", öneri)
		
		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send("✅ Öneriniz başarıyla iletilmiştir!");
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner"], 
  permLevel: 0 
};

exports.help = {
  name: 'öneri', 
  description: "bot hakkındaki önerilerinizi bot sahiplerine ulaştırır", 
  usage: 'öneri <mesaj>' 
};