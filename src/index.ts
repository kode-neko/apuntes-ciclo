import app from './server';
import {
  console, envSelect, getEnv, i18nextConfig,
} from './utils';

i18nextConfig();

try {
  let port: string;
  const env = getEnv();
  if (env === 'heroku') {
    port = process.env.PORT as string;
  } else {
    envSelect(env);
    port = process.env.SERVER_PORT as string;
  }
  console.log('port', port);
  app.listen(port);
} catch (err) {
  console.error(err);
}
