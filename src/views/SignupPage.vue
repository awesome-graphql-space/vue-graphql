<template>
    <div>
          <Title>Signup on twister</Title>
          <p v-if="error">{{errMsg}}</p>
          <div>
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
            <Button :disabled="loading"
            @click="signup()"
            >
              Sign Up
            </Button>
          </div>  
          <div>
            <span>
              Dont have an account?
              <router-link to="/login">LOG IN</router-link>
            </span>
          </div>
  </div>
</template>

<script>

// import { ApolloMutation } from 'vue-apollo';
// import { onLogin } from '../vue-apollo';

import { AUTH_TOKEN } from '../constants';
import { SIGNUP } from '../graphql/mutation';
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
    signup () {
      console.log(this.username);
      this.loading = true;
      this.$apollo.mutate({
        // Mutation
      mutation: SIGNUP,
        // Parameters
      variables: {
        displayName: this.displayName,
        username: this.username,
        password: this.password,
      },
  }).then((res) => {
        // Update token and reset cache
      console.log(res.data.signup.token);
      console.log(res)
      localStorage.setItem(AUTH_TOKEN, res.data.signup.token);

      this.loading = false;
      this.error = false;
      this.errMsg = '';
      console.log('hhh')
      this.$router.push({ name: 'tweet' });
  }).catch((error) => {
      console.log(JSON.stringify(error))
      if (this.errMsg) this.error = error.graphQLErrors[0].message;
      this.loading = false;
      this.error = true;
  });
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
