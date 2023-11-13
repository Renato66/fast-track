
<script setup lang="ts">
const emit = defineEmits(['update:answer'])
const answer = ref('')
const props = defineProps({
  question: {
    required: true,
    type: String,
  },
  options: {
    required: true,
    type: Array as PropType<Array<string>>,
  },
})
const onSubmit = (_event: Event) => {
  if (!answer.value) return
  emit('update:answer', answer.value)

}
</script>

<template>
  <FForm @submit="onSubmit" title="Question">
    <p>{{ question }}</p>
    <FRadioList v-model="answer" :options="props.options" />
    <FButton type="submit" :disabled="!answer">Next</FButton>
  </FForm>
</template>
