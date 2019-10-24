/***************************************
 * For HTTP trigger functions
 */
import { Bugsnag } from '@bugsnag/js';
import { https, HttpsFunction, Request, Response, Runnable } from 'firebase-functions';

/**
 * Type alias for https.onCall handler
 */
export type HttpsCallable<D, R> = (data: D, ctx: https.CallableContext) => R;


/**
 * Core wrapper function for https.onCall
 * 
 * @param client Bugsnag client instance
 * @param handler Main handler by user
 */
export const httpsOnCallWrapper = <D, R>(client: Bugsnag.Client, handler: HttpsCallable<D, R>): HttpsCallable<D, R> => {
  return (data: D, ctx: https.CallableContext): R => {
    try {
      return handler(data, ctx)
    } catch (err) {
      client.notify(err);
      throw err;
    }
  }
}

// export const httpsOnRequestWrapper = (req: https.Request, res: https.R) 

/**
 * Module wrapper for `functions.https` to use likely firebase-functions module by user.
 */
export class HttpsModule {
  public readonly client: Bugsnag.Client;

  constructor(client: Bugsnag.Client) {
    this.client = client;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public onCall<D, R>(handler: HttpsCallable<D, R>): HttpsFunction & Runnable<any> {
    return https.onCall(httpsOnCallWrapper(this.client, handler))
  }

  /**
   * 
   * @todo Add test
   */
  public onRequest(handler: (req: Request, res: Response) => HttpsFunction): HttpsFunction {
    return https.onRequest((req, res) => {
      try {
        handler(req, res);
      } catch (err) {
        this.client.notify(err);
        throw err;
      }
    });
  }
}
