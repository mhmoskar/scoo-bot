const { Client, MessageEmbed }= require('discord.js');
const { mem, cpu, os } = require('node-os-utils');
const { stripIndent } = require('common-tags');
require("../Events/ready");

module.exports = {
        name: "botinfo",
        permission: "ADMINISTRATOR",
        async run(message, args, client, prefix) {
    
        const { totalMemMb, usedMemMb } = await mem.info();
        const BotStats = stripIndent`
          **OS**        : \`${await os.oos()}\`
          **Cores**      : \`${cpu.count()}\`
          **CPU Usage**  : \`${await cpu.usage()} %\`
          **RAM**       : \`${totalMemMb} MB\`
          **RAM Usage**  : \`${usedMemMb} MB\`
        `;
    
        const embed = new MessageEmbed()
        .setDescription(`**Client**: \`🟢 ONLINE\` - \`${client.ws.ping}ms\`\n**Uptime**: <t:${parseInt(client.readyTimestamp / 1000)}:R>
        \n**Client Statistics**:\n ${BotStats}`)
        .setTimestamp()
        .setColor(message.guild.me.displayHexColor)
        message.channel.send({ embeds: [embed]})

//        const newEmbed = new MessageEmbed()
//          .setDescription(`**Client**: \`🟢 ONLINE\` - \`${client.ws.ping}ms\`\n**Message Ping**: \`${Msg.createTimeStamp - message.createdTimestamp}ms\`
//          \n**Uptime**: <t:${parseInt(client.readyTimestamp / 1000)}:R>\n
//          **Database**: \`${switchTo(connection.readyState)}\`
//          \n**Client Statistics**:\n ${BotStats}`)
//          .setTimestamp()
//          .setColor(message.guild.me.displayHexColor)
//          Msg.edit({ embeds: [newEmbed]})               //Fix code `Message Ping: NaNms` to show message ping 
    }
}