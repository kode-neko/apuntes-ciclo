import { urls } from '../../config';

function urlsHelper(val: string): string {
  return (urls as Record<string, string>)[val];
}

export default urlsHelper;
