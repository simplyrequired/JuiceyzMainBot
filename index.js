
// - Discord Packages - \\
const Discord = require("discord.js");
const roblox = require('noblox.js');
const Client = new Discord.Client();

// - Bot settings - \\
const Prefix = ';';

var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_A0D1BDA99FEBF9A3FCB88CA6E03E5C6BF9F126666F76FD4FAD8436110E3EA49C8794359CC1E8534368C714D1C02CCD5E7BF91D0D39B2CB5D4D08C378ABC4CCEE7BE022237A4912252E1D0D3135A8447AB1FE8B7E84181CAD1BC5CDED5F3BC9CD4338D2211D32B22331B81C5C2D0760B98289AEE0706147646B0F80BE7DABF4E43B497C4DFFA52624CF74C81D1DB339E2C6801D4639F5E87A68D2846292D46B70241455AC7A0C60DB5676C095B39B76B40FE94520BC1487BEEA5D47A7919026B711520F528828AC0EDDF40607DE0BCFAD4520C8A7DD176FB66BB25B071E5620F400880430FDDF2667CCE64C9549D6283946A18831EC71960D3C669F22C94FF953677CD85C2474A85EBE01666AE02C0619034DDD590AB34785BDCE4F07F51E2636AD5853D3FD2F99CA25AE690A77C62B89C73CE7CE";
var groupId = 5082467;
var maximumRank = 253;

function login() {
  return roblox.cookieLogin(cookie);
}

login() // Log into ROBLOX
    .then(function() { // After the function has been executed
        console.log('Logged in.') // Log to the console that we've logged in
    })
    .catch(function(error) { // This is a catch in the case that there's an error. Not using this will result in an unhandled rejection error.
        console.log(`Login error: ${error}`) // Log the error to console if there is one.
    });


// - Welcome Settings - \\
Client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'public-chat');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setTitle(`User joined!`)
  .setColor(0xFFFFFF)
  .setDescription(`Hey ${member}! Welcome to Juiceyz`)
  .setFooter('JuiceyzDevelopment')
  .setTimestamp();
  channel.send(embed);
});

Client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'public-chat');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setTitle(`User left...`)
  .setColor(0xFFFFFF)
  .setDescription(`Aww! ${member} come back soon!`)
  .setFooter('JuiceyzDevelopment')
  .setTimestamp();
  channel.send(embed);
});



// - Commando Settings - \\
Client.on("ready", () => {
  console.log(`Bot has started, with ${Client.users.size} users, in ${Client.channels.size} channels of ${Client.guilds.size} guilds.`);
  console.log(`Logged in as: ${Client.user.username} BotID: ${Client.user.id}`)
  Client.user.setPresence({
    game: {
        name: 'JuiceyzDevelopment',
        type: "STREAMING",
        url: "https://www.twitch.tv/simplyrequiredrblx"
    }
  });
});

