const { Client, WebhookClient } = require('discord.js-selfbot-v13');

const client = new Client();
const webhookClient = new WebhookClient({
  url: "https://discord.com/api/webhooks/1182726746131398846/nlKIXZOEYKuHpK-a9KCPMKyKpYhT9qActCP6R4AYU4XUGAzJBz1bKbFqGK8az5DdQDy_"
});

client.on('ready', () => {
  console.log(`${client.user.username} is ready!`);
  console.log('Bot is running');
});

client.on('message', (msg) => {
  if (msg.author.id === '899617601838276608') {
    console.log('toto')
    const message_text_author = msg.content;
    console.log(message_text_author);
    webhookClient.send({
      content: message_text_author,
      username: 'alert bot'
    });
  }

});

client.login('REMOVE');
