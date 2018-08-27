<template>
  <ApolloQuery
    :query="require('../graphql/tweets.gql')"
  >
    <template slot-scope="{ result: { loading, error, data } }">

      <!-- Loading -->
      <div v-if="loading" class="loading apollo">Loading...</div>

      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occured</div>

      <!-- Result -->
      <div v-else-if="data && !loading" class="result apollo">
        Username {{ data.hello }}
        <div v-for="t in data.tweets" :key="t.id">
          <TweetItem>{{t.text}}</TweetItem>

        </div>
       </div>

      <!-- No result -->
      <div v-else class="no-result apollo">No result :(</div>
    </template>
  </ApolloQuery>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import TweetItem from '@/components/TweetItem.vue';
import { ApolloQuery } from 'vue-apollo';


export default {
  name: 'TweetPage',
  components: {
    TweetItem
  } 
};
</script>
