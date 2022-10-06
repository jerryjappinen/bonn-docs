# Todo

- [ ] Replace `.substr` with `.substring`
  - [x] suffix/prefix utils
  - [x] `getDomain`
  - [ ] `composeClassnames`
  - [ ] `getUserAgentStringValue`
- [ ] Make `isDev` work in Nuxt 3 runtime
- [ ] `Popover` component
- [ ] `RichText` component for Hygraph
- [ ] Expand color set slightly
- [ ] Improve CSS variables API in components
- [ ] Vercel helpers
- [ ] Predefined Vercel endpoints

### Later

- [ ] Fix `HighlightedPre` whitespace
  - This problem is created by Vue.js slots trimming whitespace
- [ ] Add `eslint` configurations and plugins for Vue and Nuxt 3 support
- [ ] Load `pinia` persistance plugin by default
- [ ] Make `bonn` dev alias work
- [ ] Load code samples from separate files
- [ ] Add a customised `NuxtAppPage` component
  - Might be tricky with `definePageMeta` being a macro
- [ ] Notifications service with Pinia
- [ ] Toast component
- [ ] Register `bonn` on https://modules.nuxtjs.org/?version=3.x

### `useLazyAsyncData`

Add example page that uses `useLazyAsyncData`:

```js
const { data: users, pending, refresh, error } = await useLazyFetch(() => {
  return `users?page=${page.value}&take=6`, { baseURL: config.API_BASE_URL }
});
```

### Done

- [x] Hygraph
  - [x] Demo space
  - [x] Pinia store
  - [x] Utilities
  - [x] Documentation
  - [x] Examples (with GQL files and all that)
- [x] Contentful Pinia store
- [x] `trimAny`
- [x] Expand color set slightly
- [x] Contentful support
- [x] Premade Vercel endpoints
- [x] Improve CSS variables API in components
- [x] Fade with directions
  - [x] Make overriding transition durations work
- [x] Default plugings for markdown loader
- [x] Add `NuxtApp` component
- [x] Add syntax highlighting to docs
- [x] Add `pwa` and `manifest` support to Nuxt: https://github.com/kevinmarrec/nuxt-pwa-module
- [x] GraphQL language file support in `nuxt.config`
- [x] Move to proper CSS variables
- [x] Support overridable CSS vars in components
- [x] Document CSS vars in components
- [x] Improve SCSS tests
- [x] Add dark mode support using CSS variables
- [x] `pinia` persistance plugin
- [x] Add Nuxt plugins
- [x] Add color variable reference to docs
- [x] Add `suffixWith` and `prefixWith`
- [x] Make `Textfield` support custom content and not just icons
