import isDev from 'bonn/utils/isDev'
import processEnvExists from 'bonn/utils/processEnvExists'

export {
  componentPages,
  composablePages,
  githubActionPages,
  nuxtConfigPages,
  nuxtHeadPages,
  // nuxtPluginPages,
  scssPages,
  storePages,
  styledComponentPages,
  utilPages,
  vercelPages,
  vercelEndpointPages
} from './pages.js'

// Meta data
export const meta = {
  author: 'Jerry Jäppinen',
  title: 'Bonn',
  tagline: 'Develop faster',
  longTitle: 'Bonn - Develop faster',
  description: 'Utility, style and component library for web development.',

  twitterUsername: 'jerryjappinen',

  mainColor: '#ffffff', // '#21324b'
  accentColor: '#0052cd'
}

// Paths
export const host = (processEnvExists() ? process.env.BASE_URL : null) || isDev()
  ? 'http://localhost:3000'
  : 'https://bonn.vercel.app'

// Demo space on Contentful (followgaming.live)
export const contentfulSpaceId = 'mytckhnubswe'
export const contentfulAccessToken = 'Ql1bv2l12RYe9o8Z8hqrJX5-puWKZesCVjJgiD-hd-4'

// Demo space on Hygraph
export const hygraphApiUrl = 'https://api-eu-west-2.hygraph.com/v2/cl7n4zm4t28ec01uh0oum04sc/master'

export const githubUrl = 'https://github.com/jerryjappinen/bonn'
export const npmUrl = 'https://npmjs.org/bonn'
