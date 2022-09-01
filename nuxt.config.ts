import { defineNuxtConfig } from 'nuxt'

import {
  mergeConfigs,

  dev,

  assets,
  bonn,
  // compression,
  graphql,
  markdown,
  meta,
  noComponentDirectoryPrefixes,
  pinia,
  // scripts,
  scss,
  sitemap,
  svg,
  // transpile,
  viewport
} from 'bonn/nuxt/config'

import {
  baseUrl,
  siteAuthor,
  siteTitle,
  siteDescription,
  siteMainColor,
  twitterUsername,
  longSiteTitle
} from './config'

import routes from './routes'

const config = mergeConfigs(
  assets({
    baseUrl,
    longSiteTitle,

    coverImage: true,
    favicon: true,
    faviconIco: false,
    appleTouchIcon: true,
    maskIcon: true,
    // maskIconColor: '#000',
    manifest: true
  }),
  graphql(),
  markdown(),
  meta({
    siteAuthor,
    siteTitle,
    longSiteTitle,
    siteDescription,
    twitterUsername
  }),
  noComponentDirectoryPrefixes(),
  pinia(),
  scss({
    global: ['styles/global.scss'],
    shared: ['styles/shared.scss']
  }),
  sitemap({
    // baseUrl, // breaks
    routes
  }),
  svg(),
  viewport({
    themeColor: siteMainColor
  }),

  bonn({
    // dev: true,
    icons: true,
    components: true,
    composables: true
  }),
  // compression(), // untested

  // Dev only
  dev({
    typescript: {
      shim: false
    }
  }),

  // transpile(
  //   'md5-hex',
  //   'blueimp-md5',
  //   'gravatar-url',
  //   'vite-svg-loader'
  // )

  {}
)

// console.log(JSON.stringify(config, null, 2))

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig(config)
