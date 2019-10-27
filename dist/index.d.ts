import { Bugsnag } from '@bugsnag/js';
import { HttpsModule } from './functions/https';
/**
 * @todo This is stub. Implement it!
 */
export declare type BugsnagWrapperModules = {
    https: HttpsModule;
};
/**
 * Configure bugsnag client and prepare wrapper functions per any events.
 *
 * @param apiKey Bugsnag API key
 */
export declare const configureBugsnag: (apiConfig: string | Bugsnag.IConfig) => BugsnagWrapperModules;
