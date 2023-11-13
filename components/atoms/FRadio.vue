
<script setup lang="ts">
import uidGenerator from '~/utils/uid'
const emit = defineEmits(['click', 'keyup'])

const props = defineProps({
  id: {
    default: '',
    type: String
  },
  name: {
    required: true,
    type: String,
  },
  value: {
    required: true,
    type: String,
  },

  checked: {
    default: false,
    type: Boolean
  },
  char: {
    default: '',
    type: String
  },
})

const uid = computed(() => uidGenerator(props.id))

const onClick = () => {
  emit('click', props.value)
}
</script>

<template>
  <div class="radio-wrapper" :class="props.checked ? 'checked' : ''" tabindex="1" @click="onClick">
    <span v-if="char" class="radio-letter">{{ char }}</span>
    <input :id="uid" :checked="props.checked" type="radio" :name="props.name" class="hidden" :value="props.value">
    <label :for="uid">
      <slot />
    </label>
  </div>
</template>

<style scoped>
.hidden {
  opacity: 0;
  position: absolute;
  z-index: 0;
}

.radio-letter {
  margin-left: 12px;
  margin-right: 12px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(26, 145, 162, 0.6);
  background-color: rgb(216, 235, 235);
  width: 22px;
  height: 22px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-weight: 700;
  border-radius: 4px;
}

.radio-wrapper {
  border-radius: 10px;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgba(26, 145, 162, 0.1);
  box-shadow: rgba(26, 145, 162, 0.6) 0px 0px 0px 1px inset;
  color: rgb(26, 145, 162);
  max-width: 100%;
  height: inherit;
  min-height: 40px;
  outline: 0px;
  padding-block: 4px;
  transition-duration: 0.1s;
  transition-property: background-color, color, border-color, opacity, box-shadow;
  transition-timing-function: ease-out;
  width: 100%;
  word-break: break-word;
  cursor: pointer;
  opacity: 1;

  &:hover {
    background-color: rgba(26, 145, 162, 0.3);
    box-shadow: rgb(0 144 165) 0px 0px 0px 1px inset;

  }

  &.checked {
    background-color: rgba(26, 145, 162, 0.3);
    box-shadow: rgb(0 144 165) 0px 0px 0px 1px inset;
  }

}
</style>


