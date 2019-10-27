import bugsnag, { Bugsnag } from '@bugsnag/js';
import { HttpsModule } from './functions/https';

/**
 * @todo This is stub. Implement it!
 */
export type BugsnagWrapperModules = {
  https: HttpsModule;
};

/**
 * Configure bugsnag client and prepare wrapper functions per any events.
 *
 * @param apiKey Bugsnag API key
 */
export const configureBugsnag = (apiConfig: string | Bugsnag.IConfig): BugsnagWrapperModules => {
  const client = bugsnag(apiConfig);
  return {
    https: new HttpsModule(client),
  };
};
