
<script setup lang="ts">
import uidGenerator from '~/utils/uid'
export type RadioOption = {
  id: string,
  text: string
}

const props = defineProps({
  options: {
    required: true,
    type: Array as PropType<Array<string>>,
  },
  modelValue: {
    default: null,
    type: String
  },
  name: {
    default: null,
    type: String
  },
})

const name = computed(() => uidGenerator(props.name))
const emit = defineEmits(['update:modelValue'])
const onClick = (id: string) => {
  emit('update:modelValue', id)
}

const options = computed(() => props.options.map(option => ({ text: option, checked: option === props.modelValue })))

const getChar = (add: number): string => String.fromCharCode('A'.charCodeAt(0) + add);

</script>

<template>
  <div class="radio-list">
    <FRadio v-for="(option, index) in options" :name="name" :value="option.text" :checked="option.checked"
      :char="getChar(index)" @click="onClick">

      {{
        option.text }}
    </FRadio>
  </div>
</template>

<style>
.radio-list {
  display: grid;
  gap: 14px;
  font-size: 18px;
  margin-bottom: 14px;
}
</style>