import { request } from 'graphql-request'

import { hygraphApiUrl } from '@/config'

export default (query, variables) => {
  return request(hygraphApiUrl, query, variables)
}
