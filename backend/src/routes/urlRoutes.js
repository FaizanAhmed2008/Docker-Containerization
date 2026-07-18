import express from 'express';
import { shortenUrl, redirectUrl, healthCheck } from '../controllers/urlController.js';

const router = express.Router();

router.get('/health', healthCheck);
router.post('/shorten', shortenUrl);
router.get('/:code', redirectUrl);

export default router;
