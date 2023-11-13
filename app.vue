<template>
  <main>
    <NuxtPage />
  </main>
</template>

<style>
body {
  background: #131520;
  overflow: hidden;
  margin: 0px
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>