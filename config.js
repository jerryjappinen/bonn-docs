import isDev from 'bonn/util/isDev'
import processEnvExists from 'bonn/util/processEnvExists'

// Meta data
export const siteAuthor = 'Jerry Jäppinen'
export const siteTitle = 'Bonn'
export const siteTagline = 'Develop faster'
export const siteDescription = 'Utility, style and component library for web development.'
export const siteMainColor = '#ffffff' // '#21324b'
export const siteAccentColor = '#0052cd'
export const twitterUsername = 'jerryjappinen'
export const longSiteTitle = `${siteTitle} – ${siteTagline}`

// Paths
export const baseUrl = (processEnvExists() ? process.env.BASE_URL : null) || isDev()
  ? 'http://localhost:3000'
  : 'https://bonn.vercel.app'

// Demo space on Hygraph
export const hygraphApiUrl = 'https://api-eu-west-2.hygraph.com/v2/cl7n4zm4t28ec01uh0oum04sc/master'

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
  'LiveDuration',
  'MobileWebAppBadge',
  'RichText',
  // 'Slider',
  'Spinner',
  'Switch',
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

export const nuxtConfigPages = [
  'assets',
  'bonn',
  'compression',
  'googleFonts',
  'graphql',
  'markdown',
  'meta',
  'noComponentDirectoryPrefixes',
  'pinia',
  'pwa',
  'scripts',
  'scss',
  'sitemap',
  'svg',
  'transpile',
  'viewport',
  'webfonts'
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
  'device',
  'hygraph'
]

export const styledComponentPages = [
  'Checkbox',
  'StyledButton',
  'StyledTextfield'
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
