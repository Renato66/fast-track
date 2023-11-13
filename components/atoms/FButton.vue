
<script setup lang="ts">
import uidGenerator from '~/utils/uid'
import type { PropType, ButtonHTMLAttributes } from 'vue';
const emit = defineEmits(['click', 'keyup', 'keydown', 'keypress'])

const props = defineProps({
  appearance: {
    default: 'primary',
    type: String,
    validator: (value: string) =>
      [
        'primary',
        'secondary',
        'active'
      ].includes(value)
  },
  id: {
    default: '',
    type: String
  },
  size: {
    default: 'medium',
    type: String,
    validator: (value: string) => ['small', 'medium', 'large'].includes(value)
  },
  to: {
    default: '',
    type: String
  },
  type: {
    default: 'button',
    type: String as PropType<ButtonHTMLAttributes['type']>,
    validator: (value: string) => ['button', 'reset', 'submit'].includes(value)
  },
  loading: {
    default: false,
    type: Boolean
  },
  title: {
    default: '',
    type: String
  },
  disabled: {
    default: false,
    type: Boolean
  },
})

const focus = computed(() =>
  !props.disabled && !props.loading
)

const router = useRouter()

const uid = computed(() => uidGenerator(props.id))

const onClick = (event: Event) => {
  if (props.disabled) return

  if (props.to) {
    router.push(props.to)
  } else {
    emit('click', event)
  }
}
</script>

<template>
  <button :id="uid" :class="props.appearance" :tabindex="focus ? 0 : -1" :disabled="!focus"
    :aria-label="props.loading ? 'loading' : ''" :title="props.title" :type="props.type" @click="onClick"
    @keydown="emit('keydown', $event)" @keypress="emit('keypress', $event)" @keyup="emit('keyup', $event)">
    <FLoading v-if="props.loading" />
    <slot v-else />
  </button>
</template>

<style scoped>
button {
  cursor: pointer;
  display: inline-block;
  line-height: 10px;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 24px;
  height: 48px;
  box-shadow: none;
  font-size: 1rem;
  padding: 16px 32px;
  opacity: 0.9;
  border: 1px solid #78bac4;
  background: #82b3bb;
  color: white;

  &:hover {
    opacity: 1;
  }

  &:disabled {
    background: #9b9b9b;
    border: 1px solid #9b9b9b;
    box-shadow: inset -1px 1px 6px #7f7f7f;
    opacity: 0.9;
    cursor: default;

  }

  &[aria-label='loading'] {
    cursor: default;
  }
}
</style>
