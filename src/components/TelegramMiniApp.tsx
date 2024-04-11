import React from 'react';

class TelegramMiniApp extends React.Component {
  constructor(props: any) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    // Load the Telegram Web App script
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-web-app.js";
    script.async = true;
    document.body.appendChild(script);
  }

  sendMessage() {
    // Replace 'YOUR_BOT_TOKEN' with your actual bot token
    const botToken = '7078845866:AAGeSfcH1P-Bd4xAiV6BQFg0x_xl0sW_dUc';
    // Replace 'YOUR_CHAT_ID' with your actual chat ID
    const chatId = 'YOUR_CHAT_ID';
    // Message to send
    const message = 'Hello World from Telegram Minfffiapp!';

    // Send the message using the Telegram API
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div>
        <h1>Hello World Telegram Miniapp</h1>
        <button onClick={this.sendMessage}>Send Hello World</button>
      </div>
    );
  }
}

export default TelegramMiniApp;
