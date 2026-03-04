import express from 'express';

const router = express.Router();

// ejemplo de endpoint de prueba
router.get('/test', (req, res) => {
  res.json({ message: 'API backend funcionando correctamente' });
});

export default router;
