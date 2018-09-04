import Vue from 'vue';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import VueApollo from 'vue-apollo';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { AUTH_TOKEN } from './constants';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

// initializing graphql http link
const httpLink = new HttpLink({ uri: 'http://localhost:3000/graphql' });
/*
const middlewareLink = setContext((_, { headers }) => {
  // get the authentication token from localstorage if it exists
  const token = localStorage.getItem(AUTH_TOKEN);

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `${token}`A: '',
    },
  };
});
*/
const middlewareLink = setContext(() => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      Authorization: `${token}`,
    },
  };
});

// Change your link assignment from
// const link = httpLink;
// to
const link = middlewareLink.concat(httpLink);

// adding httpLink to the context middleware
// const httpLinkAuth = middlewareLink.concat(httpLink);

// creating apollo client objext
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
  connectToDevTools: true,
});

const apolloProvider = new VueApollo({
  defaultClient: client,
});

// Install the vue plugin
Vue.use(VueApollo);

new Vue({
  provide: apolloProvider.provide(),
  router,
  store,
  render: h => h(App),
}).$mount('#app');
