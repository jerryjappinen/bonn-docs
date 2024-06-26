import {
  dev,
  mergeConfigs,

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
  robots,
  routing,
  // scripts,
  scss,
  svg,
  transpile,
  twitterUsername,
  viewport
} from 'bonn/nuxt/config'

import { host, meta as metaData } from './config'

import routes from './routes'

const config = mergeConfigs(

  // They just straight-up broke all deployments
  // FIXME: remove this once this issue is closed:
  // https://github.com/nuxt/cli/issues/193
  {
    hooks: {
      close (nuxt: { options: { _prepare: any } }) {
        if (!nuxt.options._prepare) {
          process.exit()
        }
      }
    }
  },

  // FIXME: Untested
  // compression(),

  routing({
    routes
  }),

  // Dev only
  // https://v3.nuxtjs.org/getting-started/installation
  dev({
    typescript: {
      shim: false
    }
  }),

  // Library support
  transpile(
    'prism-es6'
  ),

  // File format support
  bonn({
    // dev: true,
    components: true,
    composables: true,
    icons: true,
    utils: true
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
    host,
    title: metaData.longTitle,
    path: 'cover-image.png'
  }),

  meta(metaData),
  twitterUsername(metaData.twitterUsername),

  pinia({
    persist: true
  }),

  robots(),

  viewport({
    themeColor: metaData.mainColor
  })
)

// console.log(JSON.stringify(config, null, 2))

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig(config)
