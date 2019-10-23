"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var js_1 = __importDefault(require("@bugsnag/js"));
/**
 * Configure bugsnag client and prepare wrapper functions per any events.
 *
 * @param apiKey Bugsnag API key
 */
exports.configureBugsnag = function (apiKey) {
    return {
        bugsnagClient: js_1.default(apiKey),
    };
};
