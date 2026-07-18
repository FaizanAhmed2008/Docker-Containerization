const form = document.getElementById('shorten-form');
const input = document.getElementById('url-input');
const resultBox = document.getElementById('result');
const shortLink = document.getElementById('short-link');
const copyBtn = document.getElementById('copy-btn');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const url = input.value.trim();
  if (!url) return;

  resultBox.hidden = true;
  buttonText('Shortening...');

  try {
    const response = await fetch('/api/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Unable to shorten URL');
    }

    shortLink.href = data.shortUrl;
    shortLink.textContent = data.shortUrl;
    resultBox.hidden = false;
  } catch (error) {
    alert(error.message);
  } finally {
    buttonText('Shorten URL');
  }
});

copyBtn.addEventListener('click', async () => {
  const link = shortLink.textContent;
  if (!link) return;

  try {
    await navigator.clipboard.writeText(link);
    copyBtn.textContent = 'Copied!';
    setTimeout(() => {
      copyBtn.textContent = 'Copy';
    }, 1500);
  } catch {
    alert('Clipboard access is unavailable.');
  }
});

function buttonText(text) {
  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.textContent = text;
}
