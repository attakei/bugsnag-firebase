import bugsnag from '@bugsnag/js';
import { https } from 'firebase-functions';
import * as t from '../src/functions/https';

const stubRegular: t.HttpsCallable<{}, boolean> = (data, ctx) => {
  return true;
};

describe('https functions', () => {
  it('error is not thrown', () => {
    const client = bugsnag('mock-api-key');
    const wrapped = t.httpsOnCallWrapper(client, stubRegular);
    expect(wrapped({}, {} as https.CallableContext)).toBeTruthy();
  });
});
