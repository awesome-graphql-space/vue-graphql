<template>
    <div>
        <Title>Already have an account???</Title>
        <p v-if="error">{{errMsg}}</p>
        <div>
          <Input placeholder="Username" v-model="username" type="text" name="username" />
          <Input placeholder="Password" v-model="password" type="text" name="password" />
            <Button
              :disabled="loading"
              @click="login()"
            >
              Log In
            </Button>
          <div>
            <span>
              Dont have an account?
              <router-link to="/signup" >SIGN UP</router-link>
            </span>
          </div>
        </div>
    </div>
</template>

<script>
import { Button, Title, Form, Input } from '../theme/styles';
// import { onLogin } from '../vue-apollo';
import { LOGIN } from '../graphql/mutation';
import { AUTH_TOKEN } from '../constants';

export default {
  name: 'LoginPage',
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
    login() {
      console.log(this.username);

      this.loading = true;

      this.$apollo.mutate({
        // Mutation
        mutation: LOGIN,
        // Parameters
        variables: {
          username: this.username,
          password: this.password,
        },
      }).then((res) => {
        // Update token and reset cache
        console.log(res.data.login.token);
        localStorage.setItem(AUTH_TOKEN, res.data.login.token);

        this.loading = false;
        this.error = false;
        this.errMsg = '';
      }).catch((error) => {
        if (this.errMsg) this.error = error.graphQLErrors[0].message;
        this.loading = false;
        this.error = true;
      });

      // Update cache
      /*
        apolloClient.writeQuery({
          query: USER_CURRENT,
          data: {
            me: result.data.login.user,
          },
        });
      */
    },
    redirect() {
      this.$router.replace(this.$route.params.wantedRoute || { name: 'home' });
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
