<script setup lang="ts">
const props = defineProps({
  title: {
    default: '',
    type: String
  },
  description: {
    default: '',
    type: String
  },
})
</script>

<template>
  <div class="card">
    <h1 class="title" v-if="props.title">{{ props.title }}</h1>
    <p class="description" v-if="props.description">{{ props.description }}</p>
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  padding: 20px;
  max-width: 320px;
  border-radius: 10px;
  background: white;
  box-shadow: -3px 0px 5px 3px #47474782;
  display: flex;
  flex-flow: column;
  gap: 14px;

  >.title {
    font-size: 20px;
    margin: 0;
  }

  >.description {
    font-size: 14px;
    margin: 0;
  }
}
</style>