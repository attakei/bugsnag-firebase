"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_functions_1 = require("firebase-functions");
/**
 * Core wrapper function for https.onCall
 *
 * @param client Bugsnag client instance
 * @param handler Main handler by user
 */
exports.httpsOnCallWrapper = (client, handler) => {
    return async (data, ctx) => {
        try {
            const promise = new Promise((resolve, reject) => {
                try {
                    const result = handler(data, ctx);
                    resolve(result);
                }
                catch (err) {
                    reject(err);
                }
            });
            return await promise
                .catch(err => {
                throw err;
            });
        }
        catch (err) {
            client.notify(err);
            throw err;
        }
    };
};
// export const httpsOnRequestWrapper = (req: https.Request, res: https.R) 
/**
 * Module wrapper for `functions.https` to use likely firebase-functions module by user.
 */
class HttpsModule {
    constructor(client) {
        this.client = client;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onCall(handler) {
        return firebase_functions_1.https.onCall(exports.httpsOnCallWrapper(this.client, handler));
    }
    /**
     *
     * @todo Add test
     */
    onRequest(handler) {
        return firebase_functions_1.https.onRequest((req, res) => {
            try {
                handler(req, res);
            }
            catch (err) {
                this.client.notify(err);
                throw err;
            }
        });
    }
}
exports.HttpsModule = HttpsModule;
