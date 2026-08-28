from flask import Flask
import os, socket

app = Flask(__name__)

ENV = os.getenv("ENV_VALUE", "No env set")
HOSTNAME = socket.gethostname()

@app.get("/")
def hello():
    return f"""
    <html>
      <head>
        <title>Python Flask App</title>
        <style>
          body {{ font-family: sans-serif; text-align: center; margin-top: 50px; }}
          h1 {{ color: #333; }}
        </style>
      </head>
      <body>
        <h1>Hello from Simple App (Python Flask)</h1>
        <p><strong>Environment:</strong> {ENV}</p>
        <p><strong>Container:</strong> {HOSTNAME}</p>
      </body>
    </html>
    """

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=4000)
