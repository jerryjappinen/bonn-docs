import isDev from 'bonn/util/isDev'
import processEnvExists from 'bonn/util/processEnvExists'

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
export const baseUrl = (processEnvExists() ? process.env.BASE_URL : null) || isDev()
  ? 'http://localhost:3000'
  : 'https://bonn.vercel.app'

// Demo space on Contentful
export const contentfulSpaceId = 'mytckhnubswe'
export const contentfulAccessToken = 'Ql1bv2l12RYe9o8Z8hqrJX5-puWKZesCVjJgiD-hd-4'

// Demo space on Hygraph
export const hygraphApiUrl = 'https://api-eu-west-2.hygraph.com/v2/cl7n4zm4t28ec01uh0oum04sc/master'

export const githubUrl = 'https://github.com/jerryjappinen/bonn'

// Pages
export const componentPages = [
  'AppStoreBadge',
  'Buttons',
  'ClickButton',
  'DateInterval',
  'Dropdown',
  'Dump',
  'Ellipsis',
  'EmailLink',
  'ExternalLink',
  'Fade',
  'GooglePlayBadge',
  // 'HygraphRichText',
  'LiveDuration',
  'MobileWebAppBadge',
  'PhoneNumber',
  'Popover',
  'Textfield',
  'Tweet',
  'Toggle',
  'WebAppBadge'
]

export const composablePages = [
  'useCursor',
  // 'useGamepad',
  'useNetwork',
  'usePersist',
  'usePlatform',
  'useTime',
  'useViewport'
]

export const githubActionPages = [
  'publish',
  'run'
]

export const nuxtConfigPages = [
  'bonn',
  'compression',
  'googleFonts',
  'graphql',
  'markdown',
  'meta',
  'noComponentPrefixing',
  'pinia',
  'pwa',
  'scss',
  'sitemap',
  'svg',
  'transpile',
  'viewport',
  'webfonts'
]

export const nuxtHeadPages = [
  'icon',
  'scripts'
]

export const nuxtPluginPages = [
  'piniaPersist'
]

export const scssPages = [
  'body',
  'breakpoints',
  'devices',
  'shadow',
  'variables',
  'webfonts'
]

export const storePages = [
  // 'contentful',
  'device',
  'hygraph'
]

export const styledComponentPages = [
  'Checkbox',
  // 'Slider',
  'Spinner',
  'StyledButton',
  'StyledTextfield',
  'Switch'
]

export const utilPages = [
  'csvToJson',
  'formatDate',
  'formatDateInterval',
  'formatFileSize',
  'formatInitials',
  'formatMachineReadableDate',
  'formatMachineReadableDateInterval',
  'formatMonth',
  'formatSlug',
  'getDomain',
  'getGravatarImageUrl',
  'getNameFromEmail',
  'isAbsoluteUrl',
  'isDev',
  'isEmail',
  'isTest',
  'toJson',
  'toPlainText',

  // 'isPrefixed',
  'isSuffixed',
  'removeSuffix',
  'suffixWith',

  'trimAllWhitespace',
  'trimNewLines',
  'trimWhitespace',
  'tryPromises',
  'wait'
]

export const vercelPages = [
  'endpoint',
  'parseQuery'
]

export const vercelEndpointPages = [
  'contentfulCreate',
  'contentfulEntries',
  'googleSheet'
]
