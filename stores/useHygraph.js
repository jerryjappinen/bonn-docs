import { defineStore } from 'pinia'

import { hygraphProjectId } from '@/config'

import hygraph from 'bonn/stores/setup/hygraph'
// import hygraph from '../../bonn/stores/setup/hygraph'

export default defineStore('hygraph', hygraph({
  // persist: true,

  projectId: hygraphProjectId,

  orderBy: {
    Person: 'name'
  },

  keyBy: {
    Person: [
      'id',
      'slug'
    ]
  }
}))
