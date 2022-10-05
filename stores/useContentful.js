import { defineStore } from 'pinia'

import { contentfulSpaceId, contentfulAccessToken } from '@/config'

import contenful from 'bonn/stores/setup/contentful'

export default defineStore('contenful', contenful({
  spaceId: contentfulSpaceId,
  accessToken: contentfulAccessToken
}))
