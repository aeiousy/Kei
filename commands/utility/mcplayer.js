const mojang = require('mojang-api');

module.exports = {
    name: 'mcplayer',
    description: 'Diplays player\'s name, uuid, skin, cape and name history',
    group: "utility",
    args: '<uuid>',
    run: async (client, message, args) => {
        //check that the uuid is sent
        if(!args.length) {
            message.reply('please specify the player\'s uuid `click here for the uuid converter` https://mcuuid.net/');
            return;
        }
        //check that uuid exists
        mojang.profile(args[0], (err, resp) => {
            if(err) {
                message.reply('that player\'s uuid does not exist `click here for the uuid converter` https://mcuuid.net/');
                return;
            }
            //get name history
            mojang.nameHistory(args[0], (err, resp1) => {
                if(err) {
                    message.reply('there was an error trying to retrieve the data');
                    console.error(err);
                    return;
                }

                let nameHistory = '';
                resp1.forEach(element => {
                    nameHistory += element.name + ', ';
                });
                nameHistory = nameHistory.slice(0, nameHistory.length - 2);
                //create embed message
                let embedMessage = {
                    color: '#00b300',
                    title: resp.name,
                    author: {
                        name: 'Minecraft info',
                        icon_url: '',
                        url: 'https://github.com/Jystro/Minecraft-info-bot'
                    },
                    description: resp.name + "'s profile",
                    thumbnail: {
                        url: 'https://crafatar.com/avatars/' + resp.id + '.png'
                    },
                    fields: [{
                        name: 'Name',
                        value: resp.name
                    },
                    {
                        name: 'Uuid',
                        value: resp.id
                    },
                    {
                        name: 'Skin',
                        value: 'https://crafatar.com/skins/' + resp.id + '.png'
                    },
                    {
                        name: 'Cape',
                        value: 'https://crafatar.com/capes/' + resp.id + '.png'
                    },
                    {
                        name: 'Name history',
                        value: nameHistory
                    }],
                    image: {
                        url: 'https://crafatar.com/renders/body/' + resp.id + '.png'
                    },
                    timestamp: new Date(),
                    footer: {
                        text: 'Minecraft info bot'
                    }
                };
                //send embed
                message.channel.send({  embed: embedMessage  });
            });
        });
    }
}
