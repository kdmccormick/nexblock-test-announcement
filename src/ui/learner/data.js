// import { getAuthenticatedHttpClient, getAuthenticatedUser } from '@edx/frontend-platform/auth';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';
import { camelCaseObject } from '@edx/frontend-platform';

const DATA_URL = 'http://localhost:18000/api/courses/v1/courses/';

// eslint-disable-next-line import/prefer-default-export
export function getOrders(callback) {
  const httpClient = getAuthenticatedHttpClient();
  // const { username } = getAuthenticatedUser();

  const transformedResults = (response) => {
    const results = camelCaseObject(response.data.results);
    return results.map(
      ({
        name, courseId, start, end,
      }) => ({
        name, courseId, start, end,
      }),
    ); // google es6 object destructuring
  };

  httpClient.get(DATA_URL, {
    params: {},
  }).then(
    response => callback(transformedResults(response)),
  );
}
