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
  it('error is not thrown', async (done) => {
    const client = bugsnag('mock-api-key');
    const wrapped = t.httpsOnCallWrapper(client, stubRegular);
    expect(await wrapped({}, {} as https.CallableContext)).toBeTruthy();
    done();
  });

  it('catch error', async (done) => {
    const mockedClient = {
      notify: (error: Bugsnag.NotifiableError) => error,
    }
    const mockedNotify = jest.spyOn(mockedClient, 'notify');
    mockedNotify.mockImplementation((error: Bugsnag.NotifiableError) => error);
    const wrapped = t.httpsOnCallWrapper(mockedClient as Bugsnag.Client, stubThrowError);
    await wrapped({}, {} as https.CallableContext)
      .then(() => {
        fail('Cannot access it');
      })
      .catch(err => {
        expect(String(err)).toBe('Error: Stub-error');
      })
    done();
  });

  it('catch reject', async (done) => {
    const mockedClient = {
      notify: (error: Bugsnag.NotifiableError) => error,
    }
    const mockedNotify = jest.spyOn(mockedClient, 'notify');
    const stubTarget: t.HttpsCallable<{}, Promise<void>> = (data, ctx) => {
      return new Promise((_, reject) => reject(new Error('Stub-error')));
    }; 
    const wrapped = t.httpsOnCallWrapper(mockedClient as Bugsnag.Client, stubTarget);
    mockedNotify.mockImplementation((error: Bugsnag.NotifiableError) => error);
    await wrapped({}, {} as https.CallableContext)
      .then(() => {
        fail('Cannot access it');
      })
      .catch(err => {
        expect(String(err)).toBe('Error: Stub-error');
      })
    done();
  });
});
