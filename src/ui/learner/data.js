// import { getAuthenticatedHttpClient, getAuthenticatedUser } from '@edx/frontend-platform/auth';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';

const DATA_URL = 'http://localhost:18000/api/nexblocks/v0/instance-data/block-v1:edX+ART150+3T2020+type@nexblock+block@4ed0c8a2471f44bd83c0dcabc9b9b86e';

// eslint-disable-next-line import/prefer-default-export
export async function getOrders() {
  const httpClient = getAuthenticatedHttpClient();
  // const { username } = getAuthenticatedUser();

  const { data } = await httpClient.get(DATA_URL, {
    params: {},
  });
  return { data };
}
