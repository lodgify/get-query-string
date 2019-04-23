# Get an http query string from a parameters object

A simple helper to get a query string from an object.

## Install

`$ npm install @lodgify/get-query-string`

## Usage
```js
import { getQueryString } from '@lodgify/get-query-string';

const parameters = {
      test: 1,
      hello: 'hello',
      dontIncludeEmptyStrings: '',
      dontIncludeUndefined: undefined,
      include0: 0,
      includeFalse: false,
    }

getQueryString(parameters);
```

## Output

`?test=1&hello=hello&include0=0&includeFalse=false`

## Contributing

See [contributing](https://github.com/lodgify/get-query-string/blob/master/docs/CONTRIBUTING.md).
