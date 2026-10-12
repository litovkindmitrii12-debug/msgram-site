// Set a verified release URL here to enable a platform's download link.
const downloads = {
  windows: null,
  linux: null,
  android: null,
};

for (const link of document.querySelectorAll('[data-platform]')) {
  const url = downloads[link.dataset.platform];
  if (url) {
    link.href = url;
    link.removeAttribute('aria-disabled');
    link.removeAttribute('aria-describedby');
    link.querySelector('span').textContent = '↓';
    link.closest('article').querySelector('.release-status').textContent = 'Доступно';
  }
}

const form = document.querySelector('#demo-form');
const input = document.querySelector('#message');
const messages = document.querySelector('#messages');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = input.value.trim();
  if (!value) {
    input.setCustomValidity('Напишите сообщение для демо.');
    input.reportValidity();
    return;
  }
  const bubble = document.createElement('div');
  bubble.className = 'bubble outgoing';
  // textContent keeps user input inert, including HTML-like strings.
  bubble.textContent = value;
  const time = document.createElement('small');
  time.textContent = 'Демо · только на этой странице';
  bubble.append(time);
  messages.append(bubble);
  // Keep the local demo bounded during long sessions.
  while (messages.querySelectorAll('.bubble').length > 12) {
    messages.querySelector('.bubble').remove();
  }
  messages.scrollTop = messages.scrollHeight;
  input.value = '';
  input.focus({ preventScroll: true });
});
input.addEventListener('input', () => input.setCustomValidity(''));
