
import gql from 'graphql-tag';


export const TWEETS = gql`
    query {
      tweets {
        id
      text
      upload
      slug
      views
      author{
        id
        username
        displayName
      }
      }
    }
`;

export const GET_AUTH_STATUS = gql`
    query getAuthStatus($id: String!) {
      getAuthStatus(id: $id) @client{
        id
        token
        loggedIn
      }
    }
`;


export const GET_LOGIN_STATUS = gql`
    query {
      getLoginStatus @client
    }
`;
*/
