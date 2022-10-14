const Command = require("../Structures/Command.js");
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = new Command({
    name: "clyde",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
      if (!args[0]) return this.sendErrorMessage(message, 0, 'Please provide a message to tweet');
      let tweet = message.content.slice(message.content.indexOf(args[0]), message.content.length);
      if (tweet.length > 68) tweet = tweet.slice(6, 65) + '...';

      try {
        const res = await fetch('https://nekobot.xyz/api/imagegen?type=clyde&text=' + tweet);
        const img = (await res.json()).message;
        const embed = new MessageEmbed()
          .setImage(img)
          .setColor(message.guild.me.displayHexColor);
        message.channel.send({ embeds: [embed]})
      } catch (err) {
        message.client.logger.error(err.stack);
      this.sendErrorMessage(message, 1, 'Please try again in a few seconds', err.message);
      }
    }
})
