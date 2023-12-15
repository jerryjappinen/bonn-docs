import compact from 'lodash-es/compact'
import flattenDeep from 'lodash-es/flattenDeep'

import { githubUrl } from '@/config'

export default (...srcPaths) => {
  const paths = compact(flattenDeep(srcPaths))
  return githubUrl + (paths.length ? '/blob/main/' + paths.join('/') : '')
}
