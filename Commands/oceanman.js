
const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "oceanman",
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        message.channel.send('OCEAN MAN 🌊 😍 Take me by the hand ✋ lead me to the land that you understand 🙌 🌊 OCEAN MAN 🌊 😍 The voyage 🚲 to the corner of the 🌎 globe is a real trip 👌 🌊 OCEAN MAN 🌊 😍 The crust of a tan man 👳 imbibed by the sand 👍 Soaking up the 💦 thirst of the land 💯');
    }
})
