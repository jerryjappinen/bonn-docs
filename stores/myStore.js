import { defineStore } from 'pinia'

export const useMyStore = defineStore('myStore', {
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
