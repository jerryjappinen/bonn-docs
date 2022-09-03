# Todo

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
- [ ] Add `startsWith` and `endsWith`

### Later

- [ ] Make `bonn` dev alias work
- [ ] Replace `.substr` with `.substring`
  - [x] suffix/prefix utils
  - [x] `getDomain`
  - [ ] `composeClassnames`
  - [ ] `getUserAgentStringValue`
- [ ] Make `Textfield` support custom content and not just icons
- [ ] Add `eslint` configurations and plugins for Vue and Nuxt 3 support
- [ ] Load `pinia` persistance plugin by default
- [ ] Add a customised `NuxtAppPage` component
  - Might be tricky with `definePageMeta` being a macro
- [ ] Load code samples from separate files
- [ ] Fix `HighlightedPre` whitespace
- [ ] Hygraph
  - [ ] Utilities
  - [ ] Rich text renderer component
  - [ ] Pinia store
  - [ ] Documentation
  - [ ] Examples (with GQL files and all that)
- [ ] Contentful Pinia store
- [ ] Register `bonn` on https://modules.nuxtjs.org/?version=3.x

### `useLazyAsyncData`

Add example page that uses `useLazyAsyncData`:

```js
const { data: users, pending, refresh, error } = await useLazyFetch(() => {
  return `users?page=${page.value}&take=6`, { baseURL: config.API_BASE_URL }
});
```
