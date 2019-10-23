import bugsnag, { Bugsnag } from '@bugsnag/js';

/**
 * @todo This is stub. Implement it!
 */
export type BugsnagWrappers = {
  bugsnagClient: Bugsnag.Client;
};

/**
 * Configure bugsnag client and prepare wrapper functions per any events.
 *
 * @param apiKey Bugsnag API key
 */
export const configureBugsnag = (apiKey: string): BugsnagWrappers => {
  return {
    bugsnagClient: bugsnag(apiKey),
  };
};
