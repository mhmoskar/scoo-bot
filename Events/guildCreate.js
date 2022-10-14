/** @format */
const Discord =require("discord.js")
const Event = require("../Structures/Event.js");


module.exports = new Event("guildCreate", guild => {
    const embed = new Discord.MessageEmbed()
        .setTitle(`Joined`)
//        .setThumbnail(guild.displayIconURL({dynamic: true}))
        .addField('Name', `${guild.name}`)
        .addField('Name ID', `${guild.id}`)
        .addField('Server Owner', `${guild.owner}`)
        .addField('Server Owner ID', `${guild.ownerId}`)
        .addField("Member Count", `${guild.memberCount}`)
        client.channels.cache.get('921783920830320661').send({ embeds: [embed]});
});