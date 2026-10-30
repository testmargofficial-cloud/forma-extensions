import express from 'express';

const app = express();
app.disable('x-powered-by');
app.use(express.json({ limit: '1mb' }));

app.get('/health', (_req, res) => res.json({ ok: true }));
app.get('/api/hello', (_req, res) => res.json({ message: 'Forma Express starter.' }));

const port = Number(process.env.PORT || 3000);
app.listen(port, '127.0.0.1', () => {
  console.log(`API on http://127.0.0.1:${port}`);
});
