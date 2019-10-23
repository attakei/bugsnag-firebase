import { configureBugsnag, BugsnagWrappers } from '~/index';

describe('Stub', () => {
  let wrapper: BugsnagWrappers;

  beforeEach(() => {
    wrapper = configureBugsnag('mocked-api-key');
  });

  it('It is first test case', () => {
    expect(wrapper).toHaveProperty('bugsnagClient');
  });
});
