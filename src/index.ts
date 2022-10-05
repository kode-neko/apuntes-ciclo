import app from './server';
import {
  console, envSelect, getEnv, i18nextConfig,
} from './utils';

i18nextConfig();

try {
  envSelect(getEnv());
  console.log('port', process.env.SERVER_PORT);
<<<<<<< HEAD
  app.listen(process.env.PORT || process.env.SERVER_PORT);
=======
  app.listen(process.env.SERVER_PORT);
>>>>>>> dev
} catch (err) {
  console.error(err);
}
