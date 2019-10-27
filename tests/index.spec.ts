import * as t from '../src';

describe('configureBugsnag()', () => {
  it('accpet apiKey', () => {
    t.configureBugsnag('api-key');
  });

  describe('accpet config object', () => {
    it('need apiKey', () => {
      t.configureBugsnag({apiKey: 'your-api-key'});
    });

    it('use other parameters', () => {
      t.configureBugsnag({
        apiKey: 'your-api-key',
        releaseStage: 'develop',
      });
    });
  });
});
