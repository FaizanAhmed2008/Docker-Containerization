import crypto from 'crypto';

const urlStore = new Map();

const normalizeUrl = (inputUrl) => {
  const trimmed = inputUrl.trim();
  if (!trimmed) {
    throw new Error('A URL is required.');
  }

  if (!/^https?:\/\//i.test(trimmed)) {
    return `https://${trimmed}`;
  }

  return trimmed;
};

export const shortenUrl = (req, res) => {
  try {
    const { url } = req.body;
    const normalizedUrl = normalizeUrl(url);
    const shortCode = crypto.randomBytes(3).toString('hex');
    const baseUrl = process.env.APP_BASE_URL || `http://localhost:${process.env.PORT || 3000}`;
    const shortUrl = `${baseUrl}/${shortCode}`;

    urlStore.set(shortCode, normalizedUrl);

    return res.status(201).json({
      shortUrl,
      shortCode,
      originalUrl: normalizedUrl,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const redirectUrl = (req, res) => {
  const { code } = req.params;
  const originalUrl = urlStore.get(code);

  if (!originalUrl) {
    return res.status(404).send('Short URL not found');
  }

  return res.redirect(originalUrl);
};

export const healthCheck = (req, res) => {
  return res.json({ status: 'ok' });
};
