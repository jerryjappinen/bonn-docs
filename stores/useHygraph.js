// import hygraphSetup from '../../bonn/stores/setup/hygraph'
// import { hygraph } from '../../bonn/stores/setup'
import { hygraph } from 'bonn/stores/setup'

import { defineStore } from 'pinia'

// https://app.hygraph.com/b4858899559a47279f1caba58a9c1a30/master/schema/models
export default defineStore('hygraph', hygraph({
  // persist: true,

  projectId: 'b4858899559a47279f1caba58a9c1a30',

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
