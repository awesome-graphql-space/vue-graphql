<template>
  <div class="tweet-box">
    <div>
          <Section id="twitter">
            <div>
              <TextArea
                placeholder="Write something new ..."
                v-bind:style="{ 'height': showButtons ? '100' : '10' }"
                onChange=""
                onFocus=""
                v-model="title"
              />
                  <br/>
                  <Flex>
                    <span>Characters Left:</span>
                    <Row>
                    <Button
                      :disabled="remainingChar() === 140 || remainingChar() < 0"
                      v-on:click="">Tweet</Button>
                    </Row>
                  </Flex>
            </div>
          </Section>
        )}
       </div>
  </div>
</template>

<script>
import { Button, Title, TextArea, Section, Flex } from '../theme/styles';

export default {
  name: 'TweetBox',
  props: {
    msg: String,
  },
  data: {
    return {
      
    }
  }  
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
