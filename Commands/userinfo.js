
const { MessageEmbed, Permissions } = require("discord.js");
const Command = require("../Structures/Command.js");
const moment = require("moment")

module.exports = new Command({
    name: "userinfo",
    permission: "MANAGE_MESSAGES",
    async run(message, args, client) {
        var permissions = [];
        var acknowledgements = 'None';
       
        const Target = message.mentions.users.first() || message.author;
        const member = message.guild.members.cache.get(Target.id);
        //const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        
        if (member.permissions.has(Permissions.KICK_MEMBERS)){
            permissions.push("Kick Members");
        }
        
        if (member.permissions.has(Permissions.BAN_MEMBERS)){
            permissions.push("Ban Members");
        }
        
        if (member.permissions.has(Permissions.ADMINISTRATOR)){
            permissions.push("Administrator");
        }
    
        if(member.permissions.has(Permissions.MANAGE_MESSAGES)){
            permissions.push("Manage Messages");
        }
        
        if(member.permissions.has(Permissions.MANAGE_CHANNELS)){
            permissions.push("Manage Channels");
        }
        
        if(member.permissions.has(Permissions.MENTION_EVERYONE)){
            permissions.push("Mention Everyone");
        }
    
        if(message.member.permissions.has(Permissions.MANAGE_NICKNAMES)){
            permissions.push("Manage Nicknames");
        }
    
        if(message.member.permissions.has(Permissions.MANAGE_ROLES)){
            permissions.push("Manage Roles");
        }
    
        if(message.member.permissions.has(Permissions.MANAGE_WEBHOOKS)){
            permissions.push("Manage Webhooks");
        }
    
        if(message.member.permissions.has(Permissions.MANAGE_EMOJIS)){
            permissions.push("Manage Emojis");
        }
    
        if(permissions.length == 0){
            permissions.push("No Key Permissions Found");
        }
    
        if(member.user.id == message.guild.ownerID){
            acknowledgements = 'Server Owner';
        }
    
        const embed = new MessageEmbed()
            .setDescription(`<@${member.user.id}>`)
            .setAuthor(`${member.user.tag}`, Target.avatarURL({dynamic : true}))
            .setColor(message.guild.me.displayHexColor)
            .setFooter(`ID: ${message.author.id}`)
            .setThumbnail(Target.avatarURL({dynamic : true}))
            .setTimestamp()
            .addField('Joined at: ',`${moment(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}\n**-** ${moment(member.joinedAt).startOf('day').fromNow()}`,true)
            .addField("Created at: ",`${moment(Target.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}\n**-** ${moment(Target.CreatedAt).startOf('day').fromNow()}`, true)
            .addField("Permissions: ", `${permissions.join(', ')}`)
            .addField(`Roles [${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length}]`,`${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id }>`).join(" **|** ") || "No Roles"}`, true)
            .addField("Acknowledgements: ", `${acknowledgements}`, true);
            
        message.channel.send({ embeds: [embed]})

    }
})

