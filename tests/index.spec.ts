import { configureBugsnag, BugsnagWrappers } from '~/index';

describe('Stub', () => {
  let wrapper: BugsnagWrappers;

  beforeEach(() => {
    wrapper = configureBugsnag('');
  });

  it('It is first test case', () => {
    expect(wrapper).toMatchObject({});
  });
});
