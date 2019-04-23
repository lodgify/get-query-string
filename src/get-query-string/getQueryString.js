/**
 * @param  {Object} [parameters={}]
 * @return {string}
 */
export const getQueryString = parameters => {
  const queryString = Object.entries(parameters)
    .reduce(
      (accumulator, [key, value]) => [
        ...accumulator,
        ...(typeof value !== 'undefined' && value !== ''
          ? [`${key}=${value}`]
          : []),
      ],
      []
    )
    .join('&');

  return !!queryString ? '?' + queryString : '';
};
