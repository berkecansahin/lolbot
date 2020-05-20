const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const db = require('quick.db');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
     log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('ready', ()=>{
client.channels.get('707388029249257504').join()
})

client.on('voiceStateUpdate', (oldMember, newMember) => {
    // todo create channel
    if (newMember.voiceChannel != null && newMember.voiceChannel.name.startsWith("🔮│Destek İçin Tıkla")) {
        newMember.guild.createChannel("🔒│Destek Bekleme" , {
            type: 'voice',
            parent: newMember.voiceChannel.parent
       }).then(cloneChannel => {
        newMember.setVoiceChannel(cloneChannel)
        cloneChannel.setUserLimit(1)
      })
    }
    // ! leave
    if (oldMember.voiceChannel != undefined) {
        if (oldMember.voiceChannel.name.startsWith('🔒│Destek Bekleme')) {
            if (oldMember.voiceChannel.members.size == 0) {
                oldMember.voiceChannel.delete()
            } else {
            // change name
        }
        }
    }
});
//----------------------------------GEÇİCİ KANAL----------------------------//

client.on("guildMemberAdd", (member) => {
  let guild = member.guild;
  const codebookxir = new Discord.RichEmbed()
  .setColor('RED')
  .setTitle("Sunucuya Hoşgeldin!")
  .setDescription(`Unutma! Biz burada LoL Topluluğu kurmaya çalışıyoruz.`)
  .setFooter(`İyi eğlenceler dileriz.`)
  guild.members.get(member.id).send(codebookxir)
  });

client.on("guildMemberAdd", async(member) => {
  try {
    let embed= new Discord.RichEmbed()
    await(member.addRole("707563474741624834"))
    await client.channels.get("710440737669513238").send(`**Sunucumuza Hoşgeldin** **${member}**\n**Kayıt İçin Buraya İsmini Ve Yaşını Yaz Bekle.**\n**Hesap: **${new Date().getTime() - member.user.createdAt.getTime() < 45*24*60*60*1000 ? " ``Tehlikeli``!" : "``Güvenli``!"} \n<@710438257049206815> **yetkisine sahip arkadaşlar ilgilenecekler.**`,)
    if(!member.roles.has("707563474741624834")) {
      member.addRole("707563474741624834")

    }

  } catch(err) { console.log(err) }

})

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', '「🎀」gelen-gi̇den');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('GREEN')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📥 | Sunucuya Katıldı.')
  .setTimestamp()
  channel.sendEmbed(embed);
});

client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.find('name', '「🎀」gelen-gi̇den');
    if (!channel) return;
    const embed = new Discord.RichEmbed()
        .setColor('RED')
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle('📤 | Sunucudan Ayrıldı.')
        .setTimestamp()
    channel.sendEmbed(embed);
});



client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'aq') {
    msg.reply('Argo Kelime Kullanma!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sik') {
    msg.reply('Argo Kelime Kullanma!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sikerim') {
    msg.reply('Argo Kelime Kullanma!');
  }  
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amk') {
    msg.reply('Argo Kelime Kullanma!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'siktirgit') {
    msg.reply('Argo Kelime Kullanma!');
  }
if (msg.content === 'selamın aleyküm') {
   	msg.reply('Aleyküm Selam!');
  }

  if (msg.content === 'bye bye') {
   	msg.reply('Su gibi git su gibi gel...');
  }

  if (msg.content === 'günaydın') {
   	msg.reply('Günaydın!');
  }

  if (msg.content === 'herkese günaydın') {
   	msg.reply('Yepyeni bir güne merhaba :)');
  }

  if (msg.content === 'iyi geceler') {
   	msg.reply('İyi geceler...');
  }

  if (msg.content === 'güle güle') {
   	msg.reply('Sana da güle güle');
  }
  
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("KICK_MEMBERS")) permlvl = 1;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  if (message.member.hasPermission("MANAGE_ROLES")) permlvl = 5;
  if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 6; 
  return permlvl;
};

client.on("guildMemberAdd", member => {
	
	var channel = member.guild.channels.find("name", "「🎀」gelen-gi̇den");
	if (!channel) return;
	
	channel.send("Hoş geldin **" + member + "!** Seninle beraber `" + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + "` kişiyiz. ");
	
});


var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
