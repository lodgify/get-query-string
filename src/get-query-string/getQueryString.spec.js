import { getQueryString } from './getQueryString';

describe('getQueryString', () => {
  it('should return the right string', () => {
    const actual = getQueryString({
      test: 1,
      hello: 'hello',
      dontIncludeEmptyStrings: '',
      dontIncludeUndefined: undefined,
      include0: 0,
      includeFalse: false,
    });

    expect(actual).toBe(`?test=1&hello=hello&include0=0&includeFalse=false`);
  });
});
