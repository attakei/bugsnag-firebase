import { Bugsnag } from '@bugsnag/js';
/**
 * @todo This is stub. Implement it!
 */
export declare type BugsnagWrappers = {
    bugsnagClient: Bugsnag.Client;
};
/**
 * Configure bugsnag client and prepare wrapper functions per any events.
 *
 * @param apiKey Bugsnag API key
 */
export declare const configureBugsnag: (apiKey: string) => BugsnagWrappers;
