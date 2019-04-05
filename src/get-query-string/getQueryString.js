/**
 * @param  {Object} [props={}]
 * @return {string}
 */
export const getQueryString = props => {
  const queryString = Object.entries(props)
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
