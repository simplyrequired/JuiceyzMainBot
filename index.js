// - Discord Packages - \\
const Discord = require("discord.js");
const roblox = require("noblox.js");
const Client = new Discord.Client();

// - Bot settings - \\
const Prefix = ";";
const cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_76B37C0F6F1574D7B13B57CEDF245AE052ECC9F1C69C9BE7FF4985E127FA1D53FF16D99541A3CA67B4CEF7DC8D670980EECBAB2601B383915C6525BDBD2B5B9A627076DABFFECDA514D61EECCC61D79B2ED1BAA0D348A38E30686FAA7063BFF2D68C49C0B76A7C5EDE08862C6D6EA8C6EF1199A22EF1C755CEBBCA4AD39372BA92714D68260F8FA717E1C5B328AC3182FDACEED57A359483A41EFC4EFD68642B6DBF3B0AAA147CE70931526DA5890B72A55238DABF051159E6C104A76F282180D43F37F80C9C438C12869C017B2C1DFD11D2F305BACDE3314251163B5821BA32789BCFC80EA162ADF9B2BA3013B490F967C800364AC71C402EFDC0985F24003E523A565EB7DAC60237BD135D96A27EC8A9760AE6614815FE8A0EF0F70DD15009C0EE99B8878736BCE75F3920DD02717204EFDE31";
var maximumRank = 242;
var group = 5082467;

function login() {
  return roblox.cookieLogin(cookie);
}

login() // Log into ROBLOX
  .then(function() {
    // After the function has been executed
    console.log("Logged in."); // Log to the console that we've logged in
  })
  .catch(function(error) {
    // This is a catch in the case that there's an error. Not using this will result in an unhandled rejection error.
    console.log(`Login error: ${error}`); // Log the error to console if there is one.
  });

// - Welcome Settings - \\
Client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.find(ch => ch.name === "public-chat");
  if (!channel) return;
  const embed = new Discord.RichEmbed()
    .setTitle(`User joined!`)
    .setColor(0x73ffca)
    .setDescription(`Hey ${member}! Welcome to Juiceyz`)
    .setFooter("JuiceyzDevelopment")
    .setTimestamp();
  channel.send(embed);
});

Client.on("guildMemberRemove", member => {
  const channel = member.guild.channels.find(ch => ch.name === "public-chat");
  if (!channel) return;
  const embed = new Discord.RichEmbed()
    .setTitle(`User left...`)
    .setColor(0x73ffca)
    .setDescription(`Aww! ${member} come back soon!`)
    .setFooter("JuiceyzDevelopment")
    .setTimestamp();
  channel.send(embed);
  
});

// - Commando Settings - \\
Client.on("ready", () => {
  console.log(
    `Bot has started, with ${Client.users.size} users, in ${Client.channels.size} channels of ${Client.guilds.size} guilds.`
  );
  console.log(`Logged in as: ${Client.user.username} BotID: ${Client.user.id}`);
  Client.user.setPresence({
    game: {
      name: "JuiceyzDevelopment",
      type: "STREAMING",
      url: "https://www.twitch.tv/simplyrequiredrblx"
    }
  });
});

