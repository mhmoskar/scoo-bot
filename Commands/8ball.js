const Command = require("../Structures/Command.js");
const { MessageEmbed } = require("discord.js");

module.exports = new Command({
  name: "8ball",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    let question = message.content.slice(6);
      if (!question)
        return message.channel.send(`You did not specify your question!`);
      else {
        let responses = [
          "Yes",
          "No",
          "Definetly",
          "Absoloutely",
          "Not in a million years",
        ];
        let response =
          responses[Math.floor(Math.random() * responses.length - 1)];
        let embed = new MessageEmbed()
          .setTitle(`8Ball!`)
          .setDescription(`${response}`)
          .setColor(message.guild.me.displayHexColor);
        message.channel.send({ embeds: [embed]})
    }
  }
})


