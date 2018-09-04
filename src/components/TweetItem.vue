<template>
  <div class="tweet-item">
      <Card>
      <Flex>
        <h5>Posted by: {{data.author.username}}</h5>
      </Flex>
      <br>
      <TextPara>{{data.text}}</TextPara>
      <Flex>
        <Row>
          <button>Like</button>
          <button>Reply</button>
          <button>comment</button>
        </Row>
        <button>Retwist</button>
      </Flex>
    </Card>
  </div>
</template>
<script>
import { TextPara, Card, Row, Flex } from '../theme/styles';

export default {
  components: {
    TextPara,
    Card,
    Row,
    Flex,
  },
  name: 'TweetItem',
  props: {
      data: {
        tweet: String,
        username: String
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
