<script setup lang="ts">
const route = useRoute()

useHead({
  meta: [{ property: 'og:title', content: route.meta.title !== 'Fast Quiz' ? `Fast Quiz - ${route.meta.title}` : `Fast Quiz` }]
})
</script>