# Get string from query

A simple helper to get a string from a query.

## Install

`$ npm install @lodgify/get-query-string`

## Usage
```js
import { getQueryString } from '@lodgify/get-query-string';

const props = {
      test: 1,
      hello: 'hello',
      dontIncludeEmptyStrings: '',
      dontIncludeUndefined: undefined,
      include0: 0,
      includeFalse: false,
    }

getQueryFromString(props);
```

## Contributing

See [contributing](https://github.com/lodgify/get-query-string/blob/master/docs/CONTRIBUTING.md).
