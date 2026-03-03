import express, { Router } from 'express';

const router: Router = express.Router();

router.get('/ready', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'gateway/ready' });
});

export default router;
