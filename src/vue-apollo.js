import { AUTH_TOKEN } from './constants';

function isUnauthorizedError(error) {
  const { graphQLErrors } = error;
  return (graphQLErrors && graphQLErrors.some(e => e.message === 'Unauthorized'));
}

// Manually call this when user log in
export function onLogin(apolloClient, token) {
  console.log(token);
  localStorage.setItem(AUTH_TOKEN, token);
  // if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient);
  try {
    apolloClient.resetStore();
  } catch (e) {
    if (!isUnauthorizedError(e)) {
      console.log('%cError on cache reset (login)', 'color: orange;', e.message);
    }
  }
}

// Manually call this when user log out
export async function onLogout(apolloClient) {
  localStorage.removeItem(AUTH_TOKEN);
  // if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient);
  try {
    await apolloClient.resetStore();
  } catch (e) {
    if (!isUnauthorizedError(e)) {
      console.log('%cError on cache reset (logout)', 'color: orange;', e.message);
    }
  }
}
