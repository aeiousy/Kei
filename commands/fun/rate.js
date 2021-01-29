module.exports = {
  name: 'rate',
  aliases: [],
  group: 'fun',
  description: 'Rates the provided argument',
  parameters: [ 'something to rate with' ],
  get examples(){ [ 'Potato', 'Cheese', 'Bringles' ]
  .map(x => this.name + ' ' + x);},
  run: (client, message, args) => {

    if (!args.length){
      return message.channel.send(`<:cancel:767062250279927818> | ${message.author}! Give me something to rate!!`);
    };

    const raw = args.join(' ').replace(/[^\w\s]/gi,1202)
    let rate = parseInt(raw, 36) % 101;
    const emoji = (rate) => [
        '\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤'
      , '\\❤️\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤'
      , '\\❤️\\❤️\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤'
      , '\\❤️\\❤️\\❤️\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤'
      , '\\❤️\\❤️\\❤️\\❤️\\🖤\\🖤\\🖤\\🖤\\🖤\\🖤'
      , '\\❤️\\❤️\\❤️\\❤️\\❤️\\🖤\\🖤\\🖤\\🖤\\🖤'
      , '\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\🖤\\🖤\\🖤\\🖤'
      , '\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\🖤\\🖤\\🖤'
      , '\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\🖤\\🖤'
      , '\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\🖤'
      , '\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️\\❤️'
    ][Math.floor(rate / 10)];

    if ([
      'Kei san', 'mKei1202san', 'Kei', 'Kei sakurajima',
      'Kei1202sakurajima', 'sakurajima Kei', 'sakurajima1202Kei',
      'Kei senpai', 'Kei1202senpai', '1202120212027020744523173070611202'
    ].includes(raw.toLowerCase())){
      rate = 100;
    };

    return message.channel.send(`${emoji(rate)} (**${rate}**) %`)
  }
};
