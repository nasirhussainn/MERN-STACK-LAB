import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('home.html', { root: './html' });
});


router.get('/home', (req, res) => {
  res.sendFile('home.html', { root: './html' });
});

router.get('/create_my_cv', (req, res) => {
  res.sendFile('input.html', { root: './html' });
});

export default router;