Client.on("message", async message => {
  if (message.author.bot) return;
  if (message.content.indexOf(Prefix) !== 0) return;
  const args = message.content
    .slice(Prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const embed = new Discord.RichEmbed()
      .setTitle("Ping?")
      .setColor(0x73ffca)
      .setDescription(`❤️ ${Math.round(Client.ping)}ms`)
      .setFooter("JuiceyzDevelopment")
      .setTimestamp();
    message.channel.send(embed);
  }

  if (command === "development") {
    if (!message.member.roles.some(r => [`Development Team`].includes(r.name)))
      return message.channel.send(
        `Hey! ${message.author}, You don't have the permissions to use this command!`
      );
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    const channel = message.guild.channels.find(
      ch => ch.name === "development-updates"
    );

    if (!channel) message.channel.send("I could not find the channel!");
    const embed = new Discord.RichEmbed()
      .setTitle("Development Announcement")
      .setColor(0x73ffca)
      .setDescription(sayMessage)
      .setFooter("JuiceyzDevelopment")
      .setTimestamp();
    channel.send(embed);
  }
  if (command === "development") {
    if (!message.member.roles.some(r => [`Development Team`].includes(r.name)))
      return message.channel.send();
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    const channel = message.guild.channels.find(ch => ch.name === "bot-logs");

                    const channel1 = message.guild.channels.find(
                      ch => ch.name === "bot-logs"
                    );
                    const embed3 = new Discord.RichEmbed()
                      .setTitle(`Command logged`)
                      .setColor(0x73ffca)
                      .setDescription(`${message.author} used the Development Command in channel: ${message.channel}`)
                      .setFooter("JuiceyzDevelopment")
                      .setTimestamp();
                    channel1.send(embed3);
      }

  if (command === "training") {
    if (!message.member.roles.some(r => [`Bot Permissions`].includes(r.name)))
      return message.channel.send(
        `Hey! ${message.author}, You don't have the permissions to use this command!`
      );
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    const channel = message.guild.channels.find(ch => ch.name === "sessions");
    if (!channel) message.channel.send("I could not find the channel!");
    const embed = new Discord.RichEmbed()
      .setTitle("Training Announcement!")
      .setColor(0x73ffca)
      .setDescription(sayMessage)
      .setThumbnail(`${message.author.displayAvatarURL}`)
      .addField(
        "Game Link",
        "https://www.roblox.com/games/3987390268/Training-Center"
      )
      .setFooter("JuiceyzDevelopment")
      .setTimestamp();
    channel.send(embed);
    message.channel.send("Alright! Sended");
  }
  if (command === "training") {
    if (!message.member.roles.some(r => [`Bot Permissions`].includes(r.name)))
      return message.channel.send();
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    const channel = message.guild.channels.find(ch => ch.name === "bot-logs");

                    const channel1 = message.guild.channels.find(
                      ch => ch.name === "bot-logs"
                    );
                    const embed3 = new Discord.RichEmbed()
                      .setTitle(`Command logged`)
                      .setColor(0x73ffca)
                      .setDescription(`${message.author} used the Training Command in channel: ${message.channel}`)
                    .addField("Args", sayMessage)
                      .setFooter("JuiceyzDevelopment")
                      .setTimestamp();
                    channel1.send(embed3);
      }
  if (command === "chat") {
    if (!message.member.roles.some(r => [`SR`].includes(r.name)))
      return message.channel.send(
        `Hey! ${message.author}, You don't have the permissions to use this command!`
      );
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    const channel = message.guild.channels.find(
      ch => ch.name === "public-chat"
    );
    if (!channel) message.channel.send("I could not find the channel!");
    const embed = new Discord.RichEmbed()
      .setTitle("Andrew Information")
      .setColor(0x73ffca)
      .setDescription(sayMessage)
      .setFooter("JuiceyzDevelopment")
      .setTimestamp();
    channel.send(embed);
    message.channel.send("Alright! Sended");
  }
  if (command === "chat") {
    if (!message.member.roles.some(r => [`SR`].includes(r.name)))
      return message.channel.send();
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    const channel = message.guild.channels.find(ch => ch.name === "bot-logs");

                    const channel1 = message.guild.channels.find(
                      ch => ch.name === "bot-logs"
                    );
                    const embed3 = new Discord.RichEmbed()
                      .setTitle(`Command logged`)
                      .setColor(0x73ffca)
                      .setDescription(`${message.author} used the Chat Command in channel: ${message.channel}`)
                      .setFooter("JuiceyzDevelopment")
                      .setTimestamp();
                    channel1.send(embed3);
      }

  if (command === "suggest") {
    if (!message.member.roles.some(r => [`Verified`].includes(r.name)))
      return message.channel.send(
        `Hey! ${message.author}, You don't have the permissions to use this command!`
      );
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    const channel = message.guild.channels.find(
      ch => ch.name === "development-suggestions"
    );
    if (!channel) message.channel.send("I could not find the channel!");
    const embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username}'s Suggestion`)
      .setColor(0x73ffca)
      .setThumbnail(`${message.author.displayAvatarURL}`)
      .setDescription(sayMessage)
      .setFooter("JuiceyzDevelopment")
      .setTimestamp();
    channel.send(embed);
  }

  if (command === "suggest") {
    if (!message.member.roles.some(r => [`SR`].includes(r.name)))
      return message.channel.send();
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    const channel = message.guild.channels.find(ch => ch.name === "bot-logs");

                    const channel1 = message.guild.channels.find(
                      ch => ch.name === "bot-logs"
                    );
                    const embed3 = new Discord.RichEmbed()
                      .setTitle(`Command logged`)
                      .setColor(0x73ffca)
                      .setDescription(`${message.author} used the Suggestions Command in channel: ${message.channel}`)
                      .setFooter("JuiceyzDevelopment")
                      .setTimestamp();
                    channel1.send(embed3);
      }
  if (command === "group-ranklist") {
    if (!message.member.roles.some(r => [`Verified`].includes(r.name)))
      return message.channel.send(
        `Hey! ${message.author}, You don't have the permissions to use this command!`
      );
    const embed = new Discord.RichEmbed()
      .setTitle(`Juiceyz Roblox Group Ranklist`)
      .setColor(0x73ffca)
      .setThumbnail(
        `https://cdn.discordapp.com/attachments/627169012723351608/627901497228656691/J.png`
      )
      .setDescription("The current ranklist of Juiceyz! Needing 24h to update")
      .addField(
        "Chairman",
        "Current rank owners: DeveloperAndrew\nRankID: 255",
        true
      )
      .addField(
        "Vice Chairman",
        "Current rank owners: Salutiants\nRankID: 254",
        true
      )
      .addField("Developer", "RankID: 253", true)
      .addBlankField()
      .addField("President", "RankID: 252", true)
      .addField("Complaince Department", "RankID: 251", true)
      .addField("Human Resources Department", "RankID: 250", true)
      .addField("Public Relations Department", "RankID: 249", true)
      .addField("Executive Assistant", "RankID: 248", true)
      .addBlankField()
      .addField("Manager", "RankID: 247")
      .addField("Assistant Manager", "RankID: 246", true)
      .addField("Supervisor", "RankID: 245", true)
      .addField("Assistant", "RankID: 244", true)
      .addField("Intern", "RankID: 243", true)
      .addBlankField()
      .addField("Intern", "RankID: 243", true)
      .addField("Professional Juicer", "RankID: 242", true)
      .addField("Experienced Juicer", "RankID: 241", true)
      .addField("Juicer", "RankID: 4", true)
      .addField("Trainee", "RankID: 2", true)
      .addField("Customer Juicer", "RankID: 1", true)
      .setFooter("JuiceyzDevelopment")
      .setTimestamp();
    message.channel.send(embed);
  }
  if (command === "group-ranklist") {
    if (!message.member.roles.some(r => [`SR`].includes(r.name)))
      return message.channel.send();
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    const channel = message.guild.channels.find(ch => ch.name === "bot-logs");

                    const channel1 = message.guild.channels.find(
                      ch => ch.name === "bot-logs"
                    );
                    const embed3 = new Discord.RichEmbed()
                      .setTitle(`Command logged`)
                      .setColor(0x73ffca)
                      .setDescription(`${message.author} used the GroupRankList Command in channel: ${message.channel}`)
                      .setFooter("JuiceyzDevelopment")
                      .setTimestamp();
                    channel1.send(embed3);
      }

  if (command === "serverinformation") {
    if (!message.member.roles.some(r => [`Development Team`].includes(r.name)))
      return message.channel.send(
        `Hey! ${message.author}, You don't have the permissions to use this command!`
      );
    const embed = new Discord.RichEmbed()
      .setTitle(`Juiceyz Server Regulations`, true)
      .setColor(0x45ffba)
      .setDescription(
        "\n 1. Do not argue or become an annoyance in any text channel or voice channel. \n \n 2. Do not excessively swear, nor use **ANY** type of profanity in any text or voice channel;  there should be no racist, sexual, or homophobic remarks. \n \n 3. Do not send inappropriate content such as malicious links, inappropriate pictures, etc. \n \n 4. Do not create excessive background noise such as screaming in any voice channel. \n \n 5. Do not spam content of any sort in any text channel. \n \n 6. Do not advertise in any text channel or voice channel. \n \n 7. Do not create or be involved in hatred, riots, and or drama towards users or other groups. \n \n 8. Do not try to look for loopholes or attempt to get around any of the following guidelines. Simply embrace them to contribute to a safe and fun environment for all members. \n \n 9. Spam tagging Juiceyz staff to troll or even ask for assistance is strictly prohibited. Instead, direct message a Juiceyz staff member for immediate help. \n \n 10. It is with high expectation that you respect everyone at Juiceyz, especially yourself. \n \n **Persisting to comply with these regulations will result into serious consequences.** \n \n *Group Link:* \n https://www.roblox.com/groups/5082467/Juiceyz#!/about \n"
      )
      .setFooter("-Juiceyz Super Rank Team.")
      .setTimestamp();
    message.channel.send(embed);
  }
  if (command === "serverinformation") {
    if (!message.member.roles.some(r => [`SR`].includes(r.name)))
      return message.channel.send();
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    const channel = message.guild.channels.find(ch => ch.name === "bot-logs");

                    const channel1 = message.guild.channels.find(
                      ch => ch.name === "bot-logs"
                    );
                    const embed3 = new Discord.RichEmbed()
                      .setTitle(`Command logged`)
                      .setColor(0x73ffca)
                      .setDescription(`${message.author} used the ServerInformation Command in channel: ${message.channel}`)
                      .setFooter("JuiceyzDevelopment")
                      .setTimestamp();
                    channel1.send(embed3);
      }
  if (command === "logs") {
    if (!message.member.roles.some(r => [`Vice Chairman`].includes(r.name)))
      return message.channel.send("You don't have any permission to do this!");
    const embed = new Discord.RichEmbed()
      .setTitle(`Bot DataBase`, true)
      .setColor(0xeb3434)
      .setDescription("DeveloperAndrew: Logged into Bot's IP Address.")
      .setFooter("DataBase")
      .setTimestamp();
    message.channel.send(embed);
  }

  if (command === "say") {
    if (!message.member.roles.some(r => [`SR`].includes(r.name)))
      return message.reply(
        "Sorry! You don't have any permissions to use this command."
      );
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    message.channel.send(sayMessage);
  }
  if (command === "say") {
    if (!message.member.roles.some(r => [`SR`].includes(r.name)))
      return message.channel.send();
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    const channel = message.guild.channels.find(ch => ch.name === "bot-logs");

                    const channel1 = message.guild.channels.find(
                      ch => ch.name === "bot-logs"
                    );
                    const embed3 = new Discord.RichEmbed()
                      .setTitle(`Command logged`)
                      .setColor(0x73ffca)
                      .setDescription(`${message.author} used the Say Command in channel: ${message.channel}`)
                      .setFooter("JuiceyzDevelopment")
                      .setTimestamp();
                    channel1.send(embed3);
      }
  if (command === "talk") {
    if (!message.member.roles.some(r => [`SR`].includes(r.name)))
      return message.reply(
        "Sorry! You don't have any permissions to use this command."
      );
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    message.channel.send(sayMessage);
  }

  if (command === "talk") {
    if (!message.member.roles.some(r => [`SR`].includes(r.name)))
      return message.channel.send();
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    const channel = message.guild.channels.find(ch => ch.name === "bot-logs");

                    const channel1 = message.guild.channels.find(
                      ch => ch.name === "bot-logs"
                    );
                    const embed3 = new Discord.RichEmbed()
                      .setTitle(`Command logged`)
                      .setColor(0x73ffca)
                      .setDescription(`${message.author} used the Talk Command in channel: ${message.channel}`)
                      .setFooter("JuiceyzDevelopment")
                      .setTimestamp();
                    channel1.send(embed3);
      }
  if (command === "purge") {
    const deleteCount = parseInt(args[0], 10);
    if (!message.member.roles.some(r => [`SR`].includes(r.name)))
      if (!deleteCount || deleteCount < 2 || deleteCount > 100)
        return message.reply(
          "Please provide a number between 2 and 100 for the number of messages to delete"
        );

    const fetched = await message.channel.fetchMessages({ limit: deleteCount });
    message.channel
      .bulkDelete(fetched)
      .catch(error => message.reply(`${error}`));
  }
  if (command === "purge") {
    if (!message.member.roles.some(r => [`SR`].includes(r.name)))
      return message.channel.send();
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    const channel = message.guild.channels.find(ch => ch.name === "bot-logs");

                    const channel1 = message.guild.channels.find(
                      ch => ch.name === "bot-logs"
                    );
                    const embed3 = new Discord.RichEmbed()
                      .setTitle(`Command logged`)
                      .setColor(0x73ffca)
                      .setDescription(`${message.author} used the Purge Command in channel: ${message.channel}`)
                      .setFooter("JuiceyzDevelopment")
                      .setTimestamp();
                    channel1.send(embed3);
  }
});

