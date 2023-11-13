
<script setup lang="ts">
import type { Question, QuestionsGetQuery } from '~/server/api/quiz/questions';
import type { RankPostBody } from '~/server/api/quiz/rank.post';

const route = useRoute()
const { $handleError } = useNuxtApp()

const email = ref('')
const questions = ref([]) as Ref<Question[]>
const loading = ref(false)
const step = ref(0)
const time = ref()
const answers = ref([]) as Ref<string[]>
const rank = ref(null) as Ref<{ betterThenPercentage: number; score: number; } | null>


const { data: notTypedData } = await useFetch(`/api/quiz/${route.params.id}`)
const data = notTypedData as Ref<{ title: string, description: string, image: string }>

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}

useSeoMeta({
  title: data.value.title,
  ogTitle: data.value.title,
  description: data.value.description,
  ogDescription: data.value.description,
  ogImage: data.value.image
})

const startQuiz = async () => {
  try {
    loading.value = true
    step.value = 0
    const { data: response } = await useFetch(`/api/quiz/questions`, {
      params: {
        quizId: route.params.id
      } as QuestionsGetQuery
    })
    if (!response.value || !response.value.length) throw new Error("No questions found");
    time.value = Date.now()
    questions.value = response.value
  } catch (error) {
    $handleError(error)
  } finally {
    loading.value = false
  }
}

whenever(email, startQuiz)

const handleAnswer = (answer: string) => {
  answers.value.push(answer)
  step.value++
}

const finished = computed(() => questions.value.length && step.value === questions.value.length)

const finishQuiz = async () => {
  try {
    loading.value = true
    const { data: response } = await useFetch(`/api/quiz/rank`, {
      method: 'post',
      body: {
        quizId: route.params.id,
        email: email.value,
        time: Date.now() - time.value,
        answers: answers.value
      } as RankPostBody
    })
    rank.value = response.value
  } catch (error) {
    $handleError(error)
  } finally {
    loading.value = false
  }
}


whenever(finished, finishQuiz)

</script>

<template>
  <div class="container">
    <FLoginForm v-if="!email" @update:email="email = $event" :loading="loading" />
    <FQuizForm :question="question" :options="answers" v-show="step === index" :key="id"
      v-for="({ question, id, answers }, index) in questions" @update:answer="handleAnswer($event)" />
    <FRank v-bind="rank" :loading="loading" v-if="finished" />
  </div>
</template>

<style>
.container {
  font-family: arial;
  font-size: 24px;
  padding: 25px;
  box-sizing: border-box;
  width: 100%;
  height: 80vh;
  /* Center vertically and horizontally */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>