import { defineStore } from 'pinia'

import { hygraphApiUrl } from '@/config'

import { request } from 'graphql-request'

import hygraph from 'bonn/stores/setup/hygraph'

export default defineStore('hygraph', hygraph({
  // persist: true,
  request,

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
