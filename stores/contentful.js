import contenful from 'bonn/stores/setup/contentful'

import { contentfulSpaceId, contentfulAccessToken } from '@/config'

export const useContentful = defineStore('contenful', contenful({
  spaceId: contentfulSpaceId,
  accessToken: contentfulAccessToken
}))
