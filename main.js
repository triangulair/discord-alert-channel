const { Client, WebhookClient } = require('discord.js-selfbot-v13');

const client = new Client();
const webhookClient = new WebhookClient({
  url: "replace with the webhook URL"
});

client.on('ready', () => {
  console.log(`${client.user.username} is ready!`);
  console.log('Bot is running');
});

client.on('message', (msg) => {
  if (msg.author.id === 'User ID') {
    console.log('toto')
    const message_text_author = msg.content;
    console.log(message_text_author);
    webhookClient.send({
      content: message_text_author,
      username: 'alert bot'
    });
  }
  
});

client.login('Replace with your discord token');