Client.on("message", async message => {
  if(message.author.bot) return;
    if(message.content.indexOf(Prefix) !== 0) return;
    const args = message.content.slice(Prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

if(command === "ping") {
  const embed = new Discord.RichEmbed()
  .setTitle('Ping?')
  .setColor(0xFFFFFF)
  .setDescription(`❤️ ${Math.round(Client.ping)}ms`)
  .setFooter('JuiceyzDevelopment')
  .setTimestamp();
  message.channel.send(embed)
}

if(command === "development") {
  if(!message.member.roles.some(r=>[`SR`].includes(r.name)) )
  return message.channel.send(`Hey! ${message.author}, You don't have the permissions to use this command!`);
  const sayMessage = args.join(" ");
  message.delete().catch(O_o=>{}); 
  const channel = message.guild.channels.find(ch => ch.name === 'development-updates');
  if (!channel) message.channel.send('I could not find the channel!');
  const embed = new Discord.RichEmbed()
  .setTitle('Development Announcement')
  .setColor(0xFFFFFF)
  .setDescription(sayMessage)
  .setFooter('JuiceyzDevelopment')
  .setTimestamp();
  channel.send(embed)
  message.channel.send("Alright! Sended")
}
  
  if(command === "training") {
  if(!message.member.roles.some(r=>[`SR`].includes(r.name)) )
  return message.channel.send(`Hey! ${message.author}, You don't have the permissions to use this command!`);
  const sayMessage = args.join(" ");
  message.delete().catch(O_o=>{}); 
  const channel = message.guild.channels.find(ch => ch.name === 'sessions');
  if (!channel) message.channel.send('I could not find the channel!');
  const embed = new Discord.RichEmbed()
  .setTitle('Training Announcement!')
  .setColor(0xFFFFFF)
  .setDescription(sayMessage)
  .setThumbnail(`${message.author.displayAvatarURL}`)
  .addField('Game Link', 'https://www.roblox.com/games/3987390268/Training-Center')
  .setFooter('JuiceyzDevelopment')
  .setTimestamp();
  channel.send(embed)
  message.channel.send("Alright! Sended")
}

if(command === "suggest") {
  if(!message.member.roles.some(r=>[`Verified`].includes(r.name)) )
  return message.channel.send(`Hey! ${message.author}, You don't have the permissions to use this command!`);
  const sayMessage = args.join(" ");
  message.delete().catch(O_o=>{}); 
  const channel = message.guild.channels.find(ch => ch.name === 'development-suggestions');
  if (!channel) message.channel.send('I could not find the channel!');
  const embed = new Discord.RichEmbed()
  .setTitle(`${message.author.username}'s Suggestion`)
  .setColor(0xFFFFFF)
  .setThumbnail(`${message.author.displayAvatarURL}`)
  .setDescription(sayMessage)
  .setFooter('JuiceyzDevelopment')
  .setTimestamp();
  channel.send(embed)
}

if(command === "group-ranklist") {
  if(!message.member.roles.some(r=>[`Verified`].includes(r.name)) )
  return message.channel.send(`Hey! ${message.author}, You don't have the permissions to use this command!`);
  const embed = new Discord.RichEmbed()
  .setTitle(`Juiceyz Roblox Group Ranklist`)
  .setColor(0xFFFFFF)
  .setThumbnail(`https://cdn.discordapp.com/attachments/627169012723351608/627901497228656691/J.png`)
  .setDescription("The current ranklist of Juiceyz! Needing 24h to update")
  .addField('Chairman', 'Current rank owners: DeveloperAndrew\nRankID: 255', true)
  .addField('Vice Chairman', 'Current rank owners: Salutiants\nRankID: 254', true)
  .addField('Developer', 'RankID: 253', true)
  .addBlankField()
  .addField('President', 'RankID: 252', true)
  .addField('Complaince Department', 'RankID: 251', true)
  .addField('Human Resources Department', 'RankID: 250', true)
  .addField('Public Relations Department', 'RankID: 249', true)
  .addField('Executive Assistant', 'RankID: 248', true)
  .addBlankField()
  .addField('Manager', 'RankID: 247')
  .addField('Assistant Manager', 'RankID: 246', true)
  .addField('Supervisor', 'RankID: 245', true)
  .addField('Assistant', 'RankID: 244', true)
  .addField('Intern', 'RankID: 243', true)
  .addBlankField()
  .addField('Intern', 'RankID: 243', true)  
  .addField('Professional Juicer', 'RankID: 242', true)  
  .addField('Experienced Juicer', 'RankID: 241', true)
  .addField('Juicer', 'RankID: 4', true)
  .addField('Trainee', 'RankID: 2', true)
  .addField('Customer Juicer', 'RankID: 1', true)
  .setFooter('JuiceyzDevelopment')
  .setTimestamp();
  message.channel.send(embed)
}

if(command === "say") {
  if(!message.member.roles.some(r=>[`SR`].includes(r.name)) )
  return message.reply("Sorry! You don't have any permissions to use this command.");
  const sayMessage = args.join(" ");
  message.delete().catch(O_o=>{}); 
  message.channel.send(sayMessage);
}
if(command === "talk") {
  if(!message.member.roles.some(r=>[`SR`].includes(r.name)) )
  return message.reply("Sorry! You don't have any permissions to use this command.");
  const sayMessage = args.join(" ");
  message.delete().catch(O_o=>{}); 
  message.channel.send(sayMessage);
}

if(command === "purge") {
  const deleteCount = parseInt(args[0], 10);
  if(!message.member.roles.some(r=>[`SR`].includes(r.name)) )
  if(!deleteCount || deleteCount < 2 || deleteCount > 100)
    return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
  
  const fetched = await message.channel.fetchMessages({limit: deleteCount});
  message.channel.bulkDelete(fetched)
    .catch(error => message.reply(`${error}`));
}

});




function isCommand(command, message){
  var command = command.toLowerCase();
  var content = message.content.toLowerCase();
  return content.startsWith(Prefix + command);
}

Client.on('message', (message) => {
  if (message.author.bot) return; // Dont answer yourself.
  var args = message.content.split(/[ ]+/)
 
  if(isCommand('rank', message)){
     if(!message.member.roles.some(r=>["developer", "SR"].includes(r.name)) ) // OPTIONAL - Checks if the sender has the specified roles to carry on further
      return message.reply("Sorry! You don't have any permissions to use this command.");
      var username = args[1]
      var rankIdentifier = Number(args[2]) ? Number(args[2]) : args[2];
      if (!rankIdentifier) return    message.channel.send('Please enter a rank!')
      if (username){
        const embed = new Discord.RichEmbed()
        .setTitle('Database')
        .setColor(0xFFFFFF)
        .setDescription(`Checking for ${username}`);
      message.channel.send(embed);
          roblox.getIdFromUsername(username)
          .then(function(id){
              roblox.getRankInGroup(groupId, id)
              .then(function(rank){
                  if(maximumRank <= rank){
                    const embed = new Discord.RichEmbed()
                    .setTitle('JuiceyzDevelopment Database')
                    .setColor(0xFF4343)
                    .setDescription(`Username ${username}\nWith Rank ${rank} is not promotable.`);
                  message.channel.send(embed);
                  } else {
                    const embed = new Discord.RichEmbed()
                    .setTitle('JuiceyzDevelopment Database')
                    .setColor(0xFFFFFF)
                    .setDescription(`Username ${username}\nWith Rank ${rank} is promotable!`);
                  message.channel.send(embed);
                      roblox.setRank(groupId, id, rankIdentifier)
                      .then(function(newRole){
                        const embed = new Discord.RichEmbed()
                        .setTitle('Ranked')
                        .setColor(0xFFFFFF)
                        .setDescription(`Changed ${username} rank to ${newRole.name}`);
                      message.channel.send(embed);
    
  const channel = message.guild.channels.find(ch => ch.name === 'rankingbot-logs');                  
  const embed2 = new Discord.RichEmbed()
  .setTitle(`Changed ${username} Rank`)
  .setColor(0xFFFFFF)
  .addField(`Users Profile`, `\nhttps://www.roblox.com/users/${id}/profile`)
  .addField(`New Rank`, `${newRole.name}`)
  .setDescription("Group AuditLog - JuiceyzRankingBot")
  .setFooter('JuiceyzDevelopment')
  .setTimestamp();
  channel.send(embed2)

                      }).catch(function(err){
                          console.error(err)
                          const embed = new Discord.RichEmbed()
                          .setTitle('Error')
                          .setColor(0xFF4343)
                          .setDescription(`Failed to rank ${username}`);
                        message.channel.send(embed);
                      });
                  }
                }).catch(function(err){
                const embed = new Discord.RichEmbed()
                .setTitle(`${username} is not in Juiceyz`)
                .setColor(0xFF4343)
                .setDescription("");
                message.channel.send(embed)
                            });
          }).catch(function(err){
            const embed = new Discord.RichEmbed()
            .setTitle('Error')
            .setColor(0xFF4343)
            .setDescription(`The username: ${username} does not exist in Roblox.`);
              message.channel.send(embed)
         });
     } else {
      const embed = new Discord.RichEmbed()
      .setTitle('Warning!')
      .setColor(0xFF4343)
      .setDescription(`Please enter a username.`);
        message.channel.send(embed)
     }
     return;
 }
 
});



Client.login("NjI3ODgxMDA5MzAzNzgxNDA5.XZERuw.KjP0paAp8HvdSBrt8JhfR_EIdpw");
