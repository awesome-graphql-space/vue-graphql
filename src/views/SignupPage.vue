<template>
  <div class="hello">
    <div>
              <Title>Signup on twister</Title>
              <ApolloMutation
                :mutation="require('@/graphql/signup.gql')"
                :variables="{
                    username,
                    password,
                    displayName,
                }"
                :done="onDone"
                >
                <div slot-scope="{ mutate, loading, gqlError: error }">
                    <div v-if="error" class="error">{{ error.message }}</div>
                </div>
                <Input
                  placeholder="Display name"
                  type="text"
                  name="displayName"
                   v-model="displayName"
                />
                <Input
                  placeholder="Username"
                  type="text"
                  name="username"
                   v-model="username"
                />
                <Input
                  placeholder="Passowrd"
                  type="password"
                  name="password"
                   v-model="password"
                />
                 <Button
                    type="button"
                    slot-scope="{ mutate, loading, error }"
                    v-on:click="mutate()"
                  >
                    Sign up
                  </Button>
                <div>
                  <span>
                    Dont have an account?{" "}
                    <router-link to="/login">LOG IN</router-link>
                  </span>
                </div>
              </ApolloMutation>
            </div>
  </div>
</template>

<script>

import { ApolloMutation } from 'vue-apollo';
import { onLogin } from '../vue-apollo';
import { Button, Title, Form, Input } from '../theme/styles';
// import { AUTH_TOKEN } from '../constants';

export default {
  name: 'SignupPage',
  props: {
    msg: String,
  },
  components: {
    Button,
    Title,
    Form,
    Input,
    ApolloMutation,
  },
  data: () => ({
    displayName: '',
    username: '',
    password: '',
    loading: false,
    error: false,
    errMsg: '',
  }),
  watch: {
    // If already logged in redirect to other page
    me(value) {
      if (value) {
        this.redirect();
      }
    },
  },
  methods: {
    onDone(result) {
      alert('alert');
      console.log(result);
      if (!result.data.userLogin) return;
      const apolloClient = this.$apollo.provider.defaultClient;
      // Update token and reset cache
      const { token } = result.data.signup;
      onLogin(apolloClient, token);
    },
    redirect() {
      this.$router.replace({ name: 'tweet' });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
