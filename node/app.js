const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const ENV = process.env.ENV_VALUE || "No env set";
const HOSTNAME = process.env.HOSTNAME || require('os').hostname();

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Node App</title>
        <style>
          body { font-family: sans-serif; text-align: center; margin-top: 50px; }
          h1 { color: #333; }
        </style>
      </head>
      <body>
        <h1>Hello from Simple App (Node)</h1>
        <p><strong>Environment:</strong> ${ENV}</p>
        <p><strong>Container:</strong> ${HOSTNAME}</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => console.log(`Node Hello listening on ${PORT}`));
