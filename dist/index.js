"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const js_1 = __importDefault(require("@bugsnag/js"));
const https_1 = require("./functions/https");
/**
 * Configure bugsnag client and prepare wrapper functions per any events.
 *
 * @param apiKey Bugsnag API key
 */
exports.configureBugsnag = (apiConfig) => {
    const client = js_1.default(apiConfig);
    return {
        https: new https_1.HttpsModule(client),
    };
};
