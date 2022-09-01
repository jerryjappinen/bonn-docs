import { defineStore } from 'pinia'

export default defineStore('myStore', {
  persist: true,

  state: () => {
    return {
      someValue: 'Hello'
    }
  }
})
