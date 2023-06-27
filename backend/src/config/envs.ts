import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

export default function loadEnv() {
  function getPath(env: string) {
    if (env === 'test') return '.env.test';
    if (env === 'development') return '.env.development';
    return '.env';
  }

  const path = getPath(process.env.NODE_ENV);

  const currentEnvs = dotenv.config({ path });
  dotenvExpand.expand(currentEnvs);
}
