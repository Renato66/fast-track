<script setup lang="ts">
import FCard from '~/components/atoms/FCard.vue'
const emit = defineEmits(['submit'])
const props = defineProps(FCard.props)

</script>
<template>
  <FCard :title="props.title" :description="props.description">
    <form @submit.prevent="emit('submit', $event)">
      <slot></slot>
    </form>
  </FCard>
</template>