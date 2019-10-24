import bugsnag, { Bugsnag } from '@bugsnag/js';
import { https } from 'firebase-functions';
import * as t from '../src/functions/https';

const stubRegular: t.HttpsCallable<{}, boolean> = (data, ctx) => {
  return true;
};

const stubThrowError: t.HttpsCallable<{}, boolean> = (data, ctx) => {
  throw new Error('Stub-error')
};

describe('https callable functions', () => {
  it('error is not thrown', () => {
    const client = bugsnag('mock-api-key');
    const wrapped = t.httpsOnCallWrapper(client, stubRegular);
    expect(wrapped({}, {} as https.CallableContext)).toBeTruthy();
  });

  it('catch error', () => {
    const mockedClient = {
      notify: (error: Bugsnag.NotifiableError) => error,
    }
    const mockedNotify = jest.spyOn(mockedClient, 'notify');
    mockedNotify.mockImplementation((error: Bugsnag.NotifiableError) => error);
    const wrapped = t.httpsOnCallWrapper(mockedClient as Bugsnag.Client, stubThrowError);
    expect(() => wrapped({}, {} as https.CallableContext)).toThrowError(Error)
    expect(mockedNotify).toBeCalled();
  });
});
