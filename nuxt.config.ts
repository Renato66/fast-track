// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    { path: "~/components/atoms", pattern: "**/*.vue" },
    { path: "~/components/molecules", pattern: "**/*.vue" },
    { path: "~/components/organisms", pattern: "**/*.vue" },
  ],
  modules: ["@vueuse/nuxt"],
  plugins: ["~/plugins/handleError.ts"],
});
