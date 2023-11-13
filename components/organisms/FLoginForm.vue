
<script setup lang="ts">
const emit = defineEmits(['update:email'])
const email = ref('')
const { $handleError } = useNuxtApp()

const onSubmit = () => {
  emit('update:email', email.value)
}

const disabled = computed(() => !email.value)

const notImplemented = () => {
  $handleError(new Error('Not implemented'))
}
const handleGoogle = notImplemented
const handleFacebook = notImplemented

</script>

<template>
  <FForm @submit.prevent="onSubmit" title="Get Started Now"
    description="Enter your credentials to connect to your account">
    <div class="social-wrapper">
      <button @click="handleGoogle">Google</button>
      <button @click="handleFacebook">Facebook</button>
    </div>
    <div class="or-divider">or</div>
    <FInput type="email" v-model="email" :placeholder="'email@fastquiz.com'" />

    <div class="text-center mt-2">
      <FButton :disabled="disabled" type="submit">Start</FButton>
    </div>
  </FForm>
</template>

<style>
.social-wrapper {
  justify-content: space-between;
  display: flex;
  gap: 14px;

  >button {
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    position: relative;
    border: 0;
    color: rgb(26, 145, 162);
    min-height: 48px;
    outline: 0px;

    cursor: pointer;
  }
}


.or-divider {
  position: relative;
  line-height: 48px;
  text-align: center;
  font-size: 14px;
  color: #a5a5a5;
}

.or-divider::before,
.or-divider::after {
  position: absolute;
  width: 130px;
  height: 1px;

  top: 24px;

  background-color: #aaa;

  content: '';
}

.or-divider::before {
  left: 0;
}

.or-divider::after {
  right: 0;
}

.social {
  display: flex;
}

.text-center {
  text-align: center;
}

.mt-2 {
  margin-top: 8px
}
</style>