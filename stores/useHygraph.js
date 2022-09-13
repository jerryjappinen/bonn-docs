import { defineStore } from 'pinia'

import { hygraphApiUrl } from '@/config'

import hygraph from 'bonn/stores/setup/hygraph'

export default defineStore('hygraph', hygraph({
  // persist: true,

  apiUrl: hygraphApiUrl,

  orderBy: {
    Person: 'name'
  },

  keyBy: {
    Person: [
      'id',
      'slug'
    ]
  },

  groupBy: {
    Person: [
      'country'
    ]
  }
}))
