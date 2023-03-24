import mergeConfigs from 'bonn/nuxt/config/mergeConfigs'
import dev from 'bonn/nuxt/config/dev'

import {
  bonn,
  // compression,
  coverImage,
  graphql,
  icon,
  manifest,
  markdown,
  meta,
  noComponentPrefixing,
  pinia,
  // scripts,
  scss,
  // sitemap,
  svg,
  transpile,
  twitterUsername,
  viewport
} from 'bonn/nuxt/config'

import { baseUrl, meta as metaData } from './config'

// import routes from './routes'

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

  pinia({
    persist: true
  }),

  // sitemap({
  //   baseUrl
  //   // routes
  // }),

  viewport({
    themeColor: metaData.mainColor
  })
)

// console.log(JSON.stringify(config, null, 2))

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig(config)
