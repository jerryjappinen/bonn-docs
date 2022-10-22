import { createNuxtPersistedState } from 'pinia-plugin-persistedstate/nuxt'

export default defineNuxtPlugin((nuxtApp) => {
  // `useCookie` is auto imported in Nuxt
  nuxtApp.$pinia.use(createNuxtPersistedState(useCookie, {

  }))
})
