import test from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { createServer } from 'node:http';
import { app } from '../src/index.js';

test('POST /api/shorten creates a short URL', async () => {
  const server = createServer(app);
  server.listen(0);
  await once(server, 'listening');

  try {
    const address = server.address();
    const port = typeof address === 'object' && address ? address.port : 0;
    const response = await fetch(`http://127.0.0.1:${port}/api/shorten`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: 'https://example.com' }),
    });

    assert.equal(response.status, 201);
    const body = await response.json();
    assert.ok(body.shortUrl);
    assert.match(body.shortUrl, /\/[^/]+$/);
  } finally {
    server.close();
  }
});
