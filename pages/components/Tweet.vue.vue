<script setup>
const userName = 'jerryjappinen'
const tweetId = 1537444796670701568
</script>

<template>
  <ComponentPage name="Tweet">
    <div class="tweets">
      <Tweet
        :user-name="userName"
        :tweet-id="tweetId"
      />

      <Tweet
        :user-name="userName"
        :tweet-id="tweetId"
        :dark="true"
      />
    </div>
  </ComponentPage>
</template>

<style lang="scss" scoped>

.tweets {
  .c-tweet {
    @include push-vertical;
  }
}

</style>
