<script setup lang="ts">
const props = defineProps({
  loading: {
    default: false,
    type: Boolean,
  },
  score: {
    default: 0,
    type: Number,
  },
  betterThenPercentage: {
    default: 0,
    type: Number,
  },
})
</script>

<template>
  <FCard>
    <FLoading v-if="props.loading"></FLoading>
    <div v-else>
      <span v-if="props.score">
        You got {{ props.score }} right answers
        <span v-if="props.betterThenPercentage !== 0">
          and you were better then {{ props.betterThenPercentage }} of the players
        </span>
        !
      </span>
      <span v-else>
        You got no right answers =/
      </span>
    </div>
    <FButton to="/">
      Retry
    </FButton>
  </FCard>
</template>