<template>
  <div class="tweet-box">
      <Section id="twitter">
        <div>
          <TextArea
            ref="tweets"
            placeholder="Write something new ..."
            :style="active ? { height: '100px' } : { height: '25px' }" 
            @focus.native="active = true"
            @blur.native="active = false"
            @input.native="updateValue"
            :value="value"
            v-model="tweets"/>
            <br/>
            <Flex>
              <span>Characters Left: {{ remainingCharacters }}</span>
              <Row>
                <Button v-if="active" v-on:click="post">Tweet</Button>
              </Row>
            </Flex>
        </div>
    </Section>
  </div>
</template>

<script>
import { Button, TextArea, Section, Flex, Row } from '../theme/styles';
import { POST } from '../graphql/mutation';

export default {
  name: 'TweetBox',
  components: {
    Button,
    TextArea,
    Section,
    Flex,
    Row,
  }, 
  props: {
    limit: {
      type: Number,
      default: 140,
    },
    value: {
      type: String,
    },
  },
  data() {
    return { 
      query: '',
      active: false,
      tweets: 'something'
    }
  },
  computed:{
    remainingCharacters() {
      return this.limit - this.tweets.length;
    }
  },
  methods:{
    updateValue(e) {
      this.$emit(`input`, e.target.value);
    },
    post () {
      this.$apollo
        .mutate({
          mutation: POST,
          variables: {
            id: this.id,
            text: this.text
          },
          update: (store, { data: { post } }) => {
            // read data from cache for this query
            const data = store.readQuery({ query: require('../graphql/tweets.gql') })
            // add new post from the mutation to existing posts
            data.tweets.push(post)
            // write data back to the cache
            store.writeQuery({ query: require('../graphql/tweets.gql'), data });
          },
        })
        .then((response) => {
          // redirect to all posts
          this.$router.push('/tweet');
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
