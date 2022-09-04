import { defineStore } from 'pinia'

export default defineStore('myStore', {
  persist: {
    paths: [
      'someValue'
    ]
  },

  state () {
    return {
      someValue: 'Hello'
    }
  }
})
