import mergeConfigs from 'bonn/nuxt/config/mergeConfigs'
import dev from 'bonn/nuxt/config/dev'

import assets from 'bonn/nuxt/config/assets'
import bonn from 'bonn/nuxt/config/bonn'
// import compression from 'bonn/nuxt/config/compression'
import graphql from 'bonn/nuxt/config/graphql'
import markdown from 'bonn/nuxt/config/markdown'
import meta from 'bonn/nuxt/config/meta'
import noComponentDirectoryPrefixes from 'bonn/nuxt/config/noComponentDirectoryPrefixes'
import pinia from 'bonn/nuxt/config/pinia'
// import scripts from 'bonn/nuxt/config/scripts'
import scss from 'bonn/nuxt/config/scss'
import sitemap from 'bonn/nuxt/config/sitemap'
import svg from 'bonn/nuxt/config/svg'
// import transpile from 'bonn/nuxt/config/transpile'
import viewport from 'bonn/nuxt/config/viewport'

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
