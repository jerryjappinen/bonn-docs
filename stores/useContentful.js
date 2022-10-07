import { defineStore } from 'pinia'

import contenful from 'bonn/stores/setup/contentful'

import { contentfulSpaceId, contentfulAccessToken } from '@/config'

export default defineStore('contenful', contenful({
  spaceId: contentfulSpaceId,
  accessToken: contentfulAccessToken
}))
