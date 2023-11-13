
<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    default: '',
    type: String
  },
})

const vModel = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

</script>

<template>
  <input type="text" v-model="vModel">
</template>

<style scoped>
input {
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  border: 0;
  color: rgb(26, 145, 162);
  height: inherit;
  min-height: 48px;
  outline: 0px;
  padding-block: 4px;
  transition-duration: 0.1s;
  transition-property: background-color, color, border-color, opacity, box-shadow;
  transition-timing-function: ease-out;
  word-break: break-word;
  opacity: 1;
  margin: auto;
  display: block;
  background-color: whitesmoke;
  box-shadow: inset 0px 0px 2px 1px #8ebbc2;
}
</style>
