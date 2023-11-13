<script setup lang="ts">
import shuffleArray from '~/server/api/utils/shuffleArray';

useSeoMeta({
  title: 'Fast Quiz',
  ogTitle: 'Fast Quiz',
  description: 'This is Fast Quiz, let me tell you all about it.',
  ogDescription: 'This is Fast Quiz, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image'
})

const { data, pending } = await useFetch(`/api/quiz`)

const quizzes = computed(() => data.value?.items || [])
// const pending = false


// const quizzes = computed(() => [])
const quizzesShuffled = computed(() => pending.value ? [] : [shuffleArray([...quizzes.value]), shuffleArray([...quizzes.value]), shuffleArray([...quizzes.value])])
// const quizzesShuffled = computed(() => [quizzes.value])
</script>

<template>
  <div v-if="pending">
    <FLoading></FLoading>
  </div>
  <div class="wrapper-images">
    <div class="images-line" v-for="options in quizzesShuffled">
      <NuxtLink :href="`/quiz/${quiz.id}`" class="line" v-for="quiz of options" :key="quiz.id"
        :style="{ backgroundImage: `url(${quiz.image}` }">
      </NuxtLink>
    </div>
  </div>
</template>

<style>
:root {
  --duration: 15s;
}

.wrapper-images {
  display: flex;
  flex-direction: column;
  height: 150vh;
  justify-content: center;
  left: 50%;
  position: absolute;
  top: 50%;
  opacity: 0.8;
  transform: translate3d(-50%, -50%, 0) perspective(800px) rotateY(10deg) rotateX(-10deg);
}

.images-line {
  animation: runner var(--duration) ease-in-out;
  display: flex;
  transform: translateX(23%);

  &:nth-child(even) {
    animation-duration: calc(var(--duration) * 1.5);
  }

  .line {
    background-position: 50% 50%;
    background-size: cover;
    flex: none;
    height: 29vh;
    margin: clamp(10px, 2vw, 20px);
    width: 20vh;
    position: relative;
    transition: ease-in-out all 0.3s;
    border-radius: 1rem;
    cursor: pointer;
    transform: scale(1.1) translateZ(0px);

    &:hover {
      cursor: pointer;
      transform: scale(1.2) translateZ(0px);
    }
  }
}


@keyframes runner {
  to {
    transform: translateX(-10.4%);
  }

}
</style>