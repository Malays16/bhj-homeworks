document.addEventListener('DOMContentLoaded', () => {
  const chatWidget = document.querySelector('.chat-widget');
  const messagesContainer = document.getElementById('chat-widget__messages');
  const input = document.getElementById('chat-widget__input');

  chatWidget.addEventListener('click', () => {
    chatWidget.classList.toggle('chat-widget_active');
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && input.value.trim() !== '') {
      sendMessage('message_client', input.value);
      input.value = '';
      setTimeout(sendRobotResponse, 1000);
    }
  });

  function sendMessage(className, text) {
    const message = createMessage(className, text);
    messagesContainer.appendChild(message);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function createMessage(className, text) {
    const message = document.createElement('div');
    message.classList.add('message', className);
    const time = document.createElement('div');
    time.classList.add('message__time');
    time.textContent = getTime();
    const messageText = document.createElement('div');
    messageText.classList.add('message__text');
    messageText.textContent = text;
    message.appendChild(time);
    message.appendChild(messageText);
    return message;
  }

  function getTime() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  function sendRobotResponse(){
    const responses = ['Спасибо, мы передадим ваш запрос', 'Только не сегодня', 'Это невозможно', 'Подумаю'];
    const randomIndex = Math.floor(Math.random() * responses.length);
    sendMessage('', responses[randomIndex]);
  }
});