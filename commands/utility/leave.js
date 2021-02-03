module.exports = {
    name: "leave",
    group: "utility",
    description: "Leaves the server",
        async run(client, message, args) {
        try{
            message.channel.send("bye :(")
            message.guild.leave();
        }catch(e) {
            throw e;
        }
    }
}
