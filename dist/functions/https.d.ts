/// <reference types="express" />
/***************************************
 * For HTTP trigger functions
 */
import { Bugsnag } from '@bugsnag/js';
import { https, HttpsFunction, Request, Response, Runnable } from 'firebase-functions';
/**
 * Type alias for https.onCall handler
 */
export declare type HttpsCallable<D, R> = (data: D, ctx: https.CallableContext) => R;
/**
 * Core wrapper function for https.onCall
 *
 * @param client Bugsnag client instance
 * @param handler Main handler by user
 */
export declare const httpsOnCallWrapper: <D, R>(client: Bugsnag.Client, handler: HttpsCallable<D, R>) => HttpsCallable<D, R>;
/**
 * Module wrapper for `functions.https` to use likely firebase-functions module by user.
 */
export declare class HttpsModule {
    readonly client: Bugsnag.Client;
    constructor(client: Bugsnag.Client);
    onCall<D, R>(handler: HttpsCallable<D, R>): HttpsFunction & Runnable<any>;
    /**
     *
     * @todo Add test
     */
    onRequest(handler: (req: Request, res: Response) => HttpsFunction): HttpsFunction;
}
