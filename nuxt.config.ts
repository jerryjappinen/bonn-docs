import mergeConfigs from 'bonn/nuxt/config/mergeConfigs'
import dev from 'bonn/nuxt/config/dev'

import bonn from 'bonn/nuxt/config/bonn'
// import compression from 'bonn/nuxt/config/compression'
import coverImage from 'bonn/nuxt/config/coverImage'
import graphql from 'bonn/nuxt/config/graphql'
import icon from 'bonn/nuxt/config/icon'
import manifest from 'bonn/nuxt/config/manifest'
import markdown from 'bonn/nuxt/config/markdown'
import meta from 'bonn/nuxt/config/meta'
import noComponentPrefixing from 'bonn/nuxt/config/noComponentPrefixing'
import pinia from 'bonn/nuxt/config/pinia'
// import scripts from 'bonn/nuxt/config/scripts'
import scss from 'bonn/nuxt/config/scss'
import sitemap from 'bonn/nuxt/config/sitemap'
import svg from 'bonn/nuxt/config/svg'
import transpile from 'bonn/nuxt/config/transpile'
import twitterUsername from 'bonn/nuxt/config/twitterUsername'
import viewport from 'bonn/nuxt/config/viewport'

import { baseUrl, meta as metaData } from './config'

import routes from './routes'

const config = mergeConfigs(

  // FIXME: Untested
  // compression(),

  // Dev only
  // https://v3.nuxtjs.org/getting-started/installation
  dev({
    typescript: {
      shim: false
    }
  }),

  // Library support
  transpile(
    'prism-es6',
    'lodash-es'
  ),

  // File format support
  bonn({
    // dev: true,
    icons: true,
    components: true,
    composables: true
  }),
  graphql(),
  markdown(),
  svg(),
  noComponentPrefixing(),
  scss({
    global: ['styles/global.scss'],
    shared: ['styles/shared.scss']
  }),

  // Site data
  icon({
    favicon: true,
    // faviconIco: true,
    appleTouchIcon: true,
    maskIcon: true
    // maskIconColor: '#000'
  }),
  manifest(),
  coverImage({
    baseUrl,
    title: metaData.longTitle,
    path: 'cover-image.png'
  }),

  meta(metaData),
  twitterUsername(metaData.twitterUsername),

  pinia(),

  sitemap({
    // baseUrl, // breaks
    routes
  }),

  viewport({
    themeColor: metaData.mainColor
  })
)

// console.log(JSON.stringify(config, null, 2))

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig(config)
