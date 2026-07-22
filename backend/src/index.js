import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import urlRoutes from './routes/urlRoutes.js';
import { healthCheck } from './controllers/urlController.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const frontendDir = path.resolve(__dirname, '../../frontend');
app.use(express.static(frontendDir));
app.get('/', (req, res) => {
  res.sendFile(path.join(frontendDir, 'index.html'));
});
app.get('/health', healthCheck);

app.use('/api', urlRoutes);

export const startServer = async () => {
  try {
    await connectDB();
  } catch (error) {
    console.error('MySQL connection error:', error);
    console.log('Continuing without database for UI demo');
  }

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Access the server at http://localhost:${PORT}`);
  });
};

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  startServer();
}