function isCommand(command, message) {
  var command = command.toLowerCase();
  var content = message.content.toLowerCase();
  return content.startsWith(Prefix + command);
}








Client.on("message", async message => {
  if (message.author.bot) return;

const AndrewPrefix = "Andrew"
  // Hello Function
if(message.content.startsWith(`Hello ${AndrewPrefix}`)){
  message.channel.send(`Hello ${message.author.username}, How are you?`)
}
if(message.content.startsWith(`Hello ${AndrewPrefix}.`)){
  message.channel.send(`Hello ${message.author.username}, You look great today <3`)
}
if(message.content.startsWith(`Hello ${AndrewPrefix}!`)){
  message.channel.send(`Hello ${message.author.username}, How are you?`)
}
// Hey Function
if(message.content.startsWith(`Hey ${AndrewPrefix}`)){
  message.channel.send(`Hello ${message.author.username}, How are you?`)
}
if(message.content.startsWith(`Hello ${AndrewPrefix}.`)){
  message.channel.send(`Hello ${message.author.username}, How are you?`)
}
if(message.content.startsWith(`Hello ${AndrewPrefix}!`)){
  message.channel.send(`Hello ${message.author.username}, How are you?`)
}
});

















Client.on("message", message => {
  if (message.author.bot) return; // Dont answer yourself.
  var args = message.content.split(/[ ]+/);

  if (isCommand("rank", message)) {
    if (!message.member.roles.some(r => ["Bot Permissions", "SR"].includes(r.name)))
      // OPTIONAL - Checks if the sender has the specified roles to carry on further
      return message.reply(
        "Sorry! You don't have any permissions to use this command."
      );
    var username = args[1];
    var rankIdentifier = Number(args[2]) ? Number(args[2]) : args[2];
    if (!rankIdentifier) return message.channel.send("Please enter a rank!");
    if (username) {
      const embed = new Discord.RichEmbed()
        .setTitle("Database")
        .setColor(0x73ffca)
        .setDescription(`Checking for ${username}`);
      message.channel.send(embed);
      roblox
        .getIdFromUsername(username)
        .then(function(id) {
          roblox
            .getRankInGroup(group, id)
            .then(function(rank) {
              if (maximumRank <= rank) {
                const embed = new Discord.RichEmbed()
                  .setTitle("JuiceyzDevelopment Database")
                  .setColor(0xff4343)
                  .setDescription(
                    `Username ${username}\nWith Rank ${rank} is not promotable.`
                  );
                message.channel.send(embed);
              } else {
                const embed = new Discord.RichEmbed()
                  .setTitle("JuiceyzDevelopment Database")
                  .setColor(0x73ffca)
                  .setDescription(
                    `Username ${username}\nWith Rank ${rank} is promotable!`
                  );
                message.channel.send(embed);
                roblox
                  .setRank(group, id, rankIdentifier)
                  .then(function(newRole) {
                    const embed = new Discord.RichEmbed()
                      .setTitle("Ranked")
                      .setColor(0x73ffca)
                      .setDescription(`Changed ${username} rank to ${newRole.name}`);
                    message.channel.send(embed);

                    const channel = message.guild.channels.find(
                      ch => ch.name === "rankingbot-logs"
                    );
                    const embed2 = new Discord.RichEmbed()
                      .setTitle(`Changed ${username} Rank`)
                      .setColor(0x73ffca)
                      .addField(
                        `Users Profile`,
                        `\nhttps://www.roblox.com/users/${id}/profile`
                      )
                      .addField(`New Rank`, `${newRole.name}`)
                      .addField(`Ranked by`, `${message.author}`)
                      .setDescription("Group AuditLog - JuiceyzRankingBot")
                      .setFooter("JuiceyzDevelopment")
                      .setTimestamp();
                    channel.send(embed2);
                    const channel1 = message.guild.channels.find(
                      ch => ch.name === "bot-logs"
                    );
                    const embed3 = new Discord.RichEmbed()
                      .setTitle(`Command logged`)
                      .setColor(0x73ffca)
                      .setDescription(`${message.author} used the Ranking Command in channel: ${message.channel}`)
                      .setFooter("JuiceyzDevelopment")
                      .setTimestamp();
                    channel1.send(embed3);
                  })
                  .catch(function(err) {
                    console.error(err);
                    const embed = new Discord.RichEmbed()
                      .setTitle("Error")
                      .setColor(0xff4343)
                      .setDescription(`Failed to rank ${username}`);
                    message.channel.send(embed);
                  });
              }
            })
            .catch(function(err) {
              const embed = new Discord.RichEmbed()
                .setTitle(`${username} is not in Juiceyz`)
                .setColor(0xff4343)
                .setDescription("");
              message.channel.send(embed);
            });
        })
        .catch(function(err) {
          const embed = new Discord.RichEmbed()
            .setTitle("Error")
            .setColor(0xff4343)
            .setDescription(
              `The username: ${username} does not exist in Roblox.`
            );
          message.channel.send(embed);
        });
    } else {
      const embed = new Discord.RichEmbed()
        .setTitle("Warning!")
        .setColor(0xff4343)
        .setDescription(`Please enter a username.`);
      message.channel.send(embed);
    }
    return;
  }
});

Client.login(process.env.TOKEN);
