let Discord = require("discord.js");
let client = new Discord.Client();

const prefix = "*";

client.on("ready", () => {
  console.log("Ready");
  client.user.setPresence({ activity: { name: "*embed setup || Made by Purge#1338" } });
});

client.on("message", async message => {
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
    if (command === "embed") {
      let Embed = new Discord.MessageEmbed();
      if (args[0] == "preview") {
        Embed.setAuthor(
          "Author",
          "https://media.discordapp.net/attachments/828929930611523587/829283281240457276/footer.png?width=484&height=484"
        )
          .setTitle("this is the title")
          .setDescription("this is the Description")
          .setImage(
            "https://media.discordapp.net/attachments/828929930611523587/829416624468787250/bg.png?width=621&height=349"
          )
          .setThumbnail(
            "https://images-ext-2.discordapp.net/external/E5hXvjI8HfCbTaTToeYZQaEMEsKg_kl-QYl0Ax4mUqc/%3Fwidth%3D484%26height%3D484/https/media.discordapp.net/attachments/828929930611523587/829266517332983838/img.png"
          )
          .setColor("0xCF8DA2")
          .setFooter(
            "this is the Footer",
            "https://media.discordapp.net/attachments/828929930611523587/829283281240457276/footer.png?width=484&height=484"
          );
        message.channel.send(message.author, Embed);
      }
      // where is error?
      if (args[0] === "setup") {
        await message.channel.send(
          "What would be the title?"
        );
        await message.channel
          .awaitMessages(m => m.author.id === message.author.id, {
            max: 1,
            time: 30000,
            errors: ["time"]
          })
          .then(collected => {
            Embed.setTitle(collected.first().content);
          });
        await message.channel.send(
          "What Should be the Description?"
        );
        await message.channel
          .awaitMessages(m => m.author.id === message.author.id, {
            max: 1,
            time: 30000,
            errors: ["time"]
          })
          .then(collectedx => {
            Embed.setDescription(collectedx.first().content);
          });
        await message.channel.send(
          "What would be the Footer?"
        );
        message.channel
          .awaitMessages(m => m.author.id === message.author.id, {
            max: 1,
            time: 30000,
            errors: ["time"]
          })
          .then(collectedy => {
            Embed.setFooter(collectedy.first().content);
            message.channel.send(Embed);
          });
      }
    }
});
client.login('token here');