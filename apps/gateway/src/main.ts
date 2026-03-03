import app from './app.js';
import pino from 'pino';

const logger = pino({ name: 'gateway' });
const port = Number(process.env.PORT || 3000);

app.listen(port, () => {
  logger.info(`gateway listening on: http://localhost:${port}`);
});
