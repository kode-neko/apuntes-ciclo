import app from './server';
import {
  console, i18nextConfig,
} from './utils';

i18nextConfig();

try {
  console.log('port', process.env.PORT);
  app.listen(process.env.PORT || '3000');
} catch (err) {
  console.error(err);
}